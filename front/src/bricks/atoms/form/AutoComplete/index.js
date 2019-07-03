import classnames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { List, ListItem, Icon, TextField, Dialog, DialogTemplate, Checkbox, Card, Content } from '../../..'
import './AutoComplete.scss'

export default class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      focusedIndex: -1,
      keyDown: ''
    }
    this.selectedIndex = []
  }
  static propTypes = {
    /** Selected value value of AutoComplete */
    selectedValue: PropTypes.string,
    /** Search value of AutoComplete */
    searchValue: PropTypes.string,
    /** Search function. */
    onSearch: PropTypes.func,
    /** Clear searchfield function. */
    onClear: PropTypes.func,
    /* Format of AutoComplete */
    format: PropTypes.string,
    /** Array of results. Each option must be an object. Format: <code>\[{label: 'label 1', value: 'value 1'},{label: 'label 2', value: 'value 2'}\]</code> */
    results: PropTypes.array,
    /** Callback function fired when a menu item is selected. The function has 2 props: <code>label</code> and <code>value</code> */
    onSelect: PropTypes.func,
    /** Text for placeholder*/
    placeholder: PropTypes.string,
    /** Text for searchfield placeholder*/
    searchfieldPlaceholder: PropTypes.string,
    /** Triggered after Dialog is opened. */
    onAfterOpen: PropTypes.func,
    /** Triggered after Dialog is closed. */
    onAfterClose: PropTypes.func,
    /** Type of AutoComplete. Can be <code>check</code> */
    type: PropTypes.string,
    /** sets an icon if prop is present. */
    icon: PropTypes.string,
    /** Array of checkboxes in case of type check. Each child should be an object with Checkbox props. */
    checkboxes: PropTypes.array,
    /** Sets focus on mount if true. */
    autoFocus: PropTypes.bool
  }
  static defaultProps = {
    icon: 'search',
    results: [],
    format: 'default',
    placeholder: 'Choisissez',
    searchfieldPlaceholder: 'Recherchez',
    onSelect: () => {},
    onAfterOpen: () => {},
    onAfterClose: () => {},
    onSearch: () => {},
    onClear: () => {}
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    if (this.props.autoFocus) this.node.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleAfterOpen = () => {
    this.props.onAfterOpen(this.state.keyDown)
    this.textField && this.textField.focus()
    if (window.innerWidth < 720) {
      window.scrollTo(0, 0)
    }
  }
  handleClick = result => {
    this.setState({ focusedIndex: -1 })
    this.select(result)
  }
  handleSearch = value => {
    this.props.onSearch(value)
  }
  handleClose = () => {
    if (window.innerWidth < 720) {
      window.scrollTo(0, document.body.scrollHeight)
    }
    this.setState({ isOpen: false })
    this.props.onAfterClose()
  }
  handleOpenMenu = () => {
    this.setState({ isOpen: true, focusedIndex: -1 })
  }
  handleKeyDown = e => {
    if (!this.state.isOpen) {
      return
    }

    const focusedIndex = this.state.focusedIndex
    const key = e.keyCode
    const nextKey = key === 40
    const previousKey = key === 38
    const tabKey = !e.shiftKey && key === 9
    const shiftTabKey = e.shiftKey && key === 9
    const enterKey = key === 13

    if (
      (tabKey || nextKey) &&
      focusedIndex !== this.selectedIndex.length - 1 &&
      [this.textField, ...this.selectedIndex].includes(e.target)
    ) {
      e.preventDefault()

      if (e.target === this.textField) {
        this.setState({ focusedIndex: 0 })
        return
      }

      this.setState({ focusedIndex: this.selectedIndex.indexOf(e.target) + 1 })
      return
    }

    if (
      (shiftTabKey || previousKey) &&
      focusedIndex !== 0 &&
      [this.dialogButton, ...this.selectedIndex].includes(e.target)
    ) {
      e.preventDefault()

      if (e.target === this.dialogButton) {
        this.setState({ focusedIndex: this.selectedIndex.length - 1 })
        return
      }

      this.setState({ focusedIndex: this.selectedIndex.indexOf(e.target) - 1 })
      return
    }

    if (enterKey && focusedIndex !== -1) {
      this.select(this.props.results[focusedIndex])
      return
    }

    if (enterKey && e.target === this.textField && this.props.results.length > 0) {
      this.select(this.props.results[0])
      return
    }

    if (e.shiftKey) {
      return
    }

    this.setState({ focusedIndex: -1 })
  }
  handleSearchFocus = () => {
    this.setState({ focusedIndex: -1 })
  }
  handleClear = () => this.props.onClear()
  componentDidUpdate() {
    const { focusedIndex, isOpen } = this.state
    if (isOpen && focusedIndex > -1 && focusedIndex < this.selectedIndex.length) {
      this.selectedIndex[focusedIndex] && this.selectedIndex[focusedIndex].focus()
    }
  }
  handleValueKeyDown = e => {
    const key = e.keyCode
    const keyIsChar = key >= 48 && key <= 90
    const keyDown = keyIsChar ? String.fromCharCode(key) : ''
    this.setState({ keyDown })
    if (key === 40 || key === 38 || key === 13 || key === 32 || keyIsChar) {
      e.preventDefault()
      this.handleOpenMenu()
      if (this.state.isMenuActive) {
        const tabbables = document.getElementsByClassName('list-item')
        tabbables[0].focus()
      }
    }
    if (key === 27) this.handleClose()
  }

  select = result => {
    this.props.onSelect(result)
    if (this.props.type !== 'check') this.handleClose()
  }

  render() {
    const {
      selectedValue,
      searchValue,
      format,
      placeholder,
      results,
      searchfieldPlaceholder,
      type,
      icon,
      checkboxes
    } = this.props
    const displayedFieldProps = {
      className: classnames('autocomplete--open', { 'autocomplete--empty': !selectedValue }),
      tabIndex: 0,
      onKeyDown: this.handleValueKeyDown,
      ref: node => (this.node = node)
    }

    const content = (
      <Dialog
        isOpen={this.state.isOpen}
        onAfterOpen={this.handleAfterOpen}
        className="autocomplete--dialog-content"
        onRequestClose={this.handleClose}
      >
        <DialogTemplate
          buttonProps={
            type === 'check'
              ? {
                  onClick: this.handleClose,
                  position: 'sticky',
                  ref: button => {
                    this.dialogButton = button
                  },
                  children: 'Valider'
                }
              : null
          }
        >
          <header className="autocomplete--header">
            <span onClick={this.handleClose} className="autocomplete--close">
              <Icon name="cross" />
            </span>
            <div className="autocomplete--searchfield">
              <TextField
                ref={textField => {
                  this.textField = textField
                }}
                value={searchValue}
                onChange={this.handleSearch}
                onBlur={this.handleBlur}
                onFocus={this.handleSearchFocus}
                onClear={this.handleClear}
                type="search"
                placeholder={searchfieldPlaceholder}
                format="search"
                disableSuggestions
              />
            </div>
          </header>
          <div className={`autocomplete--list${type ? ` autocomplete--list--${type}` : ''} `}>
            <List>
              {results.map((result, i) => {
                return (
                  <ListItem
                    key={i}
                    onClick={() => this.handleClick(result)}
                    dividerProps={type === 'check' ? { opacity: 0 } : {}}
                  >
                    <div
                      className={classnames('autocomplete--list-item--content', {
                        'autocomplete--list-item--content--focused': i === this.state.focusedIndex
                      })}
                      value={result.value}
                      label={result.label}
                      tabIndex={0}
                      ref={tabI => {
                        this.selectedIndex[i] = tabI
                      }}
                    >
                      {type === 'check' && (
                        <div className="autocomplete--list-item--content--checkbox">
                          <Checkbox id={result.value} checked={result.checked} variant="success" focusable={false} />
                        </div>
                      )}
                      <span>{result.label}</span>
                    </div>
                  </ListItem>
                )
              })}
            </List>
          </div>
        </DialogTemplate>
      </Dialog>
    )
    return (
      <div className={`autocomplete autocomplete--${format}`}>
        <span onClick={this.handleOpenMenu}>
          <div {...displayedFieldProps}>
            <span className="autocomplete__value">{selectedValue ? selectedValue : placeholder}</span>
            {format === 'form' && (
              <span className="autocomplete--open--check">
                <Icon name={icon} variant="neutral-1-30" />
              </span>
            )}
          </div>
        </span>
        {content}
        {type === 'check' && checkboxes.length > 0 && (
          <div className="autocomplete--checkboxes">
            <Card format="line" variant="neutral-1-20">
              <Content>
                <TransitionGroup>
                  {checkboxes.map(checkbox => {
                    return (
                      <CSSTransition key={checkbox.id} timeout={500} classNames="autocomplete--checkbox--transition">
                        <div className="autocomplete--checkboxes--item">
                          <Checkbox variant="success" {...checkbox} />
                        </div>
                      </CSSTransition>
                    )
                  })}
                </TransitionGroup>
              </Content>
            </Card>
          </div>
        )}
      </div>
    )
  }
}
