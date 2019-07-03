import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const MiniTrustpilot = ({ count, rate, highlight }) => (
  <S.Trustpilot href="https://fr.trustpilot.com/review/pretto.fr" rel="noreferrer noopener" target="_blank">
    <S.Rating>
      <B.Stars number={5} />

      <S.Rate>
        <B.Text size="small">
          <strong>{rate}</strong> sur 10
        </B.Text>
      </S.Rate>
    </S.Rating>

    <div>
      <B.Text size="small">
        <strong>{count}</strong> avis sur{' '}
        <B.Text type="span" size="small" variant={highlight && 'primary-1'}>
          Trustpilot
        </B.Text>
      </B.Text>
    </div>
  </S.Trustpilot>
)

MiniTrustpilot.propTypes = {
  count: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  highlight: PropTypes.bool
}

export default memo(MiniTrustpilot)
