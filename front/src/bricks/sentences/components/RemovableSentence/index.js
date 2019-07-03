import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SwipeAction, Sentence, Icon, Mobile, Desktop } from '../../../index'
import './RemovableSentence.scss'

export default class RemovableSentence extends PureComponent {
  static propTypes = {
    onRemove: PropTypes.func,
    sentenceProps: PropTypes.object,
    position: PropTypes.number
  }
  render() {
    const { onRemove, sentenceProps, position } = this.props
    const mobileContent = (
      <div className="removable-sentence">
        <div className="removable-sentence--row">
          <div className="removable-sentence--row--label">{position}</div>
          {onRemove && (
            <div onClick={onRemove} className="removable-sentence--row--value">
              <Icon name="cross" />
            </div>
          )}
        </div>
        <Sentence {...sentenceProps} />
      </div>
    )
    return (
      <div>
        <Mobile>
          {onRemove ? <SwipeAction onClickAction={onRemove}>{mobileContent}</SwipeAction> : mobileContent}
        </Mobile>
        <Desktop>
          <div className="removable-sentence">
            <div className="removable-sentence--content">
              <div className="removable-sentence--content--position">{position}</div>
              <div className="removable-sentence--content--sentence">
                <Sentence {...sentenceProps} />
              </div>
              {onRemove && (
                <div className="removable-sentence--content--icon" onClick={onRemove}>
                  <Icon name="cross" />
                </div>
              )}
            </div>
          </div>
        </Desktop>
      </div>
    )
  }
}
