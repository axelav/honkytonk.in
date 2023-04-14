import { Handlers, PageProps } from '$fresh/server.ts'
import { getNotes, Note } from '@/utils/notes.ts'
import { PageHeading, SectionHeading } from '@/components/typography.tsx'

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getNotes()

    return ctx.render(notes)
  },
}

export const NoteCard = ({ note }: { note: Note }) => (
  <div class="mt-6">
    <a class="sm:col-span-2" href={`/notes/${note.slug}`}>
      <SectionHeading>{note.title}</SectionHeading>
      <time class="text-gray-500 mt-2">
        {new Date(note.publishedAt).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      {note.snippet && <div class="mt-2 text-gray-900">{note.snippet}</div>}
    </a>
  </div>
)

const NotesIndexPage = ({ data: notes }: PageProps<Note[]>) => (
  <div>
    <PageHeading>Notes</PageHeading>
    <div class="mt-8">
      {notes.map((note) => (
        <NoteCard note={note} />
      ))}
    </div>
  </div>
)

export default NotesIndexPage
