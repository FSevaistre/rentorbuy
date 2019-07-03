import React from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Emoji, Text, SubHeading, Icon, Desktop, Mobile } from '../../../index'
import { OnboardingMessage } from '../../templates/OnboardingTemplate'
import './OnboardingIntroductionMessage.scss'

const OnboardingIntroductionMessage = ({ onClick }) => (
  <OnboardingMessage>
    <div className="onboarding-introduction-message">
      <div className="onboarding-introduction-message--actions" onClick={onClick}>
        <Card format="line" variant="neutral-1-20">
          <div className="onboarding-introduction-message--actions--content" onClick={onClick}>
            <div className="onboarding-introduction-message--actions--content--icon" onClick={onClick}>
              <Icon variant="accent-1" name="phone" />
            </div>
            <div className="onboarding-introduction-message--actions--content--icon" onClick={onClick}>
              <Icon variant="accent-1" name="mail" />
            </div>
            <div className="onboarding-introduction-message--actions--content--icon" onClick={onClick}>
              <Icon variant="accent-1" name="calendar" />
            </div>
          </div>
        </Card>
      </div>
      <Card variant="accent-1-l" format="splitted">
        <Content>
          <div className="onboarding-introduction-message--title">
            <SubHeading variant="neutral-1">Vous avez des questions ?</SubHeading>
          </div>
          <Desktop>
            <Emoji verticalAlign="bottom">:point_left:</Emoji>
          </Desktop>
          <Mobile>
            <Emoji verticalAlign="bottom">:point_up_2:</Emoji>
          </Mobile>{' '}
          <Text variant="accent-1-d">Retrouvez toutes mes coordonnées dans votre espace Pretto.</Text>
        </Content>
      </Card>
    </div>
  </OnboardingMessage>
)

OnboardingIntroductionMessage.propTypes = {
  onClick: PropTypes.func
}

export default OnboardingIntroductionMessage
