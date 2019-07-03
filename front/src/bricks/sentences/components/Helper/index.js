import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Divider, Emoji } from '../../../index'
import './Helper.scss'

const upClick = 'LIKED_ADVICE'
const downClick = 'DISLIKED_ADVICE'

export default class Helper extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool,
    onClickHelper: PropTypes.func,
    clickedHelper: PropTypes.string
  }
  handleClick = res => {
    this.props.onClickHelper(res)
  }
  render() {
    const { children, isMobile, clickedHelper } = this.props
    const isUpActive = downClick === clickedHelper ? ' inactive' : ''
    const isDownActive = upClick === clickedHelper ? ' inactive' : ''
    return (
      <Card variant="white" zDepth={isMobile ? 0 : 2} noPadding>
        <div className="helper">
          <div className="helper--content">{children}</div>
          <Divider />
          <div className="helper--actions">
            <p>Ce conseil est-il utile ?</p>
            <div className="helper--actions--emojis">
              <div className={`helper--actions--emojis--up${isUpActive}`} onClick={() => this.handleClick(upClick)}>
                <Emoji size="medium">:+1:</Emoji>
              </div>
              <div
                className={`helper--actions--emojis--down${isDownActive}`}
                onClick={() => this.handleClick(downClick)}
              >
                <Emoji size="medium">:-1:</Emoji>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
