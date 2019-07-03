import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SponsorshipAction, SponsorshipShareOptions, Mobile, Desktop } from '../../../index'
import './SponsorshipShare.scss'

const SponsorshipShare = ({ onShare, links, link, onClick }) => {
  return (
    <div className="shponsorship-share">
      <Mobile>
        <SponsorshipAction onClick={onShare} icon="share">
          Votre lien de parrainage
        </SponsorshipAction>
      </Mobile>
      <Desktop>
        <SponsorshipShareOptions links={links} link={link} onClick={onClick} />
      </Desktop>
    </div>
  )
}
SponsorshipShare.propTypes = {
  onShare: PropTypes.func.isRequired,
  links: PropTypes.array,
  link: PropTypes.node,
  onClick: PropTypes.func
}
export default memo(SponsorshipShare)
