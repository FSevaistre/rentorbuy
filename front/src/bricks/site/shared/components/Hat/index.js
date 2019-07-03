import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const Hat = ({ emoji, title, variant }) => (
  <S.Hat>
    <B.Container full>
      <S.Content>
        <S.Badge variant={variant}>
          <B.Emoji size="medium">{emoji}</B.Emoji>
        </S.Badge>

        <B.SubHeading size="large">{title}</B.SubHeading>
      </S.Content>
    </B.Container>
  </S.Hat>
)

Hat.propTypes = {
  /** Emoji name to be displayed within the badge. */
  emoji: PropTypes.string.isRequired,
  /** Title to be displayed under the badge. */
  title: PropTypes.string.isRequired,
  /** Defines the background color of the badge. */
  variant: PropTypes.string.isRequired
}

export default memo(Hat)
