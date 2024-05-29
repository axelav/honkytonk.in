import { Head } from '$fresh/runtime.ts'
import { getNotes } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import NoteCard from '@/components/NoteCard.tsx'
import { defineRoute } from '$fresh/server.ts'

export default defineRoute(async () => {
  const notes = await getNotes('notes')

  return (
    <>
      <Head>
        <title>Notes ://honkytonk.in/</title>
      </Head>
      <div>
        <PageHeading>Notes</PageHeading>
        <div>
          {notes.map((note) => (
            <NoteCard note={note} />
          ))}
        </div>
      </div>
    </>
  )
})
