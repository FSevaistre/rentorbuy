import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import { isNaN, isNil } from 'lodash'
import PropTypes from 'prop-types'
import React, { cloneElement, Component, forwardRef } from 'react'

import { ResizableField, Text } from '../../..'
// TODO : PUT ME BACK
// require('cleave.js/dist/addons/cleave-phone.FR')

import './NumberField.scss'

class NumberField extends Component {
  static propTypes = {
    /** Types of Textfield: <code>tel</code>, <code>email</code>. */
    type: PropTypes.string,
    /** Options for format (cf. Cleave). [See options](https://github.com/nosir/cleave.js/blob/master/doc/options.md). */
    options: PropTypes.object,
    /** Placeholder of NumberField.  */
    placeholder: PropTypes.string,
    /** Value of NumberField. */
    value: PropTypes.any,
    /** defaultValue of NumberField. */
    defaultValue: PropTypes.any,
    /** Triggered when value changes. */
    onChange: PropTypes.func,
    /** Triggered when entering focus. */
    onFocus: PropTypes.func,
    /** Triggered when exiting focus. */
    onBlur: PropTypes.func,
    /** Triggered when a key is pressed. */
    onKeyPress: PropTypes.func,
    /** AutoFocus of input. */
    autoFocus: PropTypes.bool,
    /** Choose if you want to update width of input. */
    updateWidth: PropTypes.bool,
    /** Variant of input. */
    variant: PropTypes.string,
    /** Format of input. */
    format: PropTypes.string,
    errorText: PropTypes.node
  }

  static defaultProps = {
    type: 'tel',
    placeholder: '',
    options: {
      numeral: true,
      delimiter: ' ',
      numeralPositiveOnly: true,
      numeralDecimalScale: 0
    },
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyPress: () => {},
    autoFocus: false,
    updateWidth: true,
    format: 'sentence',
    variant: 'primary-1',
    errorText: ''
  }

  constructor(props) {
    super(props)

    const value = isNil(props.value) ? '' : props.value

    this.state = {
      defaultValue: value,
      value
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { value } = nextProps

    if (Number(prevState.value) === Number(value)) {
      return null
    }

    return { value: isNil(value) ? '' : value }
  }

  handleChange = e => {
    let fieldValue = e.target.rawValue || e.target.value
    if (fieldValue === '') {
      this.setState({ value: null })
      this.props.onChange(null)
      return
    }

    // Update displayed value
    if (this.props.type !== 'phone')
      this.setState({
        value: fieldValue.replace(',', '.').replace(/[^0-9.]/g, '')
      })

    // Cast to number
    const actualValue = Number(fieldValue)
    if (isNaN(actualValue)) {
      return
    }

    this.props.onChange(actualValue)
  }

  renderFieldComponent() {
    const { innerRef, options, type } = this.props

    if (type === 'decimal') {
      return (
        <input
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          pattern="[0-9,\\.]*"
          ref={innerRef}
          spellCheck="false"
          type="text"
          value={this.state.value}
        />
      )
    }

    return <Cleave htmlRef={innerRef} options={options} type={type} value={this.state.defaultValue} />
  }

  getResizableValue(value) {
    if (!value) {
      return this.props.placeholder
    }

    if (this.props.type !== 'decimal') {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }

    return value
  }

  render() {
    const { autoFocus, errorText, format, onBlur, onFocus, onKeyPress, placeholder, updateWidth, variant } = this.props
    const { value } = this.state

    return (
      <ResizableField inputValue={this.getResizableValue(value)} updateWidth={updateWidth}>
        {width => (
          <span
            className={classnames(
              'numberfield--input',
              `numberfield--input--${format}`,
              `numberfield--input--${variant}`,
              {
                'numberfield--input-is-valid': !isNil(value) && value !== ''
              }
            )}
          >
            {cloneElement(this.renderFieldComponent(), {
              autoFocus,
              onBlur,
              onFocus,
              onKeyPress,
              placeholder,
              onChange: this.handleChange,
              style: { width }
            })}

            {!!errorText && (
              <div className="numberfield--error-text">
                <Text size="x-small" variant="error">
                  {errorText}
                </Text>
              </div>
            )}
          </span>
        )}
      </ResizableField>
    )
  }
}

export default forwardRef((props, ref) => <NumberField innerRef={ref} {...props} />)
