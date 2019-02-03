import React from 'react'
import { Title } from 'mdx-provider-components'
import Layout from '../../components/Layout'
import DateLink from '../../components/DateLink'

const Trips = () => {
  return (
    <Layout>
      <Title>Trips</Title>
      <DateLink href="/trips/trans-america-trail" text="Trans America Trail" />
      {
        // <DateLink href="/trips/maine" text="Maine" />
      }
      <DateLink href="/trips/alaska" text="Alaska" />
      <DateLink href="/trips/goes-west" text="Goes West" />
      {
        // <DateLink href="/trips/grand-canyon" text="Grand Canyon" />
        // <DateLink href="/trips/shenandoah" text="Shenandoah" />
      }
    </Layout>
  )
}

export default Trips
