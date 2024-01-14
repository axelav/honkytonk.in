import { Head } from '$fresh/runtime.ts'
import { TopNav } from '@/components/TopNav.tsx'
import { PageContainer } from '@/components/PageContainer.tsx'
import { defineApp } from '$fresh/src/server/defines.ts'

export default defineApp((_req, { Component }) => (
  <html>
    <Head>
      <script
        data-goatcounter="https://honkytonkin.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </Head>

    <body class="body bg-gray-50">
      <main class="app max-w-screen-md px-4 pt-16 mx-auto">
        <TopNav />
        <PageContainer>
          <Component />
        </PageContainer>
      </main>
    </body>
  </html>
))
