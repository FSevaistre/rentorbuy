import PropTypes from 'prop-types'
import React from 'react'
import nl2br from 'react-nl2br'
import { TransitionGroup } from 'react-transition-group'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationFormSection = ({ description, fields, helper, helperCta, title }) => (
  <S.Section>
    <S.SectionContent>
      {title && (
        <S.SectionTitle hasShortSpacing={description && !helper}>
          <B.SubHeading size="large">{title}</B.SubHeading>
        </S.SectionTitle>
      )}

      {helper && (
        <S.Helper>
          <B.Card variant="accent-1-l">
            <B.Content>
              <B.Text variant="accent-1">{nl2br(helper)}</B.Text>

              {helperCta && (
                <S.HelperButton>
                  <B.ButtonSquared href={helperCta.href} variant="accent-1">
                    {helperCta.label}
                  </B.ButtonSquared>
                </S.HelperButton>
              )}
            </B.Content>
          </B.Card>
        </S.Helper>
      )}

      {description && <S.Description>{nl2br(description)}</S.Description>}

      <TransitionGroup>
        {fields.map(({ component, name }) => (
          <B.CollapsibleRow
            childComponent={S.FieldChild}
            component={component}
            key={name}
            parentComponent={S.FieldParent}
          />
        ))}
      </TransitionGroup>
    </S.SectionContent>
  </S.Section>
)

ApplicationFormSection.defaultProps = {
  fields: []
}

ApplicationFormSection.propTypes = {
  /** Description of the section. */
  description: PropTypes.string,
  /** Array of ApplicationFormField props <code>[ApplicationFormField](/#!/ApplicationFormField)</code> component. */
  fields: PropTypes.array,
  /** Helper to be displayed beside the section. */
  helper: PropTypes.string,
  /** Title of the section */
  title: PropTypes.string
}

export default ApplicationFormSection
