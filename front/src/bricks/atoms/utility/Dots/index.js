import React from 'react'
import PropTypes from 'prop-types'
import './Dots.scss'

const Dots = ({ number, isActive, onClick, variant, position }) => {
  const handleClick = index => onClick(index)
  let dots = []
  for (let i = 0; i < number; i++) {
    dots.push(i)
  }
  return (
    <div className={`dots dots--${variant} dots--${position}`}>
      {dots.map(dot => {
        let dotClass = 'dot'
        if (dot === isActive) dotClass += ' dot--is-active'
        return <div key={dot} className={dotClass} onClick={() => handleClick(dot)} />
      })}
    </div>
  )
}

Dots.propTypes = {
  /** Number of dots to display. */
  number: PropTypes.number.isRequired,
  /** What dot isActive. Starting at 0. */
  isActive: PropTypes.number,
  /** Variant color of Dots. */
  variant: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.string
}
Dots.defaultProps = {
  isActive: 0,
  variant: 'primary-1',
  onClick: () => {},
  position: 'center'
}

export default Dots
