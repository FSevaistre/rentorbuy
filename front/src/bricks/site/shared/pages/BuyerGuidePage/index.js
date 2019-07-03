import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const BuyerGuidePage = ({ articles, chapters, title, searchComponent, ebookComponent }) => {
  return (
    <S.Page>
      <B.Wrapper full>
        <B.Hero title={title} />

        <S.SearchField>{searchComponent}</S.SearchField>
      </B.Wrapper>

      <B.Wrapper>
        <S.Chapters>
          {chapters.map(chapter => (
            <S.Chapter key={chapter.number}>
              <B.Chapter {...chapter} />
            </S.Chapter>
          ))}
        </S.Chapters>

        <S.ExtraPages>
          <S.Ebook>{ebookComponent}</S.Ebook>
          <S.Attachments>
            <B.LinkDocumentary />
          </S.Attachments>
        </S.ExtraPages>

        <div>
          <B.Hat emoji=":v:" title="Nos lecteurs ont aimé" variant="accent-4" />
        </div>

        <B.ArticlePreviewGroup articles={articles} />
      </B.Wrapper>
    </S.Page>
  )
}

BuyerGuidePage.propTypes = {
  /** Array of props of <code>[ArticlePreview](/#!/ArticlePreview)</code> component. */
  articles: PropTypes.array.isRequired,
  /** Array of props of <code>[Chapter](/#!/Chapter)</code> component. */
  chapters: PropTypes.array.isRequired,
  /** Page title. */
  title: PropTypes.string.isRequired,
  /** React element to use as search component. */
  searchComponent: PropTypes.element,
  /** Ebook component. */
  ebookComponent: PropTypes.element
}

export default memo(BuyerGuidePage)
