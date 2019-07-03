import PropTypes from 'prop-types'
import React from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const defaultTitles = {
  deal: 'Bon plan',
  example: 'Exemple'
}

const badgeTypes = ['deal', 'example', 'math', 'quote']

const Blockquote = ({ children, source, title, type }) => (
  <S.Blockquote hasBadge={badgeTypes.includes(type)}>
    <B.Card format="line" variant="neutral-1-20">
      <S.Content hasOffset={badgeTypes.includes(type)}>
        {(title || ['deal', 'example'].includes(type)) && (
          <S.Title>
            <B.SubHeading size="large" variant="primary-1">
              {title || defaultTitles[type]}
            </B.SubHeading>
          </S.Title>
        )}

        <S.Quote>{children}</S.Quote>

        {source && (
          <S.Cite>
            <cite>
              <strong>{source}</strong>
            </cite>
          </S.Cite>
        )}
      </S.Content>
    </B.Card>

    {badgeTypes.includes(type) && <S.Badge badgeType={type} />}
  </S.Blockquote>
)

Blockquote.propTypes = {
  /** Source/author, appears when type is set to `quote` */
  source: PropTypes.string,
  /** Blockquote title, may be used for any `type`. Overrides any predefined title. */
  title: PropTypes.string,
  /** Defines the type and the layout of the blockquote. */
  type: PropTypes.oneOf(badgeTypes)
}

export default Blockquote
