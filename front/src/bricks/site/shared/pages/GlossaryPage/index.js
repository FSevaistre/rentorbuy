import uniqBy from 'lodash/uniqBy'
import latinize from 'latinize'
import PropTypes from 'prop-types'
import React, { useState, memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const filterTitle = title => latinize(title.slice(0, 1).toLowerCase())
const toTitle = ({ title }) => filterTitle(title)
const letters = terms => uniqBy(terms, toTitle).map(toTitle)

const activeTerms = (terms, filter) => terms.filter(({ title }) => filterTitle(title) === filter)

const TermsList = ({ terms, filter }) => (
  <S.Terms>
    {activeTerms(terms, filter).map(({ slug, title }) => (
      <S.Term key={slug}>
        <B.Link href={`/lexique/${slug}/`}>{title}</B.Link>
      </S.Term>
    ))}
  </S.Terms>
)

TermsList.propTypes = {
  terms: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
}

const GlossaryPage = ({ title, terms }) => {
  const [active, setActive] = useState('all')
  const onSetActive = filter => () => setActive(filter)

  return (
    <S.Page>
      <B.Wrapper full>
        <B.ContentHero title={title} noShare />
      </B.Wrapper>

      <S.Content>
        <B.Wrapper full>
          <S.Nav>
            <S.NavItem active={active === 'all'} onClick={onSetActive('all')}>
              <B.Text size="small">Tous</B.Text>
            </S.NavItem>
            {letters(terms).map(letter => {
              return (
                <S.NavItem active={active === letter} key={letter} onClick={onSetActive(letter)}>
                  <B.Text size="small">{letter}</B.Text>
                </S.NavItem>
              )
            })}
          </S.Nav>
        </B.Wrapper>

        <B.Wrapper>
          <S.TermsList>
            {active === 'all' &&
              letters(terms).map(letter => {
                return (
                  <S.TermsSection key={letter}>
                    <S.TermSectionHeading>
                      <B.SubHeading size="large">{letter}</B.SubHeading>
                      <S.TermSectionDivider>
                        <B.Divider />
                      </S.TermSectionDivider>
                    </S.TermSectionHeading>
                    <TermsList terms={terms} filter={letter} />
                  </S.TermsSection>
                )
              })}
            <TermsList terms={terms} filter={active} />
          </S.TermsList>
        </B.Wrapper>
      </S.Content>
    </S.Page>
  )
}

GlossaryPage.propTypes = {
  /** List of glossary terms. */
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      /** Slug of the term. Used for path to glossary item. */
      slug: PropTypes.string.isRequired,
      /** Title of term, as shown in the list. */
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Title of the page. */
  title: PropTypes.string
}

GlossaryPage.defaultProps = {
  title: 'Lexique'
}

export default memo(GlossaryPage)
