import React from 'react'
import { Title } from '../../components/provider'
import Layout from '../../components/Layout'
import IndexLink from '../../components/IndexLink'

const Notes = () => {
  return (
    <Layout>
      <Title>Notes</Title>
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
      <IndexLink
        href="/notes/booze-cont"
        textLeft="Booze (Cont.)"
        textRight="2018-03-19"
      />
      <IndexLink
        href="/notes/skip-tracer"
        textLeft="Skip Tracer"
        textRight="2016-01-05"
      />
      <IndexLink
        href="/notes/whiskey-sundown"
        textLeft="Whiskey Sundown"
        textRight="2015-10-08"
      />
      <IndexLink
        href="/notes/humans-rocks-cars"
        textLeft="Humans, Rocks, Cars (Winter 2013)"
        textRight="2013-03-04"
      />
      <IndexLink
        href="/notes/disintegration-loops"
        textLeft="The Disintegration Loops"
        textRight="2012-11-20"
      />
      <IndexLink
        href="/notes/hurricane-sandy"
        textLeft="Hurricane Sandy, the Rockaways, and Occupy Sandy"
        textRight="2012-11-07"
      />
      <IndexLink href="/notes/a-day" textLeft="A Day" textRight="2012-10-31" />
      <IndexLink
        href="/notes/transit-of-venus"
        textLeft="The Transit of Venus"
        textRight="2012-06-06"
      />
      <IndexLink
        href="/notes/if-a-tree-falls"
        textLeft="If a Tree Falls and the Secret Lives of Plants"
        textRight="2012-05-06"
      />
      <IndexLink
        href="/notes/collateral-damage"
        textLeft="Collateral Damage"
        textRight="2012-02-26"
      />
      <IndexLink
        href="/notes/acid-eiffel"
        textLeft="Acid Eiffel"
        textRight="2012-01-15"
      />
      <IndexLink
        href="/notes/hello-world"
        textLeft="Hello World"
        textRight="2011-12-14"
      />
    </Layout>
  )
}

export default Notes
