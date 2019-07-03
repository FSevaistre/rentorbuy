import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import './Dialog.scss'

class Dialog extends Component {
  static propTypes = {
    /** State of modal. */
    isOpen: PropTypes.bool,
    /** Triggered after dialog is open. */
    onAfterOpen: PropTypes.func,
    /** Node of children. */
    children: PropTypes.node.isRequired,
    /** Triggered when Dialog closes. */
    onRequestClose: PropTypes.func,
    /** Class name of Dialog content. Added to default class. */
    className: PropTypes.string,
    /** Format style of Dialog. */
    format: PropTypes.string
  }
  state = {
    scrollY: 0
  }
  componentDidMount() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }
  compononWillUnmount() {
    window.removeEventListener('resize')
  }
  componentDidUpdate(prevProps) {
    if (window.innerWidth <= 720 && prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        setTimeout(() => {
          if (this.props.isOpen) window.scrollTo(0, 0)
        }, 1000)
        this.setState({ scrollY: window.scrollY })
      }
      if (!this.props.isOpen) setTimeout(() => window.scrollTo(0, this.state.scrollY), 1)
    }
  }
  handleAfterOpen = () => this.props.onAfterOpen()

  handleRequestClose = () => this.props.onRequestClose()

  render() {
    const { children, isOpen, className, format } = this.props
    const classNames = `dialog--content ${className}${format ? ` dialog--${format}` : ''}`
    return (
      <Modal
        role="dialog"
        ariaHideApp={false}
        closeTimeoutMS={300}
        className={{
          base: classNames,
          afterOpen: 'dialog--content-after-open',
          beforeClose: 'dialog--content-before-close'
        }}
        overlayClassName={{
          base: 'dialog--overlay',
          afterOpen: 'dialog--overlay-after-open',
          beforeClose: 'dialog--overlay-before-close'
        }}
        onRequestClose={this.handleRequestClose}
        isOpen={isOpen}
        onAfterOpen={this.handleAfterOpen}
        contentLabel=""
      >
        {children}
      </Modal>
    )
  }
}

Dialog.defaultProps = {
  isOpen: false,
  onAfterOpen: () => {},
  onRequestClose: () => {},
  className: ''
}

export default Dialog
