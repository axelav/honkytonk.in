import Layout from '../../components/Layout'
import Image from '../../components/Image'
import NoteTitle from '../../components/NoteTitle'
import WanderingsMap from '../../components/WanderingsMap'

export default Layout

<NoteTitle title="Wanderings (2018)" date="2019-01-01" />

<WanderingsMap />

I've been developing my [D3](https://d3js.org) skills lately and created this animated map of where my phone and I traveled over the past year. The data was collected using the excellent [Wanderings](https://wanderin.gs) app, a "low effort" and privacy-focused location tracker. I'm sure I could make some improvements to the code, particularly in the way I'm mixing React and D3's DOM APIs, but it was fun to learn how to create a visualization like this.
