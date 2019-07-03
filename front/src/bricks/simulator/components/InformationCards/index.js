import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { InformationCard } from '../../../index'
import './InformationCards.scss'

export default class InformationCards extends PureComponent {
  static propTypes = {
    /** Array of <code>[InformationCard](/#!/InformationCard)</code> props coponents.*/
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const { cards } = this.props
    return (
      <div className="information-cards">
        {cards.map((card, index) => {
          return (
            <div key={index} className="information-cards--card">
              <InformationCard {...card} />
            </div>
          )
        })}
      </div>
    )
  }
}
