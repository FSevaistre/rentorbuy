import React from 'react'
import PropTypes from 'prop-types'
import ReactEmoji from './react-emoji'
import './Emoji.scss'

const Emoji = ({ children, size, verticalAlign }) => {
  return (
    <span className={`emoji emoji--${size}`} style={{ verticalAlign }}>
      {ReactEmoji.emojify(children, {
        emojiType: 'emojione',
        attributes: { className: 'emoji--img' }
      })}
    </span>
  )
}

Emoji.propTypes = {
  /** Emoji character. Can be <code>:)</code> or <code>:slight_smile:</code>. cf. this <a href="https://www.webpagefx.com/tools/emoji-cheat-sheet/" target="_blank">list</a> of shortcodes. */
  children: PropTypes.node.isRequired,
  /** Size of emoji. */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large', 'x-large']),
  verticalAlign: PropTypes.string
}

Emoji.defaultProps = {
  size: 'small',
  verticalAlign: 'middle'
}

export default Emoji
