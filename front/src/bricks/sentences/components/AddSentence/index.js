import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content } from '../../../index'
import './AddSentence.scss'

export default class AddSentence extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
  }
  render() {
    const { children, onClick } = this.props
    return (
      <div className="add-sentence" onClick={onClick}>
        <div className="add-sentence--icon">+</div>
        <div className="add-sentence--content">
          <Content>{children}</Content>
        </div>
      </div>
    )
  }
}
