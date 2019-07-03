import React from 'react'
import PropTypes from 'prop-types'
import { OnboardingActions, OnboardingButton } from '../../templates/OnboardingTemplate'

const OnboardingIntroduction = ({ onContinue }) => (
  <OnboardingActions>
    <OnboardingButton onClick={onContinue}>Continuer</OnboardingButton>
  </OnboardingActions>
)

OnboardingIntroduction.propTypes = {
  onContinue: PropTypes.func
}

export default OnboardingIntroduction
