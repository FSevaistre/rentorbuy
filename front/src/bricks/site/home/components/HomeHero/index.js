import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useWebpSupport } from '../../../../assets/hooks'

import * as B from '../../../../index'
import * as S from './styles'

const HomeHero = ({ title, cta, score }) => {
  const ext = useWebpSupport('.png')
  return (
    <S.Header extension={ext}>
      <S.HeaderContent>
        <S.HeaderTitle>
          <B.Heading size="large" type="h1">
            {title}
          </B.Heading>
        </S.HeaderTitle>

        <S.HeaderCta>
          <S.HeroCta>
            <B.Button variant="accent-1" size="large" href="https://app.pretto.fr" rel="nofollow" scaleOnHover>
              {cta}
            </B.Button>
          </S.HeroCta>
        </S.HeaderCta>

        <S.HeaderTrustpilot>
          <B.MiniTrustpilot {...score} highlight />
        </S.HeaderTrustpilot>
      </S.HeaderContent>
    </S.Header>
  )
}

HomeHero.propTypes = {
  /** Title of header. Can differ with different campaigns. */
  title: PropTypes.string.isRequired,
  /** Call to action of header button. Can differ with different campaigns. */
  cta: PropTypes.string.isRequired,
  /** Trustpilot score. */
  score: PropTypes.shape({
    count: PropTypes.number,
    rate: PropTypes.string
  })
}

export default memo(HomeHero)
