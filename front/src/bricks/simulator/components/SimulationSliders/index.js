import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SliderRange } from '../../../index'
import './SimulationSliders.scss'

export default class SimulationSliders extends PureComponent {
  static propTypes = {
    /** Array of <code>[SimulationSlider](/#!/SimulationSlider)</code> props coponents. */
    sliders: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const { sliders } = this.props
    return (
      <div className="simulation-sliders">
        {sliders.map((slider, index) => {
          return (
            <div key={index} className="simulation-sliders--slider">
              <SliderRange {...slider} />
            </div>
          )
        })}
      </div>
    )
  }
}
