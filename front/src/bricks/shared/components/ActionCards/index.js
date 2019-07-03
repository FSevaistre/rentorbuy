import React from 'react'
import PropTypes from 'prop-types'
import { ActionCard, Swipe, Mobile, Desktop } from '../../../index'
import './ActionCards.scss'

const ActionCards = ({ data, hasOptions }) => {
  const cards = data.map((card, index) => (
    <div className="action-cards--card" key={card.title}>
      <ActionCard childrenPosition={card.childrenPosition} {...card} optionNumber={hasOptions ? index + 1 : null} />
    </div>
  ))
  return (
    <div>
      <Mobile>
        <div className="action-cards">
          <Swipe enableMouseEvents>{cards}</Swipe>
        </div>
      </Mobile>
      <Desktop>
        <div className="action-cards">{cards}</div>
      </Desktop>
    </div>
  )
}

ActionCards.propTypes = {
  data: PropTypes.array.isRequired,
  hasOptions: PropTypes.bool
}

ActionCards.defaultProps = {
  hasOptions: false
}

export default ActionCards
