import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Video = ({ src, className }) => {
  const prefix = cx('mw-100', className)

  return (
    <div className="Video">
      <iframe
        title="~ Enjoy the tunes ~"
        className={prefix}
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Video.defaultProps = {
  className: '',
}

export default Video
