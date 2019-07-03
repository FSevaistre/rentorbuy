import PropTypes from 'prop-types'
import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const ApplicationForm = ({ hasNextPage, hideBreadcrumb, isSubmitDisabled, onSubmit, sections, title }) => (
  <div>
    {!hideBreadcrumb && (
      <B.Desktop>
        <B.ApplicationBreadcrumb items={[{ title }]} />
      </B.Desktop>
    )}

    <S.Wrapper>
      <S.Form>
        {sections.map((section, index) => (
          <S.Section key={index}>
            <B.ApplicationFormSection {...section} />

            {index < sections.length - 1 && (
              <S.Divider>
                <B.Divider />
              </S.Divider>
            )}
          </S.Section>
        ))}

        <S.Button>
          <B.Button
            {...(hasNextPage ? { icon: 'arrow-right', iconPosition: 'right' } : {})}
            disabled={isSubmitDisabled}
            onClick={onSubmit}
          >
            {hasNextPage ? 'Continuer' : 'Enregistrer'}
          </B.Button>
        </S.Button>
      </S.Form>
    </S.Wrapper>
  </div>
)

ApplicationForm.defaultProps = {
  hasNextPage: false,
  hideBreadcrumb: false,
  isSubmitDisabled: false
}

ApplicationForm.propTypes = {
  /** Whether or not there is a following page. */
  hasNextPage: PropTypes.bool,
  /** Whether or not to hide the breadcrumb. */
  hideBreadcrumb: PropTypes.bool,
  /** Whether or not the submit button is disabled. */
  isSubmitDisabled: PropTypes.bool,
  /** Event handler to be triggered when submit button is pressed. */
  onSubmit: PropTypes.func.isRequired,
  /** Array of ApplicationFormSection props <code>[ApplicationFormSection](/#!/ApplicationFormSection)</code> component. */
  sections: PropTypes.array.isRequired,
  /** Title to be displayed in the breadcrumb. */
  title: PropTypes.string.isRequired
}

export default ApplicationForm
