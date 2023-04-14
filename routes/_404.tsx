import { UnknownPageProps } from '$fresh/server.ts'

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div className="m-8">
      <p>404 not found: {url.pathname}</p>
      <a href="/">Home</a>
    </div>
  )
}
