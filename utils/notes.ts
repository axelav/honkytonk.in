import { extract } from 'https://deno.land/std@0.183.0/front_matter/any.ts'
import { join } from 'https://deno.land/std@0.183.0/path/mod.ts'

export interface Note {
  type: 'note' | 'place'
  path: string
  title: string
  publishedAt: Date
  content: string
  snippet?: string
}

export const getNote = async (
  slug: string,
  collection: string
): Promise<Note> => {
  const collectionPath = `./md/${collection}`
  const text = await Deno.readTextFile(join(collectionPath, `${slug}.md`))

  const { attrs, body } = extract(text) as {
    attrs: { title: string; published_at: string; snippet: string }
    body: string
  }

  return {
    type: collectionPath.includes('places') ? 'place' : 'note',
    path: join(collection, slug),
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
  }
}

export const getNotes = async (collection: string): Promise<Note[]> => {
  const collectionPath = `./md/${collection}`

  const files = Deno.readDir(collectionPath)
  const promises = []

  for await (const file of files) {
    if (file.isDirectory) {
      const text = await Deno.readTextFile(
        join(collectionPath, file.name, `index.md`)
      )

      const { attrs, body } = extract(text) as {
        attrs: { title: string; published_at: string; snippet: string }
        body: string
      }

      promises.push({
        type: collectionPath.includes('places') ? 'place' : 'note',
        path: join(collection, file.name),
        title: attrs.title,
        publishedAt: new Date(attrs.published_at),
        content: body,
        snippet: attrs.snippet,
      })
    }

    if (file.isFile) {
      const slug = file.name.replace('.md', '')
      promises.push(getNote(slug, collection))
    }
  }

  const notes = (await Promise.all(promises)) as Note[]

  notes.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return notes
}
