import React from 'react'
import { Title } from '../components/provider'
import Layout from '../components/Layout'
import IndexLink from '../components/IndexLink'

const Index = () => {
  return (
    <Layout>
      <Title>Lately</Title>
      <IndexLink
        href="/notes/lately-2022-06"
        textLeft="June 2022"
        textRight="2022-06-30"
      />
      <IndexLink
        href="/notes/enduro-toolkit"
        textLeft="Enduro Toolkit"
        textRight="2021-02-25"
      />
      <IndexLink
        href="/notes/lately-2020-12"
        textLeft="December 2020"
        textRight="2021-01-01"
      />
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
    </Layout>
  )
}

export default Index
