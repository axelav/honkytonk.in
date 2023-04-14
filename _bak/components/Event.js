import React from 'react'
import { EventsContext } from '../pages/_app'

const Event = (Component) => (props) => (
  <EventsContext.Consumer>
    {({ events, setEvents }) => {
      const logEvent = (name, properties = {}) => {
        const event = {
          event: name,
          timestamp: new Date().getTime(),
          ...properties,
        }

        setEvents([...events, event])

        // log to console in DEVELOPMENT
        if (process.env.NODE_ENV !== 'production') {
          const { type, ...rest } = properties
          console.log(type + ': ' + name, JSON.stringify(rest))
        }
      }

      return <Component {...props} events={events} logEvent={logEvent} />
    }}
  </EventsContext.Consumer>
)

export default Event
