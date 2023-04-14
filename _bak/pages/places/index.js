import React from 'react'
import { Title } from '../../components/provider'
import Layout from '../../components/Layout'
import IndexLink from '../../components/IndexLink'

const Places = () => {
  return (
    <Layout>
      <Title>Places</Title>
      {/* TODO */}
      {/* <IndexLink */}
      {/*   href="/places/kentucky-adventure-trail" */}
      {/*   textLeft="Kentucky Adventure Trail" */}
      {/*   textRight="October 2019" */}
      {/* /> */}
      <IndexLink
        href="/places/trans-america-trail"
        textLeft="Trans America Trail"
        textRight="Summer 2018"
      />
      <IndexLink
        href="/places/alaska"
        textLeft="Alaska"
        textRight="Summer 2016"
      />
      {/* TODO */}
      {/* <IndexLink */}
      {/*   href="/places/grand-canyon" */}
      {/*   textLeft="Grand Canyon" */}
      {/*   textRight="January 2015" */}
      {/* /> */}
      {/* TODO */}
      {/* <IndexLink */}
      {/*   href="/places/shenandoah" */}
      {/*   textLeft="Shenandoah" */}
      {/*   textRight="?? August 2014 ??" */}
      {/* /> */}
      <IndexLink
        href="/places/wyoming"
        textLeft="Wyoming"
        textRight="Summer 2013"
      />
      <IndexLink
        href="/places/northeastern-fall"
        textLeft="Hudson Valley, Cape Cod, Pine Barrens"
        textRight="Fall 2012"
      />
      <IndexLink
        href="/places/point-reyes"
        textLeft="Point Reyes"
        textRight="Summer 2012"
      />
      <IndexLink
        href="/places/penobscot-bay"
        textLeft="Penobscot Bay"
        textRight="Memorial Day 2011"
      />
      <IndexLink
        href="/places/goes-west"
        textLeft="Goes West"
        textRight="Spring &ndash; Fall 2010"
      />
    </Layout>
  )
}

export default Places
