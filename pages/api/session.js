const { Pool } = require('pg')

const credentials = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
}

const pool = new Pool(credentials)

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

  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    const insertSessionText =
      'INSERT INTO sessions(started_at, ended_at, ref, device, user_agent, language, time_zone, latency, page_load, length, pageview_count) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *'
    const insertSessionValues = [
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
    ]

    const sessionResult = await client.query(
      insertSessionText,
      insertSessionValues
    )

    await Promise.all(
      events.map(async ({ timestamp, event, type, length }) => {
        const insertEventText =
          'INSERT INTO events(session_id, timestamp, event, type, length) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const insertEventValues = [
          sessionResult.rows[0].id,
          timestamp,
          event,
          type,
          length,
        ]

        await client.query(insertEventText, insertEventValues)
      })
    )

    await client.query('COMMIT')

    res.status(201).end()
  } catch (err) {
    await client.query('ROLLBACK')
    res.status(500).end()
    console.error('error running query', err)
  } finally {
    client.release()
  }
}
