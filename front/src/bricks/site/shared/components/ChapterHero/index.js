import PropTypes from 'prop-types'
import React, { memo } from 'react'
import nl2br from 'react-nl2br'

import * as B from '../../../../index'
import * as S from './styles'

const ChapterHero = ({ number, title, variant }) => (
  <S.Hero variant={variant}>
    <S.ID>
      <B.Text>Chapitre {number}</B.Text>
    </S.ID>

    <div>
      <B.Heading type="h1">{nl2br(title)}</B.Heading>
    </div>
  </S.Hero>
)

ChapterHero.propTypes = {
  /** Integer representing the chapter number. Appears in the body section. */
  number: PropTypes.string.isRequired,
  /** Hero title. Accepts line breaks. */
  title: PropTypes.string.isRequired,
  /** Defines the color scheme of the component. */
  variant: PropTypes.string.isRequired
}

export default memo(ChapterHero)
