import { Head } from '$fresh/runtime.ts'
import { getNote } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import { defineRoute } from '$fresh/server.ts'
import { parse } from 'marked'

export default defineRoute(async (_req, ctx) => {
  try {
    const note = await getNote(ctx.params.slug, 'notes')

    return (
      <>
        <Head>
          <title>{note.title} ://honkytonk.in/</title>
        </Head>

        <div>
          <PageHeading>{note.title}</PageHeading>
          <section>
            <time>
              {new Date(note.publishedAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </section>
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
