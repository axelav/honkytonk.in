import React, { Component } from 'react'
import { Title } from 'mdx-provider-components'
import Layout from '../components/Layout'
import DateLink from '../components/DateLink'
import Video from '../components/Video'

const honkyTonkVideoIds = [
  'kN17OTQIGqg',
  'Q6gUnFZsDjc',
  'KHEQi25GSNo',
  'BrkLxJqb2xM',
  'q57iYqeY3j0',
  '918TER9fDRQ',
  'Y0r651OMVUw'
]

class Index extends Component {
  state = {
    videoId:
      honkyTonkVideoIds[Math.floor(Math.random() * honkyTonkVideoIds.length)]
  }

  handleClick = () =>
    this.setState({
      videoId:
        honkyTonkVideoIds[Math.floor(Math.random() * honkyTonkVideoIds.length)]
    })

  render() {
    return (
      <Layout>
        <Title>Lately</Title>
        <DateLink
          href="/notes/wanderings"
          text="Wanderings 2018"
          date="2019-01-01"
        />
        <DateLink
          href="/notes/guitar-topographies"
          text="Guitar Topographies"
          date="2018-12-04"
        />
        <DateLink
          href="/notes/2018-pine-barrens-500"
          text="2018 Pine Barrens 500"
          date="2018-11-02"
        />
        <DateLink
          href="/notes/trans-america-trail"
          text="Trans America Trail"
          date="2018-10-23"
        />
        <DateLink
          href="/notes/last-things-last"
          text="Last Things Last"
          date="2017-12-14"
        />
        <hr />
        <Video
          className="center"
          src={`https://www.youtube.com/embed/${this.state.videoId}`}
        />
        <span
          className="db link blue hover-dark-blue tc pointer"
          onClick={this.handleClick}
        >
          Find another dance partner
        </span>
      </Layout>
    )
  }
}

export default Index
