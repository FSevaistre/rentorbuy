import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SponsorshipAction } from '../../../index'
import './SponsorshipInvite.scss'

const SponsorshipInvite = ({ onInvite }) => {
  return (
    <SponsorshipAction onClick={onInvite} icon="add">
      Inviter un proche
    </SponsorshipAction>
  )
}

SponsorshipInvite.propTypes = {
  onInvite: PropTypes.func.isRequired
}
export default memo(SponsorshipInvite)
