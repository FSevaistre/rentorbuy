import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './Notification.scss'

export default class Notification extends PureComponent {
  static propTypes = {
    /** Content of notification. */
    children: PropTypes.node.isRequired,
    /** If notification is visible or not. */
    isOpen: PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props)
    this.containerEl = document.getElementsByTagName('body')[0]
  }
  render() {
    const { isOpen, children } = this.props
    return ReactDOM.createPortal(
      <CSSTransition in={isOpen} classNames="notification--transition" timeout={250} unmountOnExit>
        <div className="notification">{children}</div>
      </CSSTransition>,
      this.containerEl
    )
  }
}
