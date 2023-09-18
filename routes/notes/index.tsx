import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { getNotes, Note } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import NoteCard from '@/components/NoteCard.tsx'

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getNotes('notes')

    return ctx.render(notes)
  },
}

const NotesIndexPage = ({ data: notes }: PageProps<Note[]>) => (
  <>
    <Head>
      <title>Notes ://honkytonk.in/</title>
    </Head>
    <div>
      <PageHeading>Notes</PageHeading>
      <div class="mt-8">
        {notes.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  </>
)

export default NotesIndexPage
