import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import Event from './Event'

const BigLazyImage = ({ src, alt = '', logEvent }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = useCallback(() => {
    setIsExpanded(!isExpanded)
    !isExpanded && logEvent(alt, { type: 'EXPAND IMAGE', src })
  }, [isExpanded, alt, logEvent, src])

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) =>
      keyCode === 27 && isExpanded && handleClick()

    document.addEventListener('keydown', handleKeyDown)

    return document.removeEventListener('keydown', handleKeyDown)
  }, [handleClick, isExpanded])

  return (
    <div className="BigLazyImage w-100 mt4 mb4" onClick={handleClick}>
      <figure className="inline ma0">
        <LazyLoad height={500} offset={100} once>
          <img className="db mw-100 center" src={src} alt={alt} />
        </LazyLoad>
      </figure>
      {isExpanded && (
        <figure className="expanded fixed top-0 left-0 flex justify-center items-center w-100 vh-100 ma0 bg-black-80">
          <img className="db mw-100" src={src} alt={alt} />
        </figure>
      )}

      <style jsx>{`
        .inline {
          cursor: zoom-in;
        }

        .expanded {
          cursor: zoom-out;
        }

        .expanded > img {
          max-height: 100%;
        }

        @media screen and (min-width: 30em) and (max-width: 60em) {
          .inline {
            width: 105%;
            margin-left: -2.5%;
          }
        }

        @media screen and (min-width: 60em) {
          .inline {
            width: 120%;
            margin-left: -10%;
          }

          .expanded > img {
            max-width: 80%;
          }
        }
      `}</style>
    </div>
  )
}

BigLazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  logEvent: PropTypes.func.isRequired,
}

export default Event(BigLazyImage)
