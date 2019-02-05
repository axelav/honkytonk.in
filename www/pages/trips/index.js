import React from 'react'
import { Title } from 'mdx-provider-components'
import Layout from '../../components/Layout'
import DateLink from '../../components/DateLink'

const Trips = () => {
  return (
    <Layout>
      <Title>Trips</Title>
      <DateLink
        href="/trips/trans-america-trail"
        text="Trans America Trail"
        date="Summer 2018"
      />
      {
        // <DateLink href="/trips/maine" text="Maine" />
      }
      <DateLink href="/trips/alaska" text="Alaska" date="Summer 2016" />
      <DateLink href="/trips/wyoming" text="Wyoming" date="Summer 2013" />
      {
        // <DateLink href="/trips/grand-canyon" text="Grand Canyon" />
        // <DateLink href="/trips/shenandoah" text="Shenandoah" />
      }
      <DateLink
        href="/trips/northeastern-fall"
        text="Hudson Valley, Cape Cod, Pine Barrens"
        date="Fall 2012"
      />
      <DateLink
        href="/trips/point-reyes"
        text="Point Reyes"
        date="Summer 2012"
      />
      <DateLink
        href="/trips/penobscot-bay"
        text="Penobscot Bay"
        date="Memorial Day 2011"
      />
      <DateLink
        href="/trips/goes-west"
        text="Goes West"
        date="Spring &ndash; Fall 2010"
      />
    </Layout>
  )
}

export default Trips
