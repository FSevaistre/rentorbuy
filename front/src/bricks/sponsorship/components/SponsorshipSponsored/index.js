import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SponsorshipAddCard, SponsorshipSponsorCard } from '../../../index'
import './SponsorshipSponsored.scss'

const SponsorshipSponsored = ({ cards, addCards, onAdd, adding }) => {
  const extraCards = []
  for (let i = 0; i < addCards; i++) {
    extraCards.push(
      <div className="sponsorship-sponsored--card" key={i} onClick={onAdd}>
        <SponsorshipAddCard adding={adding && i === 0} />
      </div>
    )
  }
  return (
    <div className="sponsorship-sponsored">
      {cards.map((card, index) => {
        return (
          <div className="sponsorship-sponsored--card" key={`${card.name}-${index}`}>
            <SponsorshipSponsorCard {...card} />
          </div>
        )
      })}
      {extraCards}
    </div>
  )
}
SponsorshipSponsored.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired),
  addCards: PropTypes.number,
  onAdd: PropTypes.func,
  adding: PropTypes.bool
}
SponsorshipSponsored.defaultProps = {
  addCards: 1
}
export default memo(SponsorshipSponsored)
