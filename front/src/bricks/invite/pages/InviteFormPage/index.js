import PropTypes from 'prop-types'
import React from 'react'

import * as B from '../../../index'
import * as S from './styles'

const InviteFormPage = ({ isSubmitDisabled, onSubmit, sectionProps }) => (
  <div>
    <S.Wrapper>
      <S.Title>
        <B.Heading>Invitez votre co-emprunteur</B.Heading>
      </S.Title>

      <B.ApplicationFormSection {...sectionProps} />

      <S.Button>
        <B.Button disabled={isSubmitDisabled} onClick={onSubmit}>
          Inviter
        </B.Button>
      </S.Button>
    </S.Wrapper>
  </div>
)

InviteFormPage.propTypes = {
  isSubmitDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sectionProps: PropTypes.object.isRequired
}

export default InviteFormPage
