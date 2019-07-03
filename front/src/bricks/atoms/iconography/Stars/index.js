import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../..'
import './Stars.scss'

const Stars = ({ number, size }) => {
  const starsClass = `stars stars--${size}`
  let stars = []
  for (let i = 0; i < number; i++) {
    stars.push(
      <div className="star" key={`star-${i}`}>
        <Icon name="star" />
      </div>
    )
  }
  return <div className={starsClass}>{stars}</div>
}

Stars.propTypes = {
  /** Number of stars. */
  number: PropTypes.number,
  /** Size of stars */
  size: PropTypes.string
}

Stars.defaultProps = {
  number: 1,
  size: 'medium'
}

export default Stars
