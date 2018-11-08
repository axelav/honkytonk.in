import React from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Title } from 'mdx-provider-components'

const NoteTitle = ({ title, date }) => (
  <div className="flex-ns items-center-ns justify-between-ns">
    <Title>{title}</Title>
    <div className="mb4 lh-copy tabular-nums gray">
      {DateTime.fromJSDate(new Date(date)).toLocaleString(DateTime.DATE_HUGE)}
    </div>
  </div>
)

NoteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

// NoteTitle.defaultProps = {
//   date: new Date().toISOString()
// }

export default NoteTitle
