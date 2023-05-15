const DISCOGS_API_TOKEN = Deno.env.get('DISCOGS_API_TOKEN')

const fetchJSON = async (url: string) => {
  const response = await fetch(url)

  if (response.ok) {
    return response.json()
  }

  const text = await response.text()

  throw new Error(text)
}

interface Artist {
  name: string
  join: string
}

interface RecordLabel {
  name: string
}

interface DiscogsRelease {
  artists: Artist[]
  title: string
  year: number
  genres: string[]
  styles: string[]
  labels: RecordLabel[]
  master_id?: string
  main_release?: string
  uri: string
  id: string
}

const toLowerCaseAndSort = (list: string[]) =>
  list.map((t) => t.toLowerCase()).sort()

const unique = (x: string, idx: number, self: string[]) =>
  self.indexOf(x) === idx

const getLabel = (list: RecordLabel[]) => {
  const noLabelText = 'Not On Label'

  if (!list || !list.length) {
    return noLabelText
  }

  const first = list[0]?.name

  // Use generic not on label text; strip parentheticals eg. "Not On Label (Self-released)"
  if (first.match(noLabelText)) {
    return noLabelText
  }

  // Trim any parenthetical marks from label name
  return first.trim().replace(/\s\(\d+\)/g, '')
}

const addSpaceAfterJoin = (artist: Artist) => {
  const join = artist.join

  if (join) {
    return join.replace(/(\/)/g, '$1 ')
  }

  return ''
}

const formatArtist = (artist: Artist) => {
  // Remove any parenthetical marks from artist name
  const name = artist.name.trim().replace(/\s\(\d+\)/g, '')
  const join = addSpaceAfterJoin(artist)

  // This isn't perfect. Some joins needs spaces before and after, some after, etc...
  return `${name}${join}`
}

const formatRelease = (release: DiscogsRelease) => {
  const {
    artists = [],
    title,
    year,
    genres = [],
    styles = [],
    labels = [],
  } = release

  return {
    artist: artists.reduce((acc, x) => `${acc}${formatArtist(x)}`, ''),
    title,
    year,
    label: getLabel(labels),
    tags: [...toLowerCaseAndSort(genres), ...toLowerCaseAndSort(styles)].filter(
      unique
    ),
    url: release.uri,
  }
}

const getSearchResults = async (
  query: string,
  isMaster = true
): Promise<{ results: DiscogsRelease[] }> =>
  await fetchJSON(
    `https://api.discogs.com/database/search?token=${DISCOGS_API_TOKEN}&q=${query}${
      isMaster ? '&type=master' : ''
    }`
  )

const getMasterRelease = async (id: string): Promise<DiscogsRelease> =>
  await fetchJSON(
    `https://api.discogs.com/masters/${id}?token=${DISCOGS_API_TOKEN}`
  )

const getMainRelease = async (id?: string): Promise<DiscogsRelease> =>
  id
    ? await fetchJSON(
        `https://api.discogs.com/releases/${id}?token=${DISCOGS_API_TOKEN}`
      )
    : {}

export const handler = async (req: Request) => {
  const { url } = req
  const { searchParams } = new URL(url)
  const q = searchParams.get('q')

  if (q) {
    const now = new Date().toISOString()
    const subject = `val town: @axelav.discogs -> ${q}`
    const message = `${now}: ${q}\n\n`

    const searchResults = await getSearchResults(q)

    interface FormattedRelease {
      artist: string
      title: string
      year: number
      label: string
      tags: string[]
      url: string
    }

    let formattedRelease: FormattedRelease | undefined

    if (searchResults.results.length > 0) {
      const firstResult = searchResults.results[0]

      if (firstResult.master_id) {
        const masterRelease = await getMasterRelease(firstResult.master_id)
        const { labels } = await getMainRelease(masterRelease.main_release)

        formattedRelease = formatRelease({ ...masterRelease, labels })
      }
    }

    if (!formattedRelease) {
      const allSearchResults = await getSearchResults(q, false)

      if (allSearchResults.results.length > 0) {
        const release = await getMainRelease(allSearchResults.results[0].id)

        formattedRelease = formatRelease(release)
      }
    }

    console.log(
      `${message}${JSON.stringify(formattedRelease, null, 4) || 'No results.'}`,
      subject
    )

    return new Response(JSON.stringify(formattedRelease || 'No results.'), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }

  return new Response(
    "No query provided. Try adding '?q=your+query' to the end of the URL."
  )
}
