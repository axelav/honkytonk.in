import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { render } from 'gfm'
import { join } from 'https://deno.land/std@0.183.0/path/mod.ts'
import { PageHeading } from '@/components/typography.tsx'

interface MarkdownFile {
  title: string
  content: string
}

export const readMarkdownFile = async (
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
      const page = await readMarkdownFile(ctx.params.filename)

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
      // case '/library':
      return (
        <>
          <Head>
            <title>{data.title} ://honkytonk.in/</title>
          </Head>
          <PageHeading>{data.title}</PageHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: render(data.content, { allowIframes: true }),
            }}
          />
        </>
      )
    case '/wp-login.php':
    case '/wp-admin':
      return <div>Fuck off and die.</div>
    default:
      return <div>Hello {params.filename}. You look beautiful today.</div>
  }
}

export default CatchAllPage
