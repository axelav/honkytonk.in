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
    <a
      class="sm:col-span-2"
      href={`/${note.type === 'place' ? 'places' : 'notes'}/${note.slug}`}
    >
      <SectionHeading>{note.title}</SectionHeading>
      {note.type === 'note' && (
        <>
          <div class="mt-1">
            <time class="text-gray-500">
              {new Date(note.publishedAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          {note.snippet && <div class="mt-1 text-gray-900">{note.snippet}</div>}
        </>
      )}
      {note.type === 'place' && note.snippet && (
        <div class="mt-1 text-gray-500">{note.snippet}</div>
      )}
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
