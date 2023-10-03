import { useSignal } from '@preact/signals'
import { useEffect, useRef } from 'preact/hooks'
import { merge, mesh } from 'npm:topojson-client@^3.1.0'
import * as d3 from 'npm:d3@^7.8.5'

const hotPink = '#FF41B4'
const blue = '#357EDD'
const lightestBlue = '#CDECFF'

const WIDTH = 960
const HEIGHT = 600

const WanderingsMap = () => {
  const data: { value: { 0: number; 1: number; date: Date }[] } = useSignal([])
  const usShapeData: {
    value: { objects: { lower48: { geometries: any[] } } } | null
  } = useSignal(null)

  const anchor = useRef<SVGSVGElement>(null)

  const fetchAtlasData = async () => {
    const us = await d3.json('https://unpkg.com/us-atlas@1/us/10m.json')

    us.objects.lower48 = {
      type: 'GeometryCollection',
      geometries: us.objects.states.geometries.filter(
        (d: { id: string }) => d.id !== '02' && d.id !== '15'
      ),
    }

    usShapeData.value = us
  }

  const fetchLocationData = async () => {
    const parseDate = d3.timeParse('%m/%d/%Y')
    const result = await d3.json('/api/wanderings')

    const projection = d3.geoAlbersUsa().scale(1280).translate([480, 300])

    data.value = result.features
      .map((x) => {
        const d = new Date(x.properties.ts)

        return {
          0: x.geometry.coordinates[0],
          1: x.geometry.coordinates[1],
          2: d.toLocaleDateString(),
        }
      })
      .map((x) => {
        const p = projection(x)
        p.date = parseDate(x[2])
        return p
      })
      .sort((a, b) => a.date - b.date)
  }

  useEffect(() => {
    fetchAtlasData()
    fetchLocationData()
  }, [])

  useEffect(() => {
    const svg = d3
      .select(anchor.current)
      .style('width', '100%')
      .style('height', 'auto')

    const path = d3.geoPath()

    if (usShapeData.value) {
      svg
        .append('path')
        .datum(
          merge(usShapeData.value, usShapeData.value.objects.lower48.geometries)
        )
        .attr('fill', blue)
        .attr('d', path)

      svg
        .append('path')
        .datum(
          mesh(
            usShapeData.value,
            usShapeData.value.objects.lower48,
            (a, b) => a !== b
          )
        )
        .attr('fill', 'none')
        .attr('stroke', lightestBlue)
        .attr('stroke-linejoin', 'round')
        .attr('d', path)
    }

    if (data.value.length) {
      const delay = d3
        .scaleTime()
        .domain([data.value[0].date, data.value[data.value.length - 1].date])
        .range([0, 10000])

      const g = svg.append('g').attr('fill', hotPink)

      for (const d of data.value) {
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
    }
  }, [usShapeData, data])

  // TODO: fix styles
  return (
    <div class="WanderingsMap mb-4">
      {usShapeData.value && data.value.length ? (
        <svg
          ref={anchor}
          viewBox={`0,0,${WIDTH},${HEIGHT}`}
          width={WIDTH}
          height={HEIGHT}
        />
      ) : (
        <div class="text-center mt-8">Fetching data...</div>
      )}
    </div>
  )
}

export default WanderingsMap
