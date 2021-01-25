import React, { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { merge, mesh } from 'topojson-client'

const hotPink = '#FF41B4'
const blue = '#357EDD'
const lightestBlue = '#CDECFF'

const WIDTH = 960
const HEIGHT = 600

const WanderingsMapStateless = props => {
  const [data, setData] = useState([])
  const [us, setUs] = useState(null)

  const svgEl = useRef(null)

  useEffect(() => {
    async function fetchAtlasData() {
      const result = await d3.json('https://unpkg.com/us-atlas@1/us/10m.json')

      result.objects.lower48 = {
        type: 'GeometryCollection',
        geometries: result.objects.states.geometries.filter(
          d => d.id !== '02' && d.id !== '15'
        )
      }

      setUs(result)
    }

    if (us) {
      const svg = d3
        .select(svgEl.current)
        .style('width', '100%')
        .style('height', 'auto')

      const path = d3.geoPath()

      svg
        .append('path')
        .datum(merge(us, us.objects.lower48.geometries))
        .attr('fill', blue)
        .attr('d', path)

      svg
        .append('path')
        .datum(mesh(us, us.objects.lower48, (a, b) => a !== b))
        .attr('fill', 'none')
        .attr('stroke', lightestBlue)
        .attr('stroke-linejoin', 'round')
        .attr('d', path)
    } else {
      fetchAtlasData()
    }
  }, [us])

  useEffect(() => {
    const fetchLocationData = async () => {
      const parseDate = d3.timeParse('%m/%d/%Y')
      const result = await d3.json('/api/wanderings')

      const projection = d3
        .geoAlbersUsa()
        .scale(1280)
        .translate([480, 300])

      const data = result.features
        .map(x => {
          const d = new Date(x.properties.ts)

          return {
            0: x.geometry.coordinates[0],
            1: x.geometry.coordinates[1],
            2: d.toLocaleDateString()
          }
        })
        .map(x => {
          const p = projection(x)
          p.date = parseDate(x[2])
          return p
        })
        .sort((a, b) => a.date - b.date)

      setData(data)
    }

    if (data.length) {
      const delay = d3
        .scaleTime()
        .domain([data[0].date, data[data.length - 1].date])
        .range([0, 10000])

      // TODO duped d3 selection
      // this breaks stuff!!!
      const svg = d3
        .select(svgEl.current)
        .style('width', '100%')
        .style('height', 'auto')

      const g = svg.append('g').attr('fill', hotPink)

      for (const d of data) {
        d3.timeout(() => {
          g.append('circle')
            .attr('transform', `translate(${d})`)
            .attr('r', 6)
            .attr('fill-opacity', 1)
            .transition()
            .attr('fill-opacity', 0.3)
            .attr('r', 3)
        }, delay(d.date))
      }
    } else {
      fetchLocationData()
    }
  }, [data])

  return (
    <div className="WanderingsMap mb4">
      {us && data.length ? (
        <svg
          ref={svgEl}
          viewBox={`0,0,${WIDTH},${HEIGHT}`}
          width={WIDTH}
          height={HEIGHT}
        />
      ) : (
        <p className="tc mv5">Fetching data...</p>
      )}
    </div>
  )
}

export default WanderingsMapStateless
