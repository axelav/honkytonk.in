import { Handlers, PageProps } from '$fresh/server.ts'
import { getNotes, Note } from '@/utils/notes.ts'
import { PageHeading, SectionHeading } from '@/components/typography.tsx'
import { NoteCard } from '@/routes/notes/index.tsx'

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getNotes('places')

    return ctx.render(notes)
  },
}

const PlacesIndexPage = ({ data: notes }: PageProps<Note[]>) => (
  <div>
    <PageHeading>Places</PageHeading>
    <div class="mt-8">
      {notes.map((note) => (
        <NoteCard note={note} />
      ))}
    </div>
  </div>
)

export default PlacesIndexPage