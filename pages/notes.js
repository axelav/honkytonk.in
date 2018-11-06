import Link from 'next/link'
import Layout from '../components/Layout'
import IndexLink from '../components/IndexLink'

const Notes = () => {
  return (
    <Layout>
      <IndexLink
        href="/2018-pine-barrens-500"
        text="2018 Pine Barrens 500"
        date="2018-11-02"
      />
      <IndexLink
        href="/trans-america-trail"
        text="Trans America Trail"
        date="2012-10-23"
      />
      <IndexLink
        href="/last-things-last"
        text="Last Things Last"
        date="2017-12-14"
      />
      <IndexLink href="/2018" text="2018" date="2017-12-04" />
      <IndexLink href="/booze" text="Booze" date="2017-08-05" />
      <IndexLink href="/skip-tracer" text="Skip Tracer" date="2016-01-05" />
      <IndexLink
        href="/whiskey-sundown"
        text="Whiskey Sundown"
        date="2015-10-08"
      />
      <IndexLink
        href="/wyoming"
        text="Wyoming (Late Summer 2013)"
        date="2013-12-31"
      />
      <IndexLink
        href="/humans-rocks-cars"
        text="Humans, Rocks, Cars (Winter 2013)"
        date="2013-03-04"
      />
      <IndexLink
        href="/northeastern-fall"
        text="Hudson Valley, Cape Cod, Pine Barrens (Fall 2012)"
        date="2013-02-01"
      />
      <IndexLink
        href="/point-reyes"
        text="Point Reyes (Summer 2012)"
        date="2013-01-28"
      />
      <IndexLink
        href="/penobscot-bay"
        text="Penobscot Bay (Memorial Day 2011)"
        date="2013-01-22"
      />
      <IndexLink
        href="/disintegration-loops"
        text="Disintegration Loops"
        date="2012-11-20"
      />
      <IndexLink
        href="/hurricane-sandy"
        text="Hurricane Sandy, the Rockaways, and Occupy Sandy"
        date="2012-11-07"
      />
      <IndexLink href="/a-day" text="A Day" date="2012-10-31" />
      <IndexLink
        href="/transit-of-venus"
        text="The Transit of Venus"
        date="2012-06-06"
      />
      <IndexLink
        href="/if-a-tree-falls"
        text="If a Tree Falls and the Secret Lives of Plants"
        date="2012-05-06"
      />
      <IndexLink
        href="/collateral-damage"
        text="Collateral Damage"
        date="2012-02-26"
      />
      <IndexLink href="/acid-eiffel" text="Acid Eiffel" date="2012-01-15" />
      <IndexLink href="/hello-world" text="Hello World" date="2011-12-14" />
    </Layout>
  )
}

export default Notes
