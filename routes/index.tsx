import { Handlers, PageProps } from '$fresh/server.ts'
import { getNotes, Note } from '@/utils/notes.ts'
import { NoteCard } from '@/routes/notes/index.tsx'

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getNotes()

    return ctx.render(notes.slice(0, 8))
  },
}

const Home = ({ data: notes }: PageProps<Note[]>) => (
  <div>
    <h2 class="mt-8 text-3xl font-bold">Lately</h2>

    <div class="mt-8">
      {notes.map((note) => (
        <NoteCard note={note} />
      ))}
    </div>
  </div>
)

export default Home
