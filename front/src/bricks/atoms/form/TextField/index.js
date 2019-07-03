import React, { Component, forwardRef } from 'react'
import PropTypes from 'prop-types'
import mailcheck from 'mailcheck'
import { debounce } from 'lodash'
import { Icon, Card, Content, Text } from '../../..'
import './TextField.scss'

const DOMAINS = [
  'aol.com',
  'facebook.com',
  'free.fr',
  'gmail.com',
  'gmx.fr',
  'hotmail.com',
  'hotmail.fr',
  'icloud.com',
  'laposte.net',
  'live.com',
  'live.fr',
  'me.com',
  'msn.com',
  'orange.fr',
  'outlook.com',
  'outlook.fr',
  'sfr.fr',
  'wanadoo.fr',
  'yahoo.com',
  'yahoo.fr'
]

class TextField extends Component {
  static propTypes = {
    id: PropTypes.string,
    /** Types of Textfield: <code>text</code>, <code>search</code>, <code>number</code>, <code>email</code>, <code>tel</code>, <code>textarea</code>*/
    type: PropTypes.string,
    /** Label of TextField */
    label: PropTypes.string,
    /** Placeholder of TextField */
    placeholder: PropTypes.string,
    /** small, medium, large */
    size: PropTypes.string,
    /** Text error of field. Is visible when not empty. */
    errorText: PropTypes.node,
    /** Value of TextField.*/
    value: PropTypes.string,
    /** Icon in input. */
    icon: PropTypes.string,
    /** Icon variant color. */
    iconVariant: PropTypes.string,
    /** Triggered when value changes.*/
    onChange: PropTypes.func,
    /** Triggered when exiting focus.*/
    onBlur: PropTypes.func,
    /** Triggered when clearing searchfield.*/
    onClear: PropTypes.func,
    /** Format of TextField. Use <code>form</code> for form style of input. */
    format: PropTypes.string,
    /** Variant color of TextField. */
    variant: PropTypes.string,
    /** Triggered when key down. */
    onKeyDown: PropTypes.func,
    /** Triggered on focus. */
    onFocus: PropTypes.func,
    /** Disable suggestions for mobile phones. */
    disableSuggestions: PropTypes.bool,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onClickHint: PropTypes.func
  }

  static defaultProps = {
    id: '',
    type: 'text',
    label: '',
    placeholder: '',
    size: 'medium',
    errorText: '',
    format: 'default',
    variant: 'primary-1',
    icon: '',
    iconVariant: 'neutral-1-30',
    disableSuggestions: false,
    required: false,
    autoFocus: false,
    onChange: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClear: () => {}
  }

  state = {
    hint: ''
  }
  handleChange = e => {
    const value = e.target.value
    this.props.onChange(value)
    if (this.props.type === 'email') {
      this.updateHint(value)
    }
  }
  handleKeyDown = e => {
    this.props.onKeyDown(e)
  }
  handleFocus = () => {
    this.props.onFocus()
  }
  handleBlur = () => {
    this.props.onBlur()
  }
  handleClearField = () => {
    this.input.focus()
    this.props.onChange('')
    this.props.onClear()
  }
  updateHint = debounce(email => {
    this.emailHint(email).then(hint => this.setState({ hint }))
  }, 1000)
  emailHint = email => {
    return new Promise(function(resolve) {
      mailcheck.run({
        email,
        domains: DOMAINS,
        suggested: ({ full }) => resolve(full),
        empty: () => resolve(null)
      })
    })
  }
  handleClickHint = () => {
    this.props.onClickHint(this.state.hint)
    this.setState({ hint: '' })
  }
  render() {
    const {
      id,
      label,
      placeholder,
      size,
      errorText,
      format,
      required,
      icon,
      disableSuggestions,
      value,
      autoFocus,
      onClickHint,
      innerRef
    } = this.props
    const { hint } = this.state
    const variant = hint ? 'warning' : this.props.variant
    const iconVariant = hint ? 'warning' : this.props.iconVariant
    const type = this.props.type === 'search' ? 'text' : this.props.type
    const sentenceProps =
      format === 'sentence' || disableSuggestions
        ? { autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off', spellCheck: 'false' }
        : {}
    const iconClass = icon !== '' ? ' textfield--icon' : ''
    const iconElement = icon !== '' ? <Icon name={icon} variant={iconVariant} /> : null
    const labelContent =
      label !== '' ? (
        <label className="textfield--label" htmlFor={id}>
          {label}
        </label>
      ) : null
    const errorContent = errorText !== '' && !hint ? <div className="textfield--error-text">{errorText}</div> : null
    const clearIcon = value !== '' ? <Icon name="cross-circle" /> : null
    const classValid = value !== '' ? 'textfield--input textfield--input-is-valid' : 'textfield--input'
    const clearButton =
      this.props.type === 'search' && value !== '' ? (
        <span className="textfield--clear" onClick={this.handleClearField}>
          {clearIcon}
        </span>
      ) : null
    const content =
      type === 'textarea' ? (
        <textarea
          className="textfield--textarea"
          name={id}
          id={id}
          placeholder={placeholder}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
        />
      ) : (
        <input
          ref={input => {
            this.input = input
            return innerRef && innerRef(input)
          }}
          id={id}
          value={value}
          className={classValid}
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          required={required}
          {...sentenceProps}
          autoFocus={autoFocus}
        />
      )
    return (
      <div>
        {labelContent}
        <div className={`textfield textfield--${size} textfield--${format} textfield--${variant}${iconClass}`}>
          {iconElement}
          {content}
          {clearButton}
          {!hint && errorContent}
        </div>
        {onClickHint && hint && (
          <div className="textfield--hint">
            <Card variant="warning-l">
              <Content size="x-small">
                <Text size="small" variant="warning">
                  Vouliez-vous dire {hint} ?<br />
                  <span className="textfield--hint--correct" onClick={this.handleClickHint}>
                    Corriger
                  </span>
                </Text>
              </Content>
            </Card>
          </div>
        )}
      </div>
    )
  }
}
export default forwardRef((props, ref) => <TextField innerRef={ref} {...props} />)
