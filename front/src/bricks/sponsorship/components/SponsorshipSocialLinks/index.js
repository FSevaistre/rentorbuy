import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SponsorshipSocialButton } from '../../../index'
import './SponsorshipSocialLinks.scss'

const SponsorshipSocialLinks = ({ links, size }) => (
  <div className="sponsorship-social-links">
    {links.map(buttonProps => (
      <div className="sponsorship-social-links--button" key={buttonProps.kind}>
        <SponsorshipSocialButton {...buttonProps} size={size} />
      </div>
    ))}
  </div>
)
SponsorshipSocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.string
}
export default memo(SponsorshipSocialLinks)
