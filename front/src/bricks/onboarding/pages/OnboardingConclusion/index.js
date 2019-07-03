import React from 'react'
import PropTypes from 'prop-types'
import { OnboardingActions, OnboardingButton } from '../../templates/OnboardingTemplate'

const OnboardingConclusion = ({ onContinue }) => (
  <OnboardingActions>
    <OnboardingButton onClick={onContinue}>Continuer</OnboardingButton>
  </OnboardingActions>
)
OnboardingConclusion.propTypes = {
  messages: PropTypes.node,
  onContinue: PropTypes.func
}

export default OnboardingConclusion
