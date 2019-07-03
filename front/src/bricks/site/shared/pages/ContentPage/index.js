import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import ContentBlock, { components, defaultOverrides } from '../../../utility/ContentBlock'
import * as S from './styles'

const getOverrides = hyphens => {
  if (!hyphens) {
    return defaultOverrides
  }

  return {
    ...defaultOverrides,
    h1: { component: components.Heading, props: { as: 'h2', format: 'hyphen', size: 'large' } },
    h2: { component: components.Heading, props: { as: 'h2', format: 'hyphen', size: 'large' } },
    h3: { component: components.Heading, props: { as: 'h3', format: 'hyphen', size: 'medium' } },
    h4: { component: components.Heading, props: { as: 'h4', format: 'hyphen', size: 'medium' } }
  }
}

const ContentPage = ({
  attachments,
  chapter,
  content,
  image,
  hyphens,
  relatedTitle,
  relatedArticles,
  title,
  noShare,
  hasSubMenu
}) => (
  <S.Page>
    {title && (
      <B.Wrapper full>
        <B.ContentHero image={image} title={title} noShare={noShare} hasSubMenu={hasSubMenu} />
      </B.Wrapper>
    )}

    <S.Content>
      {content && <ContentBlock overrides={getOverrides(hyphens)}>{content}</ContentBlock>}

      {attachments.length > 0 && (
        <B.Container full>
          <S.Attachments>
            {attachments.map(({ slug, title }) => (
              <S.Attachment key={slug}>
                <B.Attachment slug={slug} title={title} />
              </S.Attachment>
            ))}
          </S.Attachments>
        </B.Container>
      )}
    </S.Content>

    {relatedArticles && (
      <B.Wrapper>
        <B.Hat emoji=":house_with_garden:" title={relatedTitle} variant="primary-1" />
        <B.ArticlePreviewGroup articles={relatedArticles} />
      </B.Wrapper>
    )}

    {chapter && (
      <S.Back>
        <B.BackToChapter {...chapter} />
      </S.Back>
    )}
  </S.Page>
)

ContentPage.defaultProps = {
  attachments: [],
  hyphens: false,
  relatedTitle: 'Sur le même sujet'
}

ContentPage.propTypes = {
  /** List of attachments. */
  attachments: PropTypes.array,
  /** Whether or not the headlines should be preceded by a hyphen. */
  hyphens: PropTypes.bool,
  /** Related articles. */
  relatedArticles: PropTypes.array,
  /** Related title above articles. */
  relatedTitle: PropTypes.string,
  /** Current chapter information. */
  chapter: PropTypes.shape({
    number: PropTypes.string.isRequired
  }),
  /** Slug of the content image. */
  image: PropTypes.string,
  /** Title of the page. */
  title: PropTypes.string,
  /** Content of page. Must be markdown. */
  content: PropTypes.string,
  /** Set at true to disable sharing. */
  noShare: PropTypes.bool,
  /** Whether there is a submenu on top of the page or not. */
  hasSubMenu: PropTypes.bool
}

export default memo(ContentPage)
