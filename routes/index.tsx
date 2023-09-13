import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { getNotes, Note } from '@/utils/notes.ts'
import { NoteCard } from '@/routes/notes/index.tsx'
import { PageHeading } from '@/components/typography.tsx'

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const [notes, places] = await Promise.all([getNotes(), getNotes('places')])

    const allNotes = [...notes, ...places].sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    })

    return ctx.render(allNotes.slice(0, 8))
  },
}

const Home = ({ data: notes }: PageProps<Note[]>) => (
  <>
    <Head>
      <title>Home ://honkytonk.in/</title>
    </Head>
    <div>
      <PageHeading>Lately</PageHeading>

      <div class="mt-8">
        {notes.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  </>
)

export default Home
