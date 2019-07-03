import React from 'react'
import PropTypes from 'prop-types'
import { BubbleChat } from '../../../index'
import './HeaderBubbles.scss'

const HeaderBubbles = ({ messages, avatar }) => {
  return (
    <div className="header-bubbles">
      {messages.map((msg, i) => {
        return (
          <div className="header-bubbles--item" key={i}>
            <BubbleChat avatarProps={{ src: avatar }} hideAvatar={i > 0}>
              {msg}
            </BubbleChat>
          </div>
        )
      })}
    </div>
  )
}

HeaderBubbles.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.node).isRequired,
  avatar: PropTypes.element.isRequired
}

export default HeaderBubbles
