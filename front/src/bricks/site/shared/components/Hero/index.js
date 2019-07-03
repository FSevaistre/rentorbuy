import PropTypes from 'prop-types'
import React, { memo } from 'react'
import nl2br from 'react-nl2br'

import * as B from '../../../../index'
import * as S from './styles'

const Hero = ({ title }) => (
  <S.Hero>
    <S.Title>
      <B.Heading size="x-large" type="h1">
        {nl2br(title)}
      </B.Heading>
    </S.Title>
  </S.Hero>
)

Hero.propTypes = {
  /** Hero title. Accepts line breaks. */
  title: PropTypes.string.isRequired
}

export default memo(Hero)
