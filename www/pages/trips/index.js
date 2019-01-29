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
        date="2018-10-23"
      />
      {
        // <DateLink href="/trips/maine" text="Maine" date="2016-08-30" />
      }
      <DateLink href="/trips/alaska" text="Alaska" date="2016-07-30" />
      {
        // <DateLink
        //   href="/trips/grand-canyon"
        //   text="Grand Canyon"
        //   date="2014-02-15"
        // />
        // <DateLink href="/trips/shenandoah" text="Shenandoah" date="2014-10-10" />
      }
    </Layout>
  )
}

export default Trips
