import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { MaturityChoices } from '../../../index'
import { OnboardingActions, OnboardingTitle } from '../../templates/OnboardingTemplate'
import './OnboardingMaturity.scss'

export default class OnboardingMaturity extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        option: PropTypes.string
      })
    )
  }

  render() {
    const { options } = this.props
    return (
      <OnboardingActions>
        <OnboardingTitle>Comment avance votre projet immobilier ?</OnboardingTitle>
        <div className="onboarding-maturity">
          <MaturityChoices options={options} />
        </div>
      </OnboardingActions>
    )
  }
}
