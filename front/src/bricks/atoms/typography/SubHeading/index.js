import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as S from './styles'

const SubHeading = ({ children, type = 'div', ...props }) => (
  <S.SubHeading {...props} as={type}>
    {children}
  </S.SubHeading>
)

SubHeading.propTypes = {
  /** Children of subheading */
  children: PropTypes.node.isRequired,
  /** Font-size of subheading: <code>small</code>, <code>medium</code>, <code>large</code> */
  size: PropTypes.string,
  /** Variant color of SubHeading */
  variant: PropTypes.string,
  /** Format style of SubHeading */
  format: PropTypes.string,
  /** DOM type to be rendered */
  type: PropTypes.string
}

SubHeading.defaultProps = {
  format: 'default',
  size: 'medium',
  variant: 'inherit'
}

export default memo(SubHeading)
