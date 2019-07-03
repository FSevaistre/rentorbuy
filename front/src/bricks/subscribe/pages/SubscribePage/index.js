import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Mobile, Desktop } from '../../..'
import {
  Card,
  Content,
  Heading,
  SubscribeContent,
  SubscribePartners,
  WhiteLabelBanner,
  WhiteLabelPartners
} from '../../../index'
import './SubscribePage.scss'

const TITLE = {
  save: 'Sauvegardez votre simulation',
  card: 'Simulez le meilleur taux',
  appointment: 'Prenez rendez-vous avec un expert',
  modal: 'Créez votre projet'
}
const ERROR = link => {
  return {
    account_exists: <p>Il semblerait que vous ayez déjà un compte, vous pouvez vous connecter {link}.</p>
  }
}
export default class SubscribePage extends PureComponent {
  static propTypes = {
    formComponent: PropTypes.element,
    subscribeContentProps: PropTypes.object,
    whiteLabel: PropTypes.object,
    kind: PropTypes.string,
    error: PropTypes.oneOf(Object.keys(ERROR())),
    link: PropTypes.node
  }

  render() {
    const { whiteLabel, kind, subscribeContentProps, error, link, formComponent } = this.props
    const { banner, partners, style } = whiteLabel
    subscribeContentProps.version = kind
    return (
      <div className="subscribe-page">
        {error && (
          <Card variant="warning">
            <Content>
              <div className="subscribe-page--error-message">{ERROR(link)[error]}</div>
            </Content>
          </Card>
        )}
        <h1 className="subscribe-page--title">
          <Heading size="large">{TITLE[kind] || 'Obtenez le meilleur prêt'}</Heading>
        </h1>
        {banner && (
          <Mobile>
            <WhiteLabelBanner>{banner}</WhiteLabelBanner>
          </Mobile>
        )}
        <div className="subscribe-page--content">
          <div className="subscribe-page--content--form">
            <Card variant="white" zDepth={2}>
              <Content>{formComponent}</Content>
            </Card>
          </div>
          <div className="subscribe-page--content--rate">
            <Mobile>
              <Content variant="neutral-1-l">
                <SubscribeContent {...subscribeContentProps} />
              </Content>
            </Mobile>
            <Desktop>
              <SubscribeContent {...subscribeContentProps} />
            </Desktop>
          </div>
        </div>
        <div className={`subscribe-page--partners${partners ? ' subscribe-page--partners--white-label' : ''}`}>
          {partners ? (
            <WhiteLabelPartners logo={partners.logo} style={style}>
              {partners.content}
            </WhiteLabelPartners>
          ) : (
            <Content>
              <SubscribePartners />
            </Content>
          )}
        </div>
      </div>
    )
  }
}
