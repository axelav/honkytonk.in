import { Handlers, PageProps } from '$fresh/server.ts'
import { CSS, render } from 'gfm'
import { Head } from '$fresh/runtime.ts'
import { getNote, Note } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import { MarkdownStyle } from '@/components/Markdown.tsx'

export const handler: Handlers<Note> = {
  async GET(_req, ctx) {
    let note

    try {
      // TODO: reuse the /notes/[slug] handler & component, but pass in a
      // different `type` to `getNote` so it knows to look in the `places`
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

const PlacePage = ({ data: note }: PageProps<Note>) => (
  <>
    <Head>
      <title>{note.title} ://honkytonk.in/</title>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <MarkdownStyle />
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

export default PlacePage
