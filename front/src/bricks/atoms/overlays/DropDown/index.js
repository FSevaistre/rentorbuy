import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mobile } from '../../..'
import { CSSTransition } from 'react-transition-group'
import './DropDown.scss'

export default class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  static propTypes = {
    /** DropDown label. Can be any node or just a string. */
    label: PropTypes.any.isRequired,
    /** DropDown content. */
    children: PropTypes.node.isRequired,
    /** Variants of dropdown: <code>valid</code>, <code>error</code>. */
    variant: PropTypes.string
  }
  static defaultProps = {
    variant: 'white'
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }
  handleClickOutside(event) {
    const domNode = this.node

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        isOpen: false
      })
    }
  }
  toggleDropDown = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  render() {
    const { label, children, variant } = this.props
    const dropdownClass = 'dropdown--content'
    const dropdownContent = (
      <div className={`dropdown--container dropdown--${variant}`}>
        <div className={dropdownClass}>{children}</div>
      </div>
    )
    return (
      <div className="dropdown" ref={node => (this.node = node)}>
        <div className="dropdown--label" onClick={this.toggleDropDown}>
          {label}
        </div>
        <CSSTransition in={this.state.isOpen} timeout={500} classNames="dropdown--transition" unmountOnExit>
          {dropdownContent}
        </CSSTransition>
        <Mobile>
          <CSSTransition in={this.state.isOpen} timeout={500} classNames="dropdown--transition--overlay" unmountOnExit>
            <div className="dropdown--overlay" onClick={this.toggleDropDown} />
          </CSSTransition>
        </Mobile>
      </div>
    )
  }
}
