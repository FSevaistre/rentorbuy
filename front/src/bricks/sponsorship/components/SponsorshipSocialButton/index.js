import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../../index'
import './SponsorshipSocialButton.scss'

const SOCIAL_BUTTONS = ['facebook', 'linkedin', 'twitter', 'whatsapp']
const SponsorshipSocialButton = ({ kind, onClick, size }) => {
  return (
    <div
      className={`sponsorship-social-button sponsorship-social-button--${kind} sponsorship-social-button--${size}`}
      onClick={onClick}
    >
      <div className="sponsorship-social-button--icon">
        <Icon name={kind} variant="white" />
      </div>
    </div>
  )
}
SponsorshipSocialButton.propTypes = {
  kind: PropTypes.oneOf(SOCIAL_BUTTONS).isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string
}
SponsorshipSocialButton.defaultProps = {
  size: 'medium'
}
export default memo(SponsorshipSocialButton)
