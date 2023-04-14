const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY,
  domain: process.env.FAUNA_HOST,
  port: 443,
  scheme: 'https',
})

module.exports = async (req, res) => {
  const {
    events,
    startedAt,
    endedAt,
    ref,
    device,
    userAgent,
    language,
    timeZone,
    latency,
    pageLoad,
    length,
    pageviewCount,
  } = JSON.parse(req.body)

  try {
    const { ref: sessionRef } = await client.query(
      q.Create(q.Collection('_sessions'), {
        data: {
          startedAt,
          endedAt,
          ref,
          device,
          userAgent,
          language,
          timeZone,
          latency,
          pageLoad,
          length,
          pageviewCount,
        },
      })
    )

    await Promise.all(
      events.map(async ({ timestamp, event, type, length }) => {
        await client.query(
          q.Create(q.Collection('_events'), {
            data: {
              sessionRef,
              timestamp,
              event,
              type,
              length,
            },
          })
        )
      })
    )

    res.status(201).end()
  } catch (err) {
    res.status(500).end()
    console.error('error running query', err)
  }
}
