import { Head } from '$fresh/runtime.ts'
import { TopNav } from '@/components/TopNav.tsx'
import { PageContainer } from '@/components/PageContainer.tsx'
import { defineApp } from '$fresh/src/server/defines.ts'

export default defineApp((_req, { Component }) => (
  <html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* https://github.com/picocss/pico */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.blue.min.css"
      />

      <script
        data-goatcounter="https://honkytonkin.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </Head>

    <body>
      <main>
        <TopNav />
        <PageContainer>
          <Component />
        </PageContainer>
      </main>
    </body>
  </html>
))
