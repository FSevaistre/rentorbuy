import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const NewsPage = ({ articles, currentPageIndex, hasNextPage, hasPreviousPage }) => {
  return (
    <S.Page>
      <B.Wrapper full>
        <B.ContentHero title="Actualités" noShare />
      </B.Wrapper>

      <B.Wrapper>
        <S.Content>
          {articles && <B.ArticlePreviewGroup articles={articles} />}

          <S.Pagination>
            {hasPreviousPage && (
              <S.Link>
                <B.Link href={currentPageIndex === 2 ? '/actualites/' : `/actualites/page/${currentPageIndex - 1}/`}>
                  <S.LinkContent>
                    <S.Icon previous>
                      <B.Icon name="arrow-left" />
                    </S.Icon>
                    <B.Text>Page précédente</B.Text>
                  </S.LinkContent>
                </B.Link>
              </S.Link>
            )}

            {hasNextPage && (
              <S.Link next>
                <B.Link href={`/actualites/page/${currentPageIndex + 1}/`}>
                  <S.LinkContent>
                    <B.Text>Page suivante</B.Text>
                    <S.Icon next>
                      <B.Icon name="arrow-right" />
                    </S.Icon>
                  </S.LinkContent>
                </B.Link>
              </S.Link>
            )}
          </S.Pagination>
        </S.Content>
      </B.Wrapper>
    </S.Page>
  )
}

NewsPage.propTypes = {
  /** List of articles in the page. */
  articles: PropTypes.array.isRequired,
  /** Current page index. */
  currentPageIndex: PropTypes.number.isRequired,
  /** Whether or not the current page has a next page. */
  hasNextPage: PropTypes.bool.isRequired,
  /** Whether or not the current page has a previous page */
  hasPreviousPage: PropTypes.bool.isRequired
}

export default memo(NewsPage)
