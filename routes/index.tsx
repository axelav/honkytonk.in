import { defineRoute } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { getNotes } from '@/utils/notes.ts'
import NoteCard from '@/components/NoteCard.tsx'
import { PageHeading } from '@/components/typography.tsx'

export default defineRoute(async () => {
  const [notes, places] = await Promise.all([
    getNotes('notes'),
    getNotes('places'),
  ])

  const allNotes = [...notes, ...places].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  const recents = allNotes.slice(0, 8)

  return (
    <>
      <Head>
        <title>Home ://honkytonk.in/</title>
      </Head>
      <div>
        <PageHeading>Lately</PageHeading>

        <div class="mt-8">
          {recents.map((note) => (
            <NoteCard note={note} />
          ))}
        </div>
      </div>
    </>
  )
})
