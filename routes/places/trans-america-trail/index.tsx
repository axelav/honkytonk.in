import { Head } from '$fresh/runtime.ts'
import { getNotes } from '@/utils/notes.ts'
import { PageHeading } from '@/components/typography.tsx'
import NoteCard from '@/components/NoteCard.tsx'
import { defineRoute } from '$fresh/server.ts'

export default defineRoute(async () => {
  const notes = await getNotes('places/trans-america-trail')

  return (
    <>
      <Head>
        <title>Trans America Trail ://honkytonk.in/</title>
      </Head>
      <div>
        <PageHeading>Trans America Trail</PageHeading>
        <div>
          {notes
            .reverse()
            // Remove the index page from the list
            .filter((note) => note.path !== 'places/trans-america-trail/index')
            .map((note) => (
              <NoteCard note={note} />
            ))}
        </div>
      </div>
    </>
  )
})
