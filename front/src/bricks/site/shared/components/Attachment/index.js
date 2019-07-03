import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const Attachment = ({ slug, title }) => (
  <S.Attachment href={slug} target="blank">
    <B.Card format="line" variant="neutral-1-20">
      <B.Content>
        <S.Content>
          <S.Icon>
            <B.Icon name="file" variant="primary-1" />
          </S.Icon>

          <S.Title>
            <B.Text>{title}</B.Text>
          </S.Title>

          <div>
            <B.Text variant="accent-1">Télécharger</B.Text>
          </div>
        </S.Content>
      </B.Content>
    </B.Card>
  </S.Attachment>
)

Attachment.propTypes = {
  /** Slug of the attachment. */
  slug: PropTypes.string.isRequired,
  /** Title of the attachment. */
  title: PropTypes.string.isRequired
}

export default memo(Attachment)
