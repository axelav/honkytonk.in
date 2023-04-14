import { Handlers, PageProps } from '$fresh/server.ts'
import { CSS, render } from 'gfm'
import { Head } from '$fresh/runtime.ts'
import { getNote, Note } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'

export const handler: Handlers<Note> = {
  async GET(_req, ctx) {
    let note

    try {
      note = await getNote(ctx.params.slug, 'places')
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
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </Head>

    <div>
      <PageHeading>{note.title}</PageHeading>
      {note.snippet && <div class="mt-2 text-gray-500">{note.snippet}</div>}
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
