import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Button, SubHeading, Emoji, Text, Icon, Mobile, Desktop } from '../../../index'
import './ChoiceCard.scss'

const CONFIG = {
  capacity: {
    title: 'Vous cherchez votre bien',
    emoji: ':mag_right:',
    description: 'Estimez votre budget et obtenez une attestation Pretto.'
  },
  purchase: {
    title: 'Vous avez trouvé votre bien',
    emoji: ':house_with_garden:',
    description: 'Comparez les offres et obtenez le meilleur taux.'
  },
  renegotiation: {
    title: 'Racheter un prêt immobilier',
    emoji: ':money_with_wings:',
    description:
      'Vous avez déjà un prêt immobilier et vous souhaitez le faire racheter dans une autre banque pour en diminuer le taux.'
  }
}
export default class ChoiceCard extends PureComponent {
  static propTypes = {
    /** Kind of Project. Can be `capacity`, `purchase`, or `renegotiation`. */
    kind: PropTypes.string.isRequired,
    /** OnClick function. Triggered when card is clicked, callack with `kind` argument. */
    onClick: PropTypes.func
  }
  render() {
    const { kind, onClick } = this.props
    let { title, description, emoji } = CONFIG[kind]
    const content = (
      <Content>
        <div className="choice-card--content">
          <div className="choice-card--content--main">
            <div className="choice-card--content--main--title">
              <div className="choice-card--content--main--title--emoji">
                <Emoji size="medium">{emoji}</Emoji>
              </div>
              <SubHeading size="large">{title}</SubHeading>
            </div>
            <Text size="small">{description}</Text>
          </div>
          <div className="choice-card--content--button">
            <Mobile>
              <Icon name="arrow-right" variant="primary-1" />
            </Mobile>
            <Desktop>
              <Button format="circle" icon="arrow-right" size="small" />
            </Desktop>
          </div>
        </div>
      </Content>
    )
    return (
      <div className="choice-card" onClick={() => onClick(kind)}>
        <Mobile>
          <Card variant="white" zDepth={2}>
            {content}
          </Card>
        </Mobile>
        <Desktop>
          <Card variant="white" zDepth={2} format="hover-shadow">
            {content}
          </Card>
        </Desktop>
      </div>
    )
  }
}
