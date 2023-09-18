import { MiddlewareHandlerContext } from '$fresh/server.ts'

export async function handler(_req: Request, ctx: MiddlewareHandlerContext) {
  const res = await ctx.next()

  res.headers.set('server', "fresh honky tonkin'")

  if (ctx.destination === 'route') {
    const kv = await Deno.openKv()

    const pageviews = await kv.get<number>(['analytics', 'pageviews'])

    await kv.set(['analytics', 'pageviews'], (pageviews.value ?? 0) + 1)

    await kv.set(['analytics', 'userAttributes'], {
      ref: document.referrer,
      userAgent: navigator.userAgent,
      language: navigator.language,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })
  }

  return res
}
