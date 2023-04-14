const token = process.env.DISCOGS_TOKEN

const handleResponse = async (res) => {
  if (!res.ok) {
    const text = await res.text()

    return Promise.reject(text)
  } else {
    return await res.json()
  }
}

const toLowerCaseAndSort = (list) => list.map((t) => t.toLowerCase()).sort()
const unique = (x, idx, self) => self.indexOf(x) === idx

const getSearchResults = async (query, isMaster = true) => {
  const res = await fetch(
    `https://api.discogs.com/database/search?token=${token}&q=${query}${isMaster ? '&type=master' : ''
    }`
  )

  return handleResponse(res)
}

const getLabel = (list) => {
  const noLabelText = 'Not On Label'

  if (!list || !list.length) {
    return noLabelText
  }

  const first = list[0]?.name

  // Trim any parenthetical marks from label name, eg "Not On Label (Self-released)"
  if (first.match(noLabelText)) {
    return noLabelText
  }

  return first
}

const addSpaceAfterJoin = (artist) => {
  const join = artist.join

  if (join) {
    return join.replace(/(\/)/g, '$1 ')
  }

  return ''
}

const formatArtist = (artist) => {
  // Remove any parenthetical marks from artist name
  const name = artist.name.trim().replace(/\s\(\d+\)/g, '')
  const join = addSpaceAfterJoin(artist)

  return `${name}${join}`
}

const formatRelease = (release) => {
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
    tags: [...toLowerCaseAndSort(genres), ...toLowerCaseAndSort(styles)].filter(unique),
    url: release.uri,
  }
}

const getMasterRelease = async (id) => {
  const res = await fetch(
    `https://api.discogs.com/masters/${id}?token=${token}`
  )

  return handleResponse(res)
}

const getMainRelease = async (id) => {
  const res = await fetch(
    `https://api.discogs.com/releases/${id}?token=${token}`
  )

  return handleResponse(res)
}

const handler = async (request, response) => {
  if (request.query.q) {
    const searchResults = await getSearchResults(request.query.q)

    if (searchResults.results.length > 0) {
      const firstResult = searchResults.results[0]
      const masterRelease = await getMasterRelease(firstResult.master_id)
      const { labels } = await getMainRelease(masterRelease.main_release)

      return response
        .status(200)
        .json(formatRelease({ ...masterRelease, labels }))
    }

    const allSearchResults = await getSearchResults(request.query.q, false)

    if (allSearchResults.results.length > 0) {
      const release = await getMainRelease(allSearchResults.results[0].id)

      return response.status(200).json(formatRelease(release))
    } else {
      return response.status(200).json({ message: 'No results!' })
    }
  }

  return response.status(400).json({ error: 'No query.' })
}

export default handler
