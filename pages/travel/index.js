import React from 'react'
import { Title } from 'mdx-provider-components'
import Layout from '../../components/Layout'
import DateLink from '../../components/DateLink'

const Trips = () => {
  return (
    <Layout>
      <Title>Travel</Title>
      <DateLink
        href="/travel/trans-america-trail"
        text="Trans America Trail"
        date="Summer 2018"
      />
      <DateLink href="/travel/alaska" text="Alaska" date="Summer 2016" />
      <DateLink href="/travel/wyoming" text="Wyoming" date="Summer 2013" />
      <DateLink
        href="/travel/northeastern-fall"
        text="Hudson Valley, Cape Cod, Pine Barrens"
        date="Fall 2012"
      />
      <DateLink
        href="/travel/point-reyes"
        text="Point Reyes"
        date="Summer 2012"
      />
      <DateLink
        href="/travel/penobscot-bay"
        text="Penobscot Bay"
        date="Memorial Day 2011"
      />
      <DateLink
        href="/travel/goes-west"
        text="Goes West"
        date="Spring &ndash; Fall 2010"
      />
    </Layout>
  )
}

export default Trips
