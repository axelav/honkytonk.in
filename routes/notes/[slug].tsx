import { render } from 'gfm'
import { Head } from '$fresh/runtime.ts'
import { getNote } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import { defineRoute } from '$fresh/server.ts'

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
          <div>
            <time>
              {new Date(note.publishedAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div
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
