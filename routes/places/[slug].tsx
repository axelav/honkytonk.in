import { parse } from 'marked'
import { Head } from '$fresh/runtime.ts'
import { getNote } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
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
        </Head>

        <div>
          <PageHeading>{note.title}</PageHeading>
          {note.snippet && (
            <section>
              <span class="snippet">{note.snippet}</span>
            </section>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: parse(note.content) as string,
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
