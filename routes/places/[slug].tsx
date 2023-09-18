import { render } from 'gfm'
import { Head } from '$fresh/runtime.ts'
import { getNote } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import { MarkdownStyle } from '@/components/Markdown.tsx'
import { defineRoute } from '$fresh/server.ts'

export default defineRoute(async (_req, ctx) => {
  try {
    // TODO: reuse the /notes/[slug] handler & component, but pass in a
    // different `type` to `getNote` so it knows to look in the `places`
    const note = await getNote(ctx.params.slug, 'places')

    return (
      <>
        <Head>
          <title>{note.title} ://honkytonk.in/</title>
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
  } catch (err) {
    console.error(err)

    return ctx.renderNotFound()
  }
})
