import { Note } from '@/utils/notes.ts'
import { SectionHeading } from '@/components/typography.tsx'

const NoteCard = ({ note }: { note: Note }) => (
  <section>
    <SectionHeading>
      <a href={`/${note.path}`}>{note.title}</a>
    </SectionHeading>
    {note.type === 'note' && (
      <>
        <section>
          <time>
            {new Date(note.publishedAt).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </section>
      </>
    )}

    {note.type === 'place' && note.snippet && (
      <section>
        <span class="snippet">{note.snippet}</span>
      </section>
    )}
  </section>
)

export default NoteCard
