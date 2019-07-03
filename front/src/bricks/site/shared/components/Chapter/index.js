import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const Chapter = ({ description, number, slug, subChapters, title, variant }) => (
  <S.Chapter>
    <S.Head variant={variant}>
      <S.ChapterID>
        <B.Text size="small">Chapitre {number}</B.Text>
      </S.ChapterID>

      <S.Divider variant="white" />

      <S.HeadTitle>
        <B.SubHeading size="large">
          <B.Link href={`/guide/${slug}/`}>{title}</B.Link>
        </B.SubHeading>
      </S.HeadTitle>
    </S.Head>

    <S.Body>
      <S.Description>
        <B.Text size="small" type="p">
          {description}
        </B.Text>
      </S.Description>

      <S.Divider variant={variant} />

      <S.Topics>
        {subChapters.map(topic => (
          <S.Topic key={topic.name} variant={variant}>
            <B.Link href={`/guide/${slug}/#chapter${topic.number}`}>
              <B.Row
                label={<B.SubHeading>{topic.name}</B.SubHeading>}
                value={<B.Icon name="arrow-right" variant={variant} />}
              />
            </B.Link>
          </S.Topic>
        ))}
      </S.Topics>
    </S.Body>
  </S.Chapter>
)

Chapter.propTypes = {
  /** Appears on top of the body section. */
  description: PropTypes.string.isRequired,
  /** Integer representing the chapter number. Appears in the body section. */
  number: PropTypes.string.isRequired,
  /** Slug of the corresponding chapter. */
  slug: PropTypes.string.isRequired,
  /** List of links, appears in the body section. */
  subChapters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Appears in the head section. */
  title: PropTypes.string.isRequired,
  /** Defines the color scheme of the component. */
  variant: PropTypes.string.isRequired
}

export default memo(Chapter)
