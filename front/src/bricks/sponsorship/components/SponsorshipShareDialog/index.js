import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, SponsorshipShareLink, SponsorshipSocialLinks } from '../../../index'
import './SponsorshipShareDialog.scss'

const SponsorshipShareDialog = ({ links, link, onClick }) => {
  return (
    <div className="sponsorship-share-dialog">
      <div className="sponsorship-share-dialog--description">
        <Card>
          <Content>Partagez votre lien de parrainage par mail, SMS ou sur les réseaux sociaux.</Content>
        </Card>
      </div>
      <div className="sponsorship-share-dialog--link">
        <SponsorshipShareLink link={link} onClick={onClick} />
      </div>
      <div className="sponsorship-share-dialog--buttons">
        <Content>
          <SponsorshipSocialLinks links={links} />
        </Content>
      </div>
    </div>
  )
}

SponsorshipShareDialog.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default memo(SponsorshipShareDialog)
