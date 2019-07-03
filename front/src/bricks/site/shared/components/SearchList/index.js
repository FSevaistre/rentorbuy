// import React, { memo, useState } from 'react'
import React, { memo } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const SearchList = ({ results, showMore, search, onClear }) => (
  <B.Card variant="white" zDepth={2}>
    <B.Content>
      {results.map((hit, i) => (
        <S.Result key={i}>
          <B.Link href={hit.post_url} onClick={onClear}>
            <S.ResultContent>
              <S.Image
                src={`https://res.cloudinary.com/pretto-fr/image/upload/c_fill,w_96,h_96/${hit.post_image}.jpg`}
                alt={hit.post_title}
              />
              <div>
                <S.Title>
                  <B.SubHeading size="small">
                    <Highlight attribute="post_title" hit={hit} tagName="mark" />
                  </B.SubHeading>
                </S.Title>

                <B.Text size="x-small">
                  <Snippet
                    attribute={hit.post_type === 'glossary' ? 'content' : 'post_excerpt'}
                    hit={hit}
                    tagName="mark"
                  />
                </B.Text>
              </div>
            </S.ResultContent>
          </B.Link>
        </S.Result>
      ))}
      {results.length === 0 && <B.Text>Aucun résultat pour cette recherche</B.Text>}
      {showMore && (
        <S.Result>
          <B.Link href={`/search/?s=${search}`} onClick={onClear}>
            <B.Text size="x-small">Voir plus de résultats</B.Text>
          </B.Link>
        </S.Result>
      )}
    </B.Content>
  </B.Card>
)

SearchList.propTypes = {
  results: PropTypes.array.isRequired,
  showMore: PropTypes.bool.isRequired,
  search: PropTypes.string,
  onClear: PropTypes.func
}

export default memo(SearchList)
