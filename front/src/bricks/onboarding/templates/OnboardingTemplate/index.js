import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Button, Sequence, SubHeading } from '../../../index'
import './OnboardingTemplate.scss'

const OnboardingTemplate = ({ children, messages }) => (
  <div className="onboarding-template">
    <Sequence>
      {React.Children.map(messages, (message, i) => (
        <OnboardingMessage key={i}>{message}</OnboardingMessage>
      ))}
      {children}
    </Sequence>
  </div>
)
OnboardingTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  messages: PropTypes.node.isRequired
}

export default memo(OnboardingTemplate)

// template components ---
export const OnboardingMessage = ({ children }) => <div className="onboarding-template--message">{children}</div>
OnboardingMessage.propTypes = { children: PropTypes.node.isRequired }

export const OnboardingActions = ({ children }) => <div className="onboarding-template--actions">{children}</div>
OnboardingActions.propTypes = { children: PropTypes.node.isRequired }

export const OnboardingButton = props => (
  <div className="onboarding-template--button">
    <Button icon="arrow-right" iconPosition="right" {...props} />
  </div>
)

export const OnboardingTitle = ({ children }) => (
  <div className="onboarding-template--title">
    <SubHeading>{children}</SubHeading>
  </div>
)
OnboardingTitle.propTypes = { children: PropTypes.node.isRequired }
