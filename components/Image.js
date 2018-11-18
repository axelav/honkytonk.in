// TODO make this a package?
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }

  static defaultProps = {
    alt: ''
  }

  state = {
    isExpanded: false
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = ({ keyCode }) =>
    keyCode === 27 && this.state.isExpanded && this.handleClick()

  handleClick = () => this.setState({ isExpanded: !this.state.isExpanded })

  render() {
    const { src, alt } = this.props
    const { isExpanded } = this.state

    return (
      <div className="Image w-100 mt4 mb4" onClick={this.handleClick}>
        <figure>
          <img className="db mw-100" src={src} alt={alt} />
        </figure>
        {isExpanded && (
          <figure className="expanded fixed top-0 left-0 flex justify-center items-center w-100 vh-100 bg-black-90">
            <img className="db mw-100" src={src} alt={alt} />
          </figure>
        )}

        <style jsx>{`
          figure {
            margin: 0;
          }

          .expanded > img {
            max-height: 100%;
          }

          @media screen and (min-width: 60em) {
            .expanded > img {
              max-width: 80%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Image
