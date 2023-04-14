import { MiddlewareHandlerContext } from '$fresh/server.ts'

interface State {
  data: { [key: string]: any }
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  const res = await ctx.next()

  console.log('middleware', ctx.state.data)

  res.headers.set('server', "fresh honky tonk'")

  return res
}
