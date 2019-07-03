import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Emoji, Heading, Desktop, Text } from '../../../index'
import './BlockedPage.scss'

export default class BlockedPage extends PureComponent {
  static propTypes = {
    advisor: PropTypes.object.isRequired
  }

  render() {
    const { advisor } = this.props

    return (
      <div className="blocked-page">
        <div className="blocked-page--title">
          <Desktop>
            <div className="blocked-page--title--emoji">
              <Emoji size="large">:house_with_garden:</Emoji>
            </div>
          </Desktop>
          <Heading size="large">Désolé...</Heading>
        </div>
        <div className="blocked-page--content">
          Votre conseiller a refermé votre dossier Pretto. Si besoin, vous pouvez lui{' '}
          <Text variant="primary-1">
            <a href={`mailto:${advisor.email}?subject=${encodeURIComponent('Mon projet immobilier')}`} className="blocked-page--content--link">
              envoyer un message
            </a>
          </Text>
          .
        </div>
      </div>
    )
  }
}
