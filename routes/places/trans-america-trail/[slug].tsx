import { Head } from '$fresh/runtime.ts'
import { getNote } from '@/utils/notes.ts'
import { PageHeading, SectionHeading } from '@/components/typography.tsx'
import { defineRoute } from '$fresh/server.ts'
import { parse } from 'marked'

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

export default defineRoute(async (_req, ctx) => {
  try {
    const note = await getNote(ctx.params.slug, 'places/trans-america-trail')
    const links = getPrevAndNextLinks(ctx.params.slug)

    return (
      <>
        <Head>
          <title>TAT: {note.title} ://honkytonk.in/</title>
        </Head>

        <div>
          <PageHeading>
            <a href="/places/trans-america-trail">Trans America Trail</a>
          </PageHeading>
          <div>
            <SectionHeading>{note.title}</SectionHeading>
            {note.snippet && (
              <section>
                <span class="snippet">{note.snippet}</span>
              </section>
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: parse(note.content) as string,
            }}
          />
          {links && (
            <section
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              {links.prev ? (
                <a href={links.prev.href}>← {links.prev.title}</a>
              ) : (
                <div />
              )}
              {links.next && <a href={links.next.href}>{links.next.title} →</a>}
            </section>
          )}
        </div>
      </>
    )
  } catch (err) {
    console.error(err)

    return ctx.renderNotFound()
  }
})
