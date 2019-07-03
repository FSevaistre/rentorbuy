import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RadioButton } from '../../..'

export default class RadioButtonGroup extends Component {
  static propTypes = {
    /** Array of RadioButton components. */
    options: PropTypes.array.isRequired,
    /** Default selected value of RadioButtonGroup. */
    defaultValue: PropTypes.any,
    /** Current selected value of RadioButtonGroup. */
    valueSelected: PropTypes.any,
    /** Name of RadioButton elements. All children will have it. */
    name: PropTypes.string,
    /** Triggered when the RadioButton changes. */
    onChange: PropTypes.func,
    /** Variant colors of RadioButton elements. All Children will inherit from it.  */
    variant: PropTypes.string,
    /** Format style of RadioButton.<br /> Formats are: <code>default</code>, <code>line</code>. */
    format: PropTypes.string
  }

  static defaultProps = {
    variant: 'neutral-1',
    format: 'default',
    valueSelected: '',
    name: '',
    onChange: () => {}
  }
  constructor(props) {
    super(props)
    this.state = {
      valueSelected: props.defaultValue || props.valueSelected
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.valueSelected && nextProps.valueSelected !== prevState.valueSelected)
      return { valueSelected: nextProps.valueSelected }
    return null
  }
  handleChange = value => {
    this.setState({ valueSelected: value })
    this.props.onChange(value)
  }
  render() {
    const { options, name, format } = this.props
    const { valueSelected } = this.state
    return (
      <div>
        {options.map(opt => {
          const checked = valueSelected === opt.value
          let variant = this.props.variant === '' ? 'default' : this.props.variant
          if (opt.variant && opt.variant !== 'initial') variant = opt.variant
          return (
            <RadioButton
              key={opt.id}
              name={name}
              checked={checked}
              variant={variant}
              format={format}
              onChange={this.handleChange}
              {...opt}
            />
          )
        })}
      </div>
    )
  }
}
