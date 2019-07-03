import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../..'

import './Avatar.scss'

export default class Avatar extends PureComponent {
  static propTypes = {
    /** Avatar image source. Can be one letter too. */
    src: PropTypes.node.isRequired,
    /** Avatar iage size: x-small, small, medium or large. */
    size: PropTypes.string,
    /** Variant of avatar when it is a letter. */
    variant: PropTypes.string,
    /** On click fuction on Avatar. Creates a hover effect. */
    onClick: PropTypes.func
  }

  static defaultProps = {
    size: 'medium',
    variant: 'neutral-1'
  }
  render() {
    const { src, size, variant, onClick } = this.props
    const className = `avatar avatar--${size} avatar--${variant} ${onClick ? 'avatar--clickable' : ''}`
    const avatarProps = {
      className
    }
    if (onClick) Object.assign(avatarProps, { onClick })
    const content = src.length === 1 || typeof src !== 'string' ? src : <img src={src} {...avatarProps} alt="avatar" />
    return (
      <div {...avatarProps}>
        <div className="avatar--content">{content}</div>
        {!!onClick && (
          <div className="avatar--hover">
            <Icon name="more" />
          </div>
        )}
      </div>
    )
  }
}
