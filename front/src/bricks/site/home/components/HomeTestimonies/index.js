import PropTypes from 'prop-types'
import React, { memo, Fragment } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const HomeTestimonies = ({ count, rate }) => (
  <Fragment>
    <S.Trustpilot>
      <S.TrustpilotScore>
        <B.Emoji size="medium">:ok_hand:</B.Emoji>

        <S.TrustpilotRate>
          <B.Heading size="large">{rate}</B.Heading>
        </S.TrustpilotRate>
      </S.TrustpilotScore>

      <div>
        <S.TrustpilotStars>
          <B.Mobile>
            <B.Stars number={5} />
          </B.Mobile>

          <B.Desktop>
            <B.Stars number={5} size="large" />
          </B.Desktop>
        </S.TrustpilotStars>

        <div>
          <B.Text>{count} avis • Excellent</B.Text>
        </div>

        <div>
          <B.Text variant="primary-1">
            <a href="https://fr.trustpilot.com/review/pretto.fr" rel="nofollow noopener noreferrer" target="_blank">
              Voir sur Trustpilot
            </a>
          </B.Text>
        </div>
      </div>
    </S.Trustpilot>

    <div>
      <S.TrustpilotModule>
        <B.Trustpilot template="slider" stars="4,5" />
      </S.TrustpilotModule>
    </div>
  </Fragment>
)

HomeTestimonies.propTypes = {
  count: PropTypes.number,
  rate: PropTypes.string
}

export default memo(HomeTestimonies)
