import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { find } from 'lodash'
import { List, ListItem, Icon, Text, Mobile, Desktop } from '../../..'
import { CSSTransition } from 'react-transition-group'
import { findIndex } from 'lodash'
import './SelectField.scss'

export default class SelectField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuActive: false,
      isFocused: props.autoFocus
    }
    this.containerEl = document.getElementsByTagName('body')[0]
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  static propTypes = {
    /** Selected <code>value</code> of SelectField */
    value: PropTypes.any,
    /** Array of options. Each option must be an object. Format: <code>[[{label: 'label 1', value: 'value 1'},{label: 'label 2', value: 'value 2'}]]</code> */
    options: PropTypes.array.isRequired,
    /** Callback function fired when a menu item is selected. The function has 2 props: <code>label</code> and <code>value</code> */
    onChange: PropTypes.func,
    /** Text for placeholder*/
    placeholder: PropTypes.string,
    /** Variant of SelectField (decoration) */
    variant: PropTypes.string,
    /** Variant of SelectField (text) */
    textVariant: PropTypes.string,
    /** Format style of SelectField */
    format: PropTypes.string,
    /** Whether if SelectField is focused on mount or not. */
    autoFocus: PropTypes.bool
  }
  static defaultProps = {
    placeholder: 'Choisissez',
    variant: 'primary-1',
    format: 'default',
    autoFocus: false
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true)
    if (this.state.isFocused) this.node.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
    clearTimeout(this.timeout)
  }

  handleClickOutside(event) {
    const domNode = this.node

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        isMenuActive: false,
        isFocused: false
      })
    }
  }
  handleClick = option => {
    this.props.onChange(option)
    this.handleCloseMenu()
  }
  handleOpenMenu = () => {
    this.setState({ isMenuActive: true })
  }
  handleCloseMenu = () => {
    this.setState({ isMenuActive: false })
  }
  toggleMenu = () => {
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  focusTab = (direction, index = 0) => {
    const tabbables = document.getElementsByClassName('list-item--selectfield')
    let action = null
    switch (direction) {
      case 'first':
        action = () => tabbables[0].focus()
        break
      case 'next':
        if (index === tabbables.length - 1) action = () => tabbables[0].focus()
        else action = () => tabbables[index + 1].focus()
        break
      case 'previous':
        if (index === 0) action = () => tabbables[tabbables.length - 1].focus()
        else action = () => tabbables[index - 1].focus()
        break
      default:
    }

    if (action) {
      this.timeout = setTimeout(() => {
        this.setState({ isFocused: true })
        action()
      }, 1)
    }
  }

  handleKeyDown = e => {
    const key = e.keyCode
    if (key !== 9) e.preventDefault()
    if (!this.state.isMenuActive) {
      if (key === 40 || key === 38 || key === 13 || key === 32) {
        this.handleOpenMenu()
        this.focusTab('first')
      }
      if (key === 27) this.handleCloseMenu()
    }
  }

  handleItemKeyDown = (option, e) => {
    const key = e.keyCode
    const currentIndex = findIndex(this.props.options, option)
    switch (key) {
      case 9: // tab
        this.focusTab('next', currentIndex)
        break
      case 38: // arrow up
        this.focusTab('previous', currentIndex)
        break
      case 40: // arrow down
        this.focusTab('next', currentIndex)
        break
      case 13: // enter
        this.setState({ isFocused: false })
        this.timeout = setTimeout(() => {
          this.handleClick(option)
        }, 1)
        break
      default:
    }
  }
  render() {
    const { value, placeholder, options, format, variant, textVariant } = this.props
    const selected = find(options, ['value', value])
    const label = selected ? selected.label : placeholder
    const labelSelectedClass = !selected ? 'selectfield--placeholder' : ''
    const selectfieldClass = !selected ? 'selectfield' : 'selectfield selectfield-is-valid'
    let labelClass = `selectfield--label ${labelSelectedClass}`
    const contentList = (
      <List onClick={this.handleCloseTouch} format="selectfield--dropdown">
        {options.map((option, i) => {
          const isSelected = value === option.value
          const isSelectedClass = isSelected ? ' selectfield--item--is-selected' : ''
          return (
            <ListItem
              format="selectfield"
              key={i}
              onClick={() => this.handleClick(option)}
              tabIndexed
              onKeyDown={e => this.handleItemKeyDown(option, e)}
            >
              <div
                className={`selectfield--item${isSelectedClass} selectfield--item--${variant}`}
                value={option.value || option}
              >
                <span>{option.label || option}</span>
                {isSelected ? (
                  <Icon name="check" />
                ) : (
                  <Desktop>
                    <span className="selectfield--item--empty-space" />
                  </Desktop>
                )}
              </div>
            </ListItem>
          )
        })}
      </List>
    )

    const TransitionProps = {
      in: this.state.isMenuActive,
      classNames: 'selectfield--dropdown-transition',
      timeout: 300,
      unmountOnExit: true
    }

    return (
      <div
        ref={node => (this.node = node)}
        className={`${selectfieldClass} selectfield--${format} selectfield--${variant}`}
        tabIndex={0}
        onKeyDown={this.handleKeyDown}
      >
        <div onClick={this.toggleMenu} className={labelClass}>
          <span className={`selectfield--label--text${textVariant ? ` selectfield--label--text--${textVariant}` : ''}`}>
            {format === 'filter' && (
              <span className="selectfield--label--text--filter">
                <Text size="small">Trier</Text>
              </span>
            )}
            {label}
          </span>
          <span className="selectfield--label--icon">
            <Icon name="arrow-full-bottom" variant={variant} />
          </span>
        </div>
        <CSSTransition {...TransitionProps}>
          <Mobile>
            {ReactDOM.createPortal(
              <div className="list-overlay" onClick={this.handleCloseMenu}>
                {contentList}
              </div>,
              this.containerEl
            )}
          </Mobile>
        </CSSTransition>
        <Desktop>
          <CSSTransition {...TransitionProps}>{contentList}</CSSTransition>
        </Desktop>
      </div>
    )
  }
}
