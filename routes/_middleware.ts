import { MiddlewareHandlerContext } from '$fresh/server.ts'

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const res = await ctx.next()

  res.headers.set('server', "fresh honky tonkin'")

  if (ctx.destination === 'route') {
    const url = new URL(req.url)
    console.log('Pageview:', url.pathname, req.referrer)

    const kv = await Deno.openKv()

    const pageviews = await kv.get<number>(['analytics', 'pageviews'])

    await kv.set(['analytics', 'pageviews'], (pageviews.value ?? 0) + 1)
  }

  return res
}
