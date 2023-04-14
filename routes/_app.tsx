import { Head } from '$fresh/runtime.ts'
import { AppProps } from '$fresh/server.ts'
import { TopNav } from '@/components/TopNav.tsx'

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>https://honkytonk.in/</title>
      </Head>
      <body class="body">
        <main class="app max-w-screen-md px-4 pt-16 mx-auto">
          <TopNav />
          <Component />
        </main>
      </body>
    </html>
  )
}
