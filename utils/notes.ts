import { extract } from 'https://deno.land/std@0.183.0/front_matter/any.ts'
import { join } from 'https://deno.land/std@0.183.0/path/mod.ts'

export interface Note {
  type: 'note' | 'place'
  slug: string
  title: string
  publishedAt: Date
  content: string
  snippet?: string
}

export const getNote = async (
  slug: string,
  collection?: 'notes' | 'places'
): Promise<Note | null> => {
  const collectionPath = `./md/${collection ? collection : 'notes'}`
  const text = await Deno.readTextFile(join(collectionPath, `${slug}.md`))

  const { attrs, body } = extract(text) as {
    attrs: { title: string; published_at: string; snippet: string }
    body: string
  }

  return {
    type: collectionPath.includes('places') ? 'place' : 'note',
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
  }
}

export const getNotes = async (
  collection?: 'notes' | 'places'
): Promise<Note[]> => {
  const collectionPath = `./md/${collection ? collection : 'notes'}`

  const files = Deno.readDir(collectionPath)
  const promises = []

  for await (const file of files) {
    const slug = file.name.replace('.md', '')
    promises.push(getNote(slug, collection))
  }

  const notes = (await Promise.all(promises)) as Note[]

  notes.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return notes
}
