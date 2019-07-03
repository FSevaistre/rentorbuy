import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Card, Avatar, Mobile, Desktop } from '../../../index'
import './BubbleChat.scss'

export default class BubbleChat extends PureComponent {
  static propTypes = {
    /** Content of BubbleChat */
    children: PropTypes.node.isRequired,
    /** Formats style of BubbleChat. Should be an array or a string. */
    format: PropTypes.any,
    /** props of atom component `Card` */
    cardProps: PropTypes.object,
    /** props of atom component `Avatar` */
    avatarProps: PropTypes.object,
    /** Hide avatar. There will be blank space instead. */
    hideAvatar: PropTypes.bool
  }

  static defaultProps = {
    position: 'left',
    textVariant: 'neutral-1',
    format: 'default'
  }

  render() {
    const { children, format, cardProps, avatarProps, hideAvatar } = this.props
    const defaultAvatarProps = { src: 'p', size: 'small' }
    const mobileSize = format === 'splitted' ? 'splitted' : 'miniature'
    let formatClass = ''
    if (typeof format === 'string') formatClass = `bubble-chat--${format}`
    else {
      format.forEach(f => {
        formatClass += ` bubble-chat--${f}`
      })
    }
    return (
      <div className="bubble-chat--container">
        <div className={`bubble-chat ${formatClass}`}>
          <div className={`bubble-chat--avatar${hideAvatar ? ' bubble-chat--avatar--hidden' : ''}`}>
            {!hideAvatar && (
              <div className={'bubble-chat--avatar--content'}>
                <Mobile>
                  <Avatar {...{ ...defaultAvatarProps, ...avatarProps }} size={mobileSize} />
                </Mobile>
                <Desktop>
                  <Avatar {...{ ...defaultAvatarProps, ...avatarProps }} />
                </Desktop>
              </div>
            )}
          </div>
          <div className="bubble-chat--content">
            <Card {...cardProps}>
              <Content>{children}</Content>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
