import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Spinner } from '../../../index'
import './SponsorshipAddCard.scss'

const SponsorshipAddCard = ({ onAdd, adding }) => {
  return (
    <div className="sponsorship-add-card" onClick={onAdd}>
      <Card format={['line', 'large-border', 'border-dashed', 'full']} variant="neutral-1-20">
        <div className="sponsorship-add-card--icon">
          {adding ? <Spinner /> : <Icon name="add" variant="neutral-1-20" />}
        </div>
      </Card>
    </div>
  )
}
SponsorshipAddCard.propTypes = {
  onAdd: PropTypes.func.isRequired,
  adding: PropTypes.bool
}

export default memo(SponsorshipAddCard)
