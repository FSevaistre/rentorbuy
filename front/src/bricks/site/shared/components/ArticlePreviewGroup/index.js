import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const ArticlePreviewGroup = ({ articles }) => (
  <S.Articles>
    {articles.map(article => (
      <S.Article key={article.title}>
        <B.ArticlePreview {...article} />
      </S.Article>
    ))}
  </S.Articles>
)

ArticlePreviewGroup.propTypes = {
  /** Array of props of <code>[ArticlePreview](/#!/ArticlePreview)</code> component. */
  articles: PropTypes.array.isRequired
}

export default memo(ArticlePreviewGroup)
