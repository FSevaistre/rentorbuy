import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const ChapterPage = ({ slug, hero, topics }) => (
  <S.Page>
    <B.Wrapper full>
      <S.Hero>
        <B.ChapterHero {...hero} />
      </S.Hero>
    </B.Wrapper>

    <B.Wrapper>
      <S.Topics>
        {topics.map(topic => (
          <S.Topic id={`chapter${topic.number}`} key={topic.name}>
            <S.Title>
              <B.SubHeading size="large" variant="neutral-1-60" type="h2">
                {topic.name}
              </B.SubHeading>
            </S.Title>

            <div>
              <B.ArticlePreviewGroup articles={topic.posts} />
            </div>
          </S.Topic>
        ))}
      </S.Topics>

      <S.Links>
        <S.Link>
          <B.LinkCard
            emoji=":muscle:"
            title="Questions fréquentes"
            content="Vous avez des questions ? Nos experts crédit répondent à toutes les questions que se posent fréquemment les acheteurs."
            cta="Consulter"
            href={`/guide/${slug}/faq/`}
          />
        </S.Link>
        <S.Link>
          <B.LinkDocumentary />
        </S.Link>
      </S.Links>
    </B.Wrapper>
  </S.Page>
)

ChapterPage.propTypes = {
  /** Slug of chapter page. */
  slug: PropTypes.string.isRequired,
  /** Props of <code>[ChapterHero](/#!/ChapterHero)</code> component. */
  hero: PropTypes.object.isRequired,
  /** Array of props of <code>[ArticlePreview](/#!/ArticlePreview)</code> component. */
  topics: PropTypes.array.isRequired
}

export default memo(ChapterPage)
