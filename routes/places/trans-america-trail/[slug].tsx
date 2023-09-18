import { Handlers, PageProps } from '$fresh/server.ts'
import { CSS, render } from 'gfm'
import { Head } from '$fresh/runtime.ts'
import { getNote, Note } from '@/utils/notes.ts'
import { PageHeading, SectionHeading } from '@/components/typography.tsx'
import { MarkdownStyle } from '@/components/Markdown.tsx'

interface TATNote extends Note {
  links: {
    prev?: { href: string; title: string }
    next?: { href: string; title: string }
  } | null
}

const getISODate = (date: Date) => date.toISOString().split('T')[0]

const getPrevAndNextLinks = (
  slug: string
): {
  prev?: { href: string; title: string }
  next?: { href: string; title: string }
} | null => {
  const slugDate = new Date(slug)
  const slugDateTime = slugDate.getTime()

  if (isNaN(slugDateTime)) {
    return null
  }

  const startDate = new Date('2018-08-18')
  const endDate = new Date('2018-09-16')

  const nextSlug = getISODate(
    new Date(new Date(slug).setDate(slugDate.getDate() + 1))
  )
  const prevSlug = getISODate(
    new Date(new Date(slug).setDate(slugDate.getDate() - 1))
  )

  if (slugDateTime === startDate.getTime()) {
    return {
      next: {
        href: `/places/trans-america-trail/${nextSlug}`,
        title: nextSlug,
      },
    }
  } else if (slugDateTime === endDate.getTime()) {
    return {
      prev: {
        href: `/places/trans-america-trail/${prevSlug}`,
        title: prevSlug,
      },
    }
  }

  return {
    prev: { href: `/places/trans-america-trail/${prevSlug}`, title: prevSlug },
    next: { href: `/places/trans-america-trail/${nextSlug}`, title: nextSlug },
  }
}

export const handler: Handlers<TATNote> = {
  async GET(_req, ctx) {
    let note

    try {
      note = await getNote(ctx.params.slug, 'places/trans-america-trail')
    } catch (err) {
      console.error(err)

      return ctx.renderNotFound()
    }

    if (note === null) {
      return ctx.renderNotFound()
    }

    return ctx.render({ ...note, links: getPrevAndNextLinks(ctx.params.slug) })
  },
}

const TransAmericaTrailPage = ({ data: note }: PageProps<TATNote>) => (
  <>
    <Head>
      <title>TAT: {note.title} ://honkytonk.in/</title>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <MarkdownStyle />
    </Head>

    <div>
      <a href="/places/trans-america-trail">
        <PageHeading>Trans America Trail</PageHeading>
      </a>
      <div class="mt-8">
        <SectionHeading>{note.title}</SectionHeading>
        {note.snippet && <div class="mt-2 text-gray-500">{note.snippet}</div>}
      </div>
      <div
        class="mt-8 markdown-body"
        dangerouslySetInnerHTML={{
          __html: render(note.content, { allowIframes: true }),
        }}
      />
      {note.links && (
        <div class="mt-8 flex justify-between">
          {note.links.prev ? (
            <a href={note.links.prev.href}>← {note.links.prev.title}</a>
          ) : (
            <div />
          )}
          {note.links.next && (
            <a href={note.links.next.href}>{note.links.next.title} →</a>
          )}
        </div>
      )}
    </div>
  </>
)

export default TransAmericaTrailPage
