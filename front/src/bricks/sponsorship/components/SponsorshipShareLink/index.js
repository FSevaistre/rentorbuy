import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Emoji, Tag } from '../../../index'
import './SponsorshipShareLink.scss'

export default class SponsorshipShareLink extends Component {
  state = {
    copied: false
  }
  handleClick = () => {
    this.props.onClick()
    this.setState({ copied: true })
    this.timeout = setTimeout(() => {
      this.setState({ copied: false })
    }, 2000)
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  render() {
    const { link } = this.props
    return (
      <div className="sponsorship-share-link" onClick={this.handleClick}>
        <Transition
          in={this.state.copied}
          timeout={{
            enter: 10,
            exit: 300
          }}
          unmountOnExit
        >
          {state => (
            <div
              className={`sponsorship-share-link--copied ${
                state === 'entered' ? 'sponsorship-share-link--copied--visible' : ''
              }`}
            >
              <Tag variant="primary-1">Copié !</Tag>
            </div>
          )}
        </Transition>
        <div className="sponsorship-share-link--icon">
          <Emoji>:point_right:</Emoji>
        </div>
        <div className="sponsorship-share-link--text">{link}</div>
      </div>
    )
  }
}

SponsorshipShareLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
}
