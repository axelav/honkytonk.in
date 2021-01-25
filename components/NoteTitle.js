import React from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Title, Subtitle } from './provider'

const NoteTitle = ({ title, subtitle, date }) => (
  <div className="NoteTitle flex-ns items-center-ns justify-between-ns">
    <Title>{title}</Title>
    <div className="tab-nums w5-ns tr-ns">
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {date && (
        <Subtitle>
          {DateTime.fromISO(date).toLocaleString(DateTime.DATE_HUGE)}
        </Subtitle>
      )}
    </div>
  </div>
)

NoteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string
}

export default NoteTitle
