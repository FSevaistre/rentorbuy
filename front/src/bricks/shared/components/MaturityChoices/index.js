import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { MaturityChoice } from '../../../index'
import './MaturityChoices.scss'

const MaturityChoices = ({ options }) => {
  return (
    <div className="maturity-choices">
      {options.map(({ option, onClick }, index) => {
        const handleClick = () => onClick(option)
        return (
          <div key={index} className="maturity-choices--option">
            <MaturityChoice option={option} onClick={handleClick} />
          </div>
        )
      })}
    </div>
  )
}
MaturityChoices.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string,
      onClick: PropTypes.func
    })
  )
}

export default memo(MaturityChoices)
