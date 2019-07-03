import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../../index'
import * as S from './styles'

const UserAccount = ({ size }) => {
  return (
    <S.Container size={size}>
      <S.Icon size={size}>
        <B.Icon name="user-account" />
      </S.Icon>
    </S.Container>
  )
}

UserAccount.defaultProps = {
  size: 'small'
}

UserAccount.propTypes = {
  size: PropTypes.string
}

export default memo(UserAccount)
