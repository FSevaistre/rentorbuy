import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './RatingScale.scss'

export default class RatingScale extends Component {
  static propTypes = {
    /** RatingScale value. */
    value: PropTypes.number,
    /** RatingScale onChange function. */
    onChange: PropTypes.func,
    /** Minimum value of scale. */
    min: PropTypes.number,
    /** Maximum value of scale. */
    max: PropTypes.number
  }

  static defaultProps = {
    onClick: () => {},
    min: 1,
    max: 5
  }

  handleChange = rate => () => this.props.onChange(rate)

  render() {
    const { value, min, max } = this.props
    let scale = []
    for (let i = min; i <= max; i++) {
      scale.push(i)
    }
    return (
      <div className="rating-scale">
        {scale.map(rate => {
          const selectedClass = rate === value ? ' rating-scale--score--selected' : ''
          return (
            <div key={rate} className={`rating-scale--score${selectedClass}`} onClick={this.handleChange(rate)}>
              {rate}
            </div>
          )
        })}
      </div>
    )
  }
}
