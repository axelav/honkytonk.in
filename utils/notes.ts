import { extract } from 'https://deno.land/std@0.183.0/front_matter/any.ts'
import { join } from 'https://deno.land/std@0.183.0/path/mod.ts'

export interface Note {
  slug: string
  title: string
  publishedAt: Date
  content: string
  snippet: string
}

export const getNote = async (slug: string): Promise<Note | null> => {
  const text = await Deno.readTextFile(join('./md/notes', `${slug}.md`))

  const { attrs, body } = extract(text) as {
    attrs: { title: string; published_at: string; snippet: string }
    body: string
  }

  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
  }
}

export const getNotes = async (): Promise<Note[]> => {
  const files = Deno.readDir('./md/notes')
  const promises = []

  for await (const file of files) {
    const slug = file.name.replace('.md', '')
    promises.push(getNote(slug))
  }

  const notes = (await Promise.all(promises)) as Note[]

  notes.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return notes
}
