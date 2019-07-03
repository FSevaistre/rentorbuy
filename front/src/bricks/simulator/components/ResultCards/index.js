import classnames from 'classnames';
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ResultCard } from '../../../index'
import './ResultCards.scss'

export default class ResultCards extends PureComponent {
  static propTypes = {
    /** Hide arrow buttons of each card. */
    hideButtons: PropTypes.bool,
    /** Array of <code>[ResultCard](/#!/ResultCard)</code> props coponents. */
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** Prop is passed to all <code>ResultCard</code> component*/
    projectKind: PropTypes.string
  }

  render() {
    const { cards, projectKind, hideButtons } = this.props
    return (
      <div className="result-cards">
        {cards.map((card, index) => {
          const props = {
            ...card,
            projectKind,
            isButtonActive: !hideButtons,
            isFirst: index === 0
          }
          return (
            <div key={index} className={classnames('result-cards__card', {'result-cards__card--swipe': card.version === 'swipe'})}>
              <ResultCard {...props} />
            </div>
          )
        })}
      </div>
    )
  }
}
