import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const BackToChapter = ({ number, slug }) => (
  <B.Link href={`/guide/${slug}/`}>
    <S.Back>
      <div>
        <B.Icon name="arrow-left" variant="primary-1" />
      </div>

      <S.Title>
        <B.Text variant="primary-1">Retour au chapitre {number}</B.Text>
      </S.Title>
    </S.Back>
  </B.Link>
)

BackToChapter.propTypes = {
  /** Integer representing the given chapter number. */
  number: PropTypes.string.isRequired,
  /** Slug of the chapter. */
  slug: PropTypes.string.isRequired
}

export default memo(BackToChapter)
