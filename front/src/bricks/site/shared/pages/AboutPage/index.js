import PropTypes from 'prop-types'
import React, { memo, Fragment } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const FIELDS = ['loan', 'rate', 'experts', 'folder', 'negotiation', 'end']

const BASE_SLUG = 'website/page/en-savoir-plus/'

const AboutPage = ({ hasSubMenu, steps, content }) => {
  return (
    <Fragment>
      <B.ContentPage noShare hasSubMenu={hasSubMenu} title="Nous construisons le futur du crédit immobilier" />

      <B.Wrapper>
        <S.Steps>
          {FIELDS.map(field => {
            const { content, image, title } = steps[field]

            return (
              <S.Step key={field} field={field}>
                <S.StepSeparation>
                  <S.StepSeparationDot field={field} />
                  <S.StepSeparationLine field={field} />
                </S.StepSeparation>
                <S.StepContent>
                  <S.StepTitle>
                    <B.SubHeading type="h3">{title}</B.SubHeading>
                  </S.StepTitle>
                  {field === 'end' && (
                    <S.EndImage>
                      <B.Image slug={`${BASE_SLUG}${image}`} description={title} options="q_auto" isImg />
                    </S.EndImage>
                  )}
                  <S.StepText>{content}</S.StepText>
                </S.StepContent>
                {field !== 'end' && (
                  <S.StepImage>
                    <B.Image slug={`${BASE_SLUG}${image}`} description={title} options="q_auto" isImg />
                  </S.StepImage>
                )}
              </S.Step>
            )
          })}
        </S.Steps>
      </B.Wrapper>

      <B.ContentPage content={content} />
    </Fragment>
  )
}

AboutPage.propTypes = {
  /** Content of the page (markdown). */
  content: PropTypes.string.isRequired,
  /** Whether there is a sub menu or not on top of the page. */
  hasSubMenu: PropTypes.bool,
  /** Steps describing how it works (shown as a timeline). */
  steps: PropTypes.object.isRequired
}

export default memo(AboutPage)
