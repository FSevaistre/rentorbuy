import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const HomeSteps = ({ steps }) => (
  <S.Steps>
    <B.NumeralSteps items={steps} />
  </S.Steps>
)

HomeSteps.propTypes = {
  /** Steps describing how it works (shown as a timeline). */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
}

export default memo(HomeSteps)
