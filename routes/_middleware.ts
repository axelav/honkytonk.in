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

  return res
}
