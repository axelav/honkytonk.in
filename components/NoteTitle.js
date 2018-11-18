import React from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Title, Subtitle } from 'mdx-provider-components'

const NoteTitle = ({ title, subtitle, date }) => (
  <div className="flex-ns items-center-ns justify-between-ns">
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {date && (
      <div className="tabular-nums">
        <Subtitle>
          {DateTime.fromJSDate(new Date(date)).toLocaleString(
            DateTime.DATE_HUGE
          )}
        </Subtitle>
      </div>
    )}
  </div>
)

NoteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string
}

export default NoteTitle
