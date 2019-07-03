import React from 'react'
import PropTypes from 'prop-types'
import './Row.scss'

const Row = ({ label, value, format }) => {
  return (
    <div className={`row row--${format}`}>
      <span className="row--label">{label}</span>
      <span className="row--value">{value}</span>
    </div>
  )
}
Row.propTypes = {
  /** Node of children. */
  label: PropTypes.node.isRequired,
  /** Node of children. */
  value: PropTypes.node.isRequired,
  /** Format style of Row. */
  format: PropTypes.string
}
Row.defaultProps = {
  format: 'default'
}
export default Row
