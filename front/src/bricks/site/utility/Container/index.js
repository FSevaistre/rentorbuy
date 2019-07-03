import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Container = ({ children, full }) => <S.Container full={full}>{children}</S.Container>

Container.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool
}

export default memo(Container)
