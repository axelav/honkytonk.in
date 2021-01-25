import React, { useState } from 'react'
import { Title } from '../components/provider'
import Layout from '../components/Layout'
import IndexLink from '../components/IndexLink'
import Video from '../components/Video'

const honkyTonkVideoIds = [
  // Hank's classic
  'kN17OTQIGqg',
  '6c3K-LIo_gQ',
  'KHEQi25GSNo',
  'BrkLxJqb2xM',
  '918TER9fDRQ',
  'Y0r651OMVUw',
  'FxKuAMmYkOo',
  'sODtr7C2u4M',
  'Orr0ZDUii9o',
  // others
  'o1R4ls73dxU',
  'prKDa0-uvBA',
]

const getRandomVideoId = () =>
  honkyTonkVideoIds[Math.floor(Math.random() * honkyTonkVideoIds.length)]

const Index = ({ initialVideoId }) => {
  const [videoId, setVideoId] = useState(initialVideoId)

  return (
    <Layout>
      <Title>Lately</Title>
      <IndexLink
        href="/notes/spring"
        textLeft="Spring"
        textRight="2020-03-11"
      />
      <IndexLink
        href="/notes/off-road-racing"
        textLeft="Off Road Moto Racing"
        textRight="2019-12-28"
      />
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

export async function getServerSideProps() {
  return {
    props: {
      initialVideoId: getRandomVideoId(),
    },
  }
}

export default Index
