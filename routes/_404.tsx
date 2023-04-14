import { UnknownPageProps } from '$fresh/server.ts'

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div>
      <p>404 not found: {url.pathname}</p>
    </div>
  )
}
