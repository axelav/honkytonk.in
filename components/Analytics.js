import { useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import Event from './Event'
import { usePrevious, useEventListener } from '../hooks'
import { getDevice, isIos } from '../utils/device'
import { getPageLoad, getLatency } from '../utils/performance'
import { isSubstring } from '../utils/helpers'

const Analytics = ({ logEvent, events }) => {
  const router = useRouter()
  const prevRouter = usePrevious(router)

  let skip = useRef()
  const callback = useCallback(
    (evt) => {
      const { userAgent, language } = navigator

      if (skip.current) return
      skip.current = true

      const now = new Date()
      const sessionId = `${now.getTime()}${uuidv4().slice(0, 6)}`

      events.push({
        event: evt.type,
        type: 'END_SESSION',
        timestamp: new Date().getTime(),
      })

      const session = {
        createdAt: now.toISOString(),
        sessionId,
        startedAt: events[0].timestamp,
        ref: document.referrer,
        device: getDevice(userAgent),
        userAgent,
        language,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        length: events.length,
        pages: events.filter((x) => x.type === 'PAGE').length,
        latency: getLatency(),
        pageLoad: getPageLoad(),
        events: events.map(({ event, type, timestamp }, i) => ({
          sessionId,
          timestamp,
          event,
          type,
          length: events[i].timestamp - timestamp,
        })),
      }

      const url = '/api/session'
      const { vendor } = global.navigator

      // https://bugs.webkit.org/show_bug.cgi?id=188329
      // Safari bug is fixed but not yet released. When that happens, will need to check safari version also
      if (global.navigator.sendBeacon && !isSubstring(vendor, 'Apple')) {
        // try to send the beacon
        const beacon = global.navigator.sendBeacon(url, JSON.stringify(session))
        if (beacon) return
        // if it failed to queue, (some adblockers will block all beacons), then try the other way
      }

      // Instead, send an async request
      // Except for iOS :(
      const async = !isIos(navigator.userAgent)
      const request = new XMLHttpRequest()
      request.open('POST', url, async) // 'false' makes the request synchronous
      request.setRequestHeader('Content-Type', 'application/json')
      request.send(JSON.stringify(session))

      // Synchronous request cause a slight delay in UX as the browser waits for the response
      // I've found it more performant to do an async call and use the following hack to keep the loop open while waiting

      // Chrome doesn't care about waiting
      if (!async || isSubstring(vendor, 'Google')) return

      // Latency calculated from navigator.performance
      const latency = session.latency || 0
      const t = Date.now() + Math.max(300, latency + 200)
      while (Date.now() < t) {
        // postpone the JS loop for 300ms so that the request can complete
        // a hack necessary for Firefox and Safari refresh / back button
      }
    },
    [events]
  )

  useEventListener('pagehide', callback)
  useEventListener('beforeunload', callback)
  useEventListener('unload', callback)
  // if (isIos(userAgent)) useEventListener('blur', callback)

  useEffect(() => {
    if (prevRouter?.pathname !== router.pathname) {
      logEvent(router.pathname, { type: 'PAGE' })
    }
  }, [router.pathname, prevRouter, logEvent])

  return null
}

Analytics.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  logEvent: PropTypes.func.isRequired,
}

export default Event(Analytics)
