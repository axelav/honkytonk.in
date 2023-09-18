import { Handlers, PageProps } from '$fresh/server.ts'
import { render } from 'gfm'
import { Head } from '$fresh/runtime.ts'
import { getNote, Note } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import { MarkdownStyle } from '@/components/Markdown.tsx'

export const handler: Handlers<Note> = {
  async GET(_req, ctx) {
    let note

    try {
      note = await getNote(ctx.params.slug, 'notes')
    } catch (err) {
      console.error(err)

      return ctx.renderNotFound()
    }

    if (note === null) {
      return ctx.renderNotFound()
    }

    return ctx.render(note)
  },
}

const NotePage = ({ data: note }: PageProps<Note>) => (
  <>
    <Head>
      <title>{note.title} ://honkytonk.in/</title>
      <MarkdownStyle />
    </Head>

    <div>
      <PageHeading>{note.title}</PageHeading>
      <div class="mt-2">
        <time class="text-gray-500">
          {new Date(note.publishedAt).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      <div
        class="mt-8 markdown-body"
        dangerouslySetInnerHTML={{
          __html: render(note.content, { allowIframes: true }),
        }}
      />
    </div>
  </>
)

export default NotePage
