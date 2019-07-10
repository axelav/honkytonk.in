import React, { useState } from 'react'
import { Title } from 'mdx-provider-components'
import Layout from '../components/Layout'
import IndexLink from '../components/IndexLink'
import Video from '../components/Video'

const honkyTonkVideoIds = [
  'kN17OTQIGqg',
  'Q6gUnFZsDjc',
  'KHEQi25GSNo',
  'BrkLxJqb2xM',
  'q57iYqeY3j0',
  '918TER9fDRQ',
  'Y0r651OMVUw'
]

const getRandomVideoId = () =>
  honkyTonkVideoIds[Math.floor(Math.random() * honkyTonkVideoIds.length)]

const Index = () => {
  const [videoId, setVideoId] = useState(getRandomVideoId())

  return (
    <Layout>
      <Title>Lately</Title>
      <IndexLink
        href="/notes/wanderings"
        textLeft="Wanderings 2018"
        textRight="2019-01-01"
      />
      <IndexLink
        href="/notes/guitar-topographies"
        textLeft="Guitar Topographies"
        textRight="2018-12-04"
      />
      <IndexLink
        href="/notes/2018-pine-barrens-500"
        textLeft="2018 Pine Barrens 500"
        textRight="2018-11-02"
      />
      <IndexLink
        href="/notes/trans-america-trail"
        textLeft="Trans America Trail"
        textRight="2018-10-23"
      />
      <hr />
      <Video
        className="center"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
      <span
        className="db link blue hover-dark-blue tc pointer"
        onClick={() => setVideoId(getRandomVideoId())}
      >
        Find another dance partner
      </span>
    </Layout>
  )
}

export default Index
