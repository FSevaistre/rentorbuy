import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import { isNil } from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { ResizableField, Text } from '../../..'
import './DateField.scss'

export default class DateField extends PureComponent {
  static propTypes = {
    /** Options for format (cf. Cleave). [See options](https://github.com/nosir/cleave.js/blob/master/doc/options.md). */
    options: PropTypes.object,
    /** Placeholder of DateField.  */
    placeholder: PropTypes.string,
    /** Initial value of DateField. Format : 'DDMMYYYY'. */
    value: PropTypes.any,
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
    placeholder: '',
    options: {
      date: true,
      delimiter: ' / '
    },
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyPress: () => {},
    autoFocus: false,
    updateWidth: true,
    format: 'sentence',
    variant: 'primary-1',
    errorText: '',
    value: ''
  }

  constructor(props) {
    super(props)

    const value = isNil(props.value) ? '' : props.value

    this.state = {
      value,
      defaultValue: value
    }
  }

  handleChange = event => {
    this.props.onChange(event.currentTarget.value)
  }

  getResizableValue(value) {
    if (!value) {
      return this.props.placeholder
    }

    return value
  }

  render() {
    const {
      autoFocus,
      errorText,
      format,
      onBlur,
      onFocus,
      onKeyPress,
      options,
      placeholder,
      updateWidth,
      variant,
      value
    } = this.props

    return (
      <ResizableField inputValue={this.getResizableValue(value)} updateWidth={updateWidth}>
        {width => (
          <span
            className={classnames('datefield--input', `datefield--input--${format}`, `datefield--input--${variant}`, {
              'datefield--input-is-valid': !isNil(value) && value !== ''
            })}
          >
            <Cleave
              autoFocus={autoFocus}
              onBlur={onBlur}
              onFocus={onFocus}
              onKeyPress={onKeyPress}
              onChange={this.handleChange}
              options={options}
              placeholder={placeholder}
              style={{ width }}
              value={this.state.defaultValue}
            />

            {!!errorText && (
              <div className="datefield--error-text">
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
