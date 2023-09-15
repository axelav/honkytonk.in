import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { getNotes, Note } from '@/utils/notes.ts'
import { PageHeading, SectionHeading } from '@/components/typography.tsx'
import NoteCard from '@/components/NoteCard.tsx'

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getNotes('places/trans-america-trail')

    return ctx.render(notes.reverse())
  },
}

const TransAmericaTrailIndexPage = ({ data: notes }: PageProps<Note[]>) => (
  <>
    <Head>
      <title>Trans America Trail ://honkytonk.in/</title>
    </Head>
    <div>
      <PageHeading>Trans America Trail</PageHeading>
      <div class="mt-8">
        {notes.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  </>
)

export default TransAmericaTrailIndexPage
