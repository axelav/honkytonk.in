const token = process.env.DISCOGS_TOKEN

const handleResponse = async (res) => {
  if (!res.ok) {
    const text = await res.text()

    return Promise.reject(text)
  } else {
    return await res.json()
  }
}

const writeTag = (str) => {
  if (/ /.test(str)) {
    return `#[[${str.toLowerCase()}]]`
  } else {
    return `#${str.toLowerCase()}`
  }
}

const unique = (x, idx, self) => self.indexOf(x) === idx

const getSearchResults = async (query, isMaster = true) => {
  const res = await fetch(
    `https://api.discogs.com/database/search?token=${token}&q=${query}${
      isMaster ? '&type=master' : ''
    }`
  )

  return handleResponse(res)
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
    artist: artists.reduce(
      (prev, x) => `${prev}${x.name}${!!x.join ? ` ${x.join} ` : ''}`,
      ''
    ),
    title,
    year,
    label: labels[0]?.name || 'Not On Label',
    tags: [...genres, ...styles].filter(unique).map(writeTag).join(' '),
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
