import { Note } from '@/utils/notes.ts'
import { SectionHeading } from '@/components/typography.tsx'

const NoteCard = ({ note }: { note: Note }) => (
  <div>
    <a href={`/${note.path}`}>
      <SectionHeading>{note.title}</SectionHeading>
      {note.type === 'note' && (
        <>
          <div>
            <time>
              {new Date(note.publishedAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          {/* FIXME: the styles looks weird, needs a different element */}
          {/* {note.snippet && <div>{note.snippet}</div>} */}
        </>
      )}
      {note.type === 'place' && note.snippet && <div>{note.snippet}</div>}
    </a>
  </div>
)

export default NoteCard
