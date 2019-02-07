import React, { useState } from 'react'
import { Title } from 'mdx-provider-components'
import Layout from '../components/Layout'
import DateLink from '../components/DateLink'
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
      {
        // <DateLink href="/notes/lately-2019-01" text="Lately" date="2019-02-06" />
      }
      <DateLink
        href="/notes/wanderings"
        text="Wanderings 2018"
        date="2019-01-01"
      />
      <DateLink
        href="/notes/guitar-topographies"
        text="Guitar Topographies"
        date="2018-12-04"
      />
      <DateLink
        href="/notes/2018-pine-barrens-500"
        text="2018 Pine Barrens 500"
        date="2018-11-02"
      />
      <DateLink
        href="/notes/trans-america-trail"
        text="Trans America Trail"
        date="2018-10-23"
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
