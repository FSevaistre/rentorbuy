import React from 'react'
import PropTypes from 'prop-types'

import './List.scss'

const List = ({ children, format }) => <ul className={`list list--${format}`}>{children}</ul>

List.propTypes = {
  /** Children of <code>List</code>. Use <code>ListItem</code> compenents as children. Will generate <code>ul > li</code> */
  children: PropTypes.node.isRequired,
  /** Format of <code>List</code> component. default / documents */
  format: PropTypes.string
}

List.defaultProps = {
  format: 'default'
}

export default List
