import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../index'
import './SponsorshipWinnings.scss'

const SponsorshipWinnings = ({ amount }) => (
  <div className="sponsorship-winnings">
    <Text variant="neutral-1-60">Vos gains</Text>
    <div className="sponsorship-winnings--amount">{amount.toLocaleString('fr')} €</div>
  </div>
)
SponsorshipWinnings.propTypes = {
  amount: PropTypes.number.isRequired
}

export default memo(SponsorshipWinnings)
