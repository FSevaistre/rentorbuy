import React from 'react'
import PropTypes from 'prop-types'
import { TemplateCard } from '../../../index'
import { OnboardingActions, OnboardingTitle } from '../../templates/OnboardingTemplate'
import './OnboardingCall.scss'

const OnboardingCall = ({ isAvailable, onCallNow, onMakeAppointment, onDelayAppointment }) => (
  <OnboardingActions>
    <OnboardingTitle>À quel moment puis-je vous joindre ?</OnboardingTitle>
    <div className="onboarding-call">
      {isAvailable && (
        <div className="onboarding-call--card">
          <TemplateCard onClick={onCallNow}>Appelez-moi maintenant</TemplateCard>
        </div>
      )}
      <div className="onboarding-call--card">
        <TemplateCard onClick={onMakeAppointment}>Je veux prendre rendez-vous</TemplateCard>
      </div>
      <div className="onboarding-call--card">
        <TemplateCard onClick={onDelayAppointment}>Je prendrai rendez-vous plus tard</TemplateCard>
      </div>
    </div>
  </OnboardingActions>
)

OnboardingCall.propTypes = {
  messages: PropTypes.node,
  isAvailable: PropTypes.bool,
  onCallNow: PropTypes.func,
  onMakeAppointment: PropTypes.func,
  onDelayAppointment: PropTypes.func
}

export default OnboardingCall
