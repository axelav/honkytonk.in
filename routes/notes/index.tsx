import { Handlers, PageProps } from '$fresh/server.ts'
import { getNotes, Note } from '@/utils/notes.ts'

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getNotes()

    return ctx.render(notes)
  },
}

const NoteCard = ({ note }: { note: Note }) => (
  <div class="py-8 border(t gray-200)">
    <a class="sm:col-span-2" href={`/notes/${note.slug}`}>
      <h3 class="text(3xl gray-900) font-bold">{note.title}</h3>
      <time class="text-gray-500">
        {new Date(note.publishedAt).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <div class="mt-4 text-gray-900">{note.snippet}</div>
    </a>
  </div>
)

const NotesIndexPage = ({ data: notes }: PageProps<Note[]>) => (
  <div>
    <h1 class="text-5xl font-bold">Notes</h1>
    <div class="mt-8">
      {notes.map((note) => (
        <NoteCard note={note} />
      ))}
    </div>
  </div>
)

export default NotesIndexPage
