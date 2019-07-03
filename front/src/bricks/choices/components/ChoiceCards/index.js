import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ChoiceCard } from '../../../index'
import './ChoiceCards.scss'

const CHOICES = ['capacity', 'purchase']
export default class ChoiceCards extends PureComponent {
  static propTypes = {
    /** OnClick function passed through its children. */
    onClick: PropTypes.func
  }
  render() {
    const { onClick } = this.props
    return (
      <div className="choice-cards">
        {CHOICES.map(choice => {
          return (
            <div key={choice} className="choice-cards--card">
              <ChoiceCard kind={choice} onClick={onClick} />
            </div>
          )
        })}
      </div>
    )
  }
}
