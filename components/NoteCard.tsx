import { Note } from '@/utils/notes.ts'
import { SectionHeading } from '@/components/typography.tsx'

const NoteCard = ({ note }: { note: Note }) => (
  <div class="mt-6">
    <a class="sm:col-span-2" href={`/${note.path}`}>
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

export default NoteCard
