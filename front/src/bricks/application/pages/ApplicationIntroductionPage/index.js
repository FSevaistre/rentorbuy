import PropTypes from 'prop-types'
import React, { cloneElement } from 'react'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationIntroductionPage = ({ avatarSrc, bubbles, nextPageHref }) => (
  <B.OnboardingTemplate messages={bubbles.map(bubble => cloneElement(bubble, { avatarProps: { src: avatarSrc } }))}>
    <S.Button>
      <B.Button href={nextPageHref} icon="arrow-right" iconPosition="right">
        Commencer
      </B.Button>
    </S.Button>
  </B.OnboardingTemplate>
)

ApplicationIntroductionPage.propTypes = {
  /** Source of the avatar. */
  avatarSrc: PropTypes.string,
  /** Array of <code>[BubbleChat](/#!/BubbleChat)</code> components. */
  bubbles: PropTypes.array.isRequired,
  /** Href of the next page. */
  nextPageHref: PropTypes.string.isRequired
}

export default ApplicationIntroductionPage
