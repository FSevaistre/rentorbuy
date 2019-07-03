import { string } from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../index'
import * as S from './styles'

const SimulationRecallBanner = ({ slug }) => (
  <S.Banner className="accent-1-l">
    <B.Text size="small">
      <S.Emoji size="small">
        <B.Emoji size="x-small" verticalAlign="sub">
          :robot:
        </B.Emoji>
      </S.Emoji>
      <strong>Bonne nouvelle !</strong> Nous avons conservé votre simulation :{' '}
      <B.Link href={slug}>consulter vos résultats</B.Link>.
    </B.Text>
  </S.Banner>
)

SimulationRecallBanner.propTypes = {
  slug: string.isRequired
}

export default memo(SimulationRecallBanner)
