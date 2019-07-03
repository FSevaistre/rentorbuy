import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { EditCard } from '../../../index'
import './EditCards.scss'

export default class EditCards extends PureComponent {
  static propTypes = {
    cards: PropTypes.array.isRequired
  }

  render() {
    const { cards } = this.props
    return (
      <div className="edit-cards">
        {cards.map(card => {
          const { slug } = card
          return (
            <div className="edit-cards--item" key={slug}>
              <EditCard {...card} />
            </div>
          )
        })}
      </div>
    )
  }
}
