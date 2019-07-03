import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Wrapper = ({ children, full }) => <S.Wrapper full={full}>{children}</S.Wrapper>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool
}

export default memo(Wrapper)
