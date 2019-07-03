import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, SubHeading, Slider, Row } from '../../../index'
import './SliderRange.scss'

const LABEL = (value, type) => {
  return type === 'duration' ? `${value} ans` : `${value.toLocaleString('fr')} €`
}
export default class SliderRange extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    format: PropTypes.string,
    warning: PropTypes.string,
    sliderProps: PropTypes.object
  }

  static defaultProps = {
    format: 'default'
  }

  render() {
    const { title, type, format, warning, sliderProps } = this.props
    const { value, min, max, variant } = sliderProps
    return (
      <div className={`slider-range slider-range--${format}`}>
        <Row
          label={
            <SubHeading>
              <strong>{title}</strong>
            </SubHeading>
          }
          value={<SubHeading variant={variant}>{LABEL(value, type)}</SubHeading>}
        />
        <Slider {...sliderProps} />
        <Row
          label={
            <Text size="x-small" variant="neutral-1-60">
              {LABEL(min, type)}
            </Text>
          }
          value={
            <Text size="x-small" variant="neutral-1-60">
              {LABEL(max, type)}
            </Text>
          }
        />
        {warning && (
          <Text variant="warning" size="x-small">
            {warning}
          </Text>
        )}
      </div>
    )
  }
}
