import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, SponsorshipShareLink, SponsorshipSocialLinks, SubHeading, Text } from '../../../index'
import './SponsorshipShareOptions.scss'

const SponsorshipShareOptions = ({ links, onClick, link }) => (
  <Card format={['line', 'small-radius']} variant="neutral-1-20">
    <div className="sponsorship-share-options">
      <div className="sponsorship-share-options--header">
        <div className="sponsorship-share-options--header--title">
          <SubHeading>Partagez votre lien de parrainage</SubHeading>
        </div>
        <Text size="small" variant="neutral-1-60">
          Par mail, SMS ou sur les réseaux sociaux...
        </Text>
      </div>
      <div className="sponsorship-share-options--links">
        <div className="sponsorship-share-options--links--link">
          <SponsorshipShareLink onClick={onClick} link={link} />
        </div>
        <div className="sponsorship-share-options--links--buttons">
          <SponsorshipSocialLinks links={links} size="small" />
        </div>
      </div>
    </div>
  </Card>
)
SponsorshipShareOptions.displayName = 'SponsorshipShareOptions'
SponsorshipShareOptions.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
}
export default memo(SponsorshipShareOptions)
