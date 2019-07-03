import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles.js'

const ArticlePreview = ({ category, excerpt, image, title, slug }) => (
  <article>
    <nav>
      {image && (
        <B.Link href={`/${category}/${slug}/`}>
          <B.Image description="" path="post" slug={image} options="c_fill,w_740,h_380,q_auto" />
        </B.Link>
      )}

      <S.Title>
        <B.Link href={`/${category}/${slug}/`}>
          <B.SubHeading>{title}</B.SubHeading>
        </B.Link>
      </S.Title>
    </nav>

    {excerpt && (
      <S.Excerpt>
        <B.Text type="p">{excerpt}</B.Text>
      </S.Excerpt>
    )}
  </article>
)

ArticlePreview.propTypes = {
  /** Category of the corresponding post. */
  category: PropTypes.string.isRequired,
  /** Integer representing the chapter number. Appears in the body section. */
  excerpt: PropTypes.string,
  /** Slug of the post image. */
  image: PropTypes.string.isRequired,
  /** Slug of the corresponding post. */
  slug: PropTypes.string.isRequired,
  /** Appears on top of the body section. */
  title: PropTypes.string.isRequired
}

export default memo(ArticlePreview)
