import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { CSS, render } from 'gfm'
import { join } from 'https://deno.land/std@0.183.0/path/mod.ts'
import { PageHeading } from '@/components/typography.tsx'
import { MarkdownStyle } from '@/components/Markdown.tsx'

interface MarkdownFile {
  title: string
  content: string
}

export const getMarkdownFile = async (
  filename: string
): Promise<MarkdownFile | null> => {
  const text = await Deno.readTextFile(join('./md/pages', `${filename}.md`))

  const title = filename.charAt(0).toUpperCase() + filename.slice(1)

  return {
    title,
    content: text,
  }
}

export const handler: Handlers<MarkdownFile | null> = {
  async GET(_req, ctx) {
    try {
      const page = await getMarkdownFile(ctx.params.filename)

      return ctx.render(page)
    } catch (_err) {
      return ctx.render()
    }
  },
}

const CatchAllPage = ({ url, params, data }: PageProps<MarkdownFile>) => {
  switch (url.pathname) {
    case '/now':
    case '/future':
    case '/library':
      return (
        <>
          <Head>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <MarkdownStyle />
          </Head>
          <PageHeading>{data.title}</PageHeading>
          <div
            class="mt-8 markdown-body"
            dangerouslySetInnerHTML={{
              __html: render(data.content, { allowIframes: true }),
            }}
          />
        </>
      )
    default:
      return <div>Hello {params.filename}. You look beautiful today.</div>
  }
}

export default CatchAllPage
