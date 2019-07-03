import React from 'react'
import PropTypes from 'prop-types'
import './Tab.scss'

const Tab = ({ label, isActive, onClick }) => {
  const handleClick = () => {
    onClick()
  }
  const activeClass = isActive ? ' tab--active' : ''
  return (
    <li className={`tab${activeClass}`} onClick={handleClick}>
      {label}
    </li>
  )
}

Tab.propTypes = {
  /** Label of Tab. Can be any node. */
  label: PropTypes.node.isRequired,
  /** Content of Tab. Can be any node. */
  children: PropTypes.node,
  /** @ignore */
  isActive: PropTypes.bool,
  /** Triggered After the Tab Change. Arguments of function are Tab element and Index of Tab: handleClick = (tab, i) => {} */
  onClick: PropTypes.func
}
Tab.defaultProps = {
  onClick: () => {}
}
export default Tab
