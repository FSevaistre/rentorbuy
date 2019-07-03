import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const GlossaryItemPage = ({ title, content }) => {
  return (
    <S.Page>
      <B.Wrapper full>
        <B.ContentHero title={title} noShare />
      </B.Wrapper>

      <B.Wrapper>
        <S.Content>
          <B.ContentBlock>{content}</B.ContentBlock>
          <S.Back>
            <S.Icon>
              <B.Icon name="arrow-left" />
            </S.Icon>
            <B.Link href="/lexique/">Retour au lexique</B.Link>
          </S.Back>
        </S.Content>
      </B.Wrapper>
    </S.Page>
  )
}

GlossaryItemPage.propTypes = {
  /** Content of the page (markdown). */
  content: PropTypes.string.isRequired,
  /** Title of the page. */
  title: PropTypes.string.isRequired
}

GlossaryItemPage.defaultProps = {
  title: 'Lexique'
}

export default memo(GlossaryItemPage)
