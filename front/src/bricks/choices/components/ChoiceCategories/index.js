import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ChoiceCategory, Divider, Mobile, Desktop } from '../../../index'
import './ChoiceCategories.scss'

export default class ChoiceCategories extends PureComponent {
  static propTypes = {
    /** OnClick function passed through its children. */
    onPurchase: PropTypes.func,
    onRenegotiation: PropTypes.func
  }

  render() {
    const { onPurchase, onRenegotiation } = this.props
    const Start = (
      <Desktop>
        <div className="choice-categories--start">Commencer</div>
      </Desktop>
    )
    return (
      <div className="choice-categories">
        <div className="choice-categories--purchase" onClick={onPurchase}>
          <ChoiceCategory kind="purchase" />
          <Mobile>
            <Divider />
          </Mobile>
          {Start}
        </div>
        <div className="choice-categories--renegotiation" onClick={onRenegotiation}>
          <ChoiceCategory kind="renegotiation" />
          {Start}
        </div>
      </div>
    )
  }
}
