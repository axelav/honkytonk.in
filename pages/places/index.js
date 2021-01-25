import React from 'react'
import { Title } from '../../components/provider'
import Layout from '../../components/Layout'
import IndexLink from '../../components/IndexLink'

const Trips = () => {
  return (
    <Layout>
      <Title>Travel</Title>
      <IndexLink
        href="/travel/trans-america-trail"
        textLeft="Trans America Trail"
        textRight="Summer 2018"
      />
      <IndexLink
        href="/travel/alaska"
        textLeft="Alaska"
        textRight="Summer 2016"
      />
      <IndexLink
        href="/travel/wyoming"
        textLeft="Wyoming"
        textRight="Summer 2013"
      />
      <IndexLink
        href="/travel/northeastern-fall"
        textLeft="Hudson Valley, Cape Cod, Pine Barrens"
        textRight="Fall 2012"
      />
      <IndexLink
        href="/travel/point-reyes"
        textLeft="Point Reyes"
        textRight="Summer 2012"
      />
      <IndexLink
        href="/travel/penobscot-bay"
        textLeft="Penobscot Bay"
        textRight="Memorial Day 2011"
      />
      <IndexLink
        href="/travel/goes-west"
        textLeft="Goes West"
        textRight="Spring &ndash; Fall 2010"
      />
    </Layout>
  )
}

export default Trips
