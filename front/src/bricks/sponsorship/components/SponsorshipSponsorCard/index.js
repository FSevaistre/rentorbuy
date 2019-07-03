import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card, Content, Tag, Icon, SubHeading, Text, Mobile, Desktop } from '../../../index'
import './SponsorshipSponsorCard.scss'

const TAG = {
  joining: {
    variant: 'neutral-1-l',
    content: 'Non inscrit'
  },
  to_contact: {
    variant: 'neutral-1-l',
    content: 'Non inscrit'
  },
  ongoing: {
    variant: 'primary-1-l',
    textVariant: 'primary-1',
    content: 'Dossier en cours'
  },
  lost: {
    variant: 'neutral-1-l',
    content: 'Dossier non finalisé'
  },
  won: {
    variant: 'accent-3',
    textVariant: 'white',
    content: 'Validé',
    icon: 'star'
  }
}

const SponsorshipSponsorCard = memo(({ isMobile, name, date, status }) => {
  const { variant, content, icon, textVariant } = TAG[status]
  const cardProps = !isMobile && { zDepth: 2 }
  const letter = name.slice(0, 1).toLowerCase()
  const avatar = letter.match(/[a-z]/i) ? letter : 'z'
  const src = `https://res.cloudinary.com/pretto-fr/image/upload/c_fill,g_face,h_200,w_200,q_auto/pretto-ui/avatars/avatar-${avatar}.jpg`
  return (
    <div className="sponsorship-sponsor-card">
      <Card variant="white" {...cardProps}>
        <Content>
          <div className="sponsorship-sponsor-card--content">
            <div className="sponsorship-sponsor-card--content--avatar">
              <Avatar size="x-small" src={src} />
            </div>
            <div>
              <SubHeading>{name}</SubHeading>
              <Text size="x-small" variant="neutral-1-40">
                {date || '-'}
              </Text>
            </div>
          </div>
          <div className="sponsorship-sponsor-card--status">
            {icon && (
              <div className="sponsorship-sponsor-card--status--icon">
                <Icon name={icon} variant={variant} />
              </div>
            )}
            <Tag variant={variant}>
              <Text size="small" variant={textVariant}>
                {content}
              </Text>
            </Tag>
          </div>
        </Content>
      </Card>
    </div>
  )
})

SponsorshipSponsorCard.propTypes = {
  isMobile: PropTypes.bool,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.keys(TAG)).isRequired
}

const withMobile = props => (
  <Fragment>
    <Mobile>
      <SponsorshipSponsorCard {...props} isMobile />
    </Mobile>
    <Desktop>
      <SponsorshipSponsorCard {...props} />
    </Desktop>
  </Fragment>
)

withMobile.displayName = 'SponsorshipSponsorCard'

export default withMobile
