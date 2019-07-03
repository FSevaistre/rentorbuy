import React from 'react'
import PropTypes from 'prop-types'
import Slide from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'
import './Slider.scss'
import { fromPairs } from 'lodash'

const Slider = ({
  value,
  step,
  marks,
  min,
  max,
  onChange,
  onBeforeChange,
  onAfterChange,
  variant,
  disabled,
  ...props
}) => {
  if (disabled) {
    return <Slide className={`slide slide--${variant} slide--disabled`} value={0} marks={{}} disabled={disabled} />
  }
  const marksObject = fromPairs(marks.map(m => [m, '']))
  return (
    <div className="slide--wrapper">
      <Slide
        {...props}
        className={`slide slide--${variant}`}
        value={value}
        step={step}
        marks={marksObject}
        min={min}
        max={max}
        tipFormatter={null}
        onChange={onChange}
        onBeforeChange={onBeforeChange}
        onAfterChange={onAfterChange}
      />
    </div>
  )
}
Slider.propTypes = {
  /** Current value of slider. */
  value: PropTypes.number.isRequired,
  /** Value to be added or subtracted on each step the slider makes. Must be greater than zero, and <code>max</code> - <code>min</code> should be evenly divisible by the step value. When <code>marks</code> is not an empty object, <code>step</code> can be set to <code>null</code>, to make <code>marks</code> as steps. */
  step: PropTypes.number,
  /** Marks on the slider (list of positions). */
  marks: PropTypes.array,
  /** The minimum value of the slider. */
  min: PropTypes.number,
  /** The maximum value of the slider. */
  max: PropTypes.number,
  /** Triggered while the value of Slider changing. */
  onChange: PropTypes.any,
  /** Triggered when ontouchstart or onmousedown is triggered. */
  onBeforeChange: PropTypes.func,
  /** Triggered when ontouchend or onmouseup is triggered. */
  onAfterChange: PropTypes.any,
  /** Variant color of Slider. */
  variant: PropTypes.string,
  /** Define if you can use slider or not. If locked, handle will disappear. */
  disabled: PropTypes.bool
}
Slider.defaultProps = {
  step: 1,
  marks: [],
  min: 0,
  max: 100,
  onChange: () => {},
  onBeforeChange: () => {},
  onAfterChange: () => {},
  variant: 'neutral-1',
  disabled: false
}
export default Slider
