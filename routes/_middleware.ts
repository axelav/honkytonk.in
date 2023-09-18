import { MiddlewareHandlerContext } from '$fresh/server.ts'

interface State {
  data: { [key: string]: any }
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  const res = await ctx.next()

  res.headers.set('server', "fresh honky tonkin'")

  if (ctx.destination === 'route') {
    const kv = await Deno.openKv()

    const entry = await kv.get<number>(['analytics', 'pageviews'])

    await kv.set(['analytics', 'pageviews'], (entry.value ?? 0) + 1)
  }

  return res
}
