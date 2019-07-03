import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../..'
import './DrawerVisible.scss'

export default class DrawerVisible extends Component {
  static propTypes = {
    /** Node of children. */
    children: PropTypes.node.isRequired,
    /** Variant color of DrawerVisible. */
    variant: PropTypes.string,
    /** DrawerVisible className. Useful for layout. */
    className: PropTypes.string,
    /** Open state of DrawerVisible. */
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    /** Format of Drawer. */
    format: PropTypes.oneOf(['default', 'full']),
    isActionVisible: PropTypes.bool
  }
  static defaultProps = {
    variant: 'white',
    className: '',
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
    format: 'default',
    isActionVisible: true
  }
  constructor(props) {
    super(props)
    this.state = {
      initTransition: false,
      drawerWidth: 600
    }
  }

  toggleDrawer = () => {
    const { isOpen, onOpen, onClose } = this.props
    if (isOpen) onClose()
    else onOpen()
  }
  handleClose = () => this.props.onClose()

  updateDrawerWidth = () => {
    this.setState({ drawerWidth: this.drawer.offsetWidth })
  }
  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ initTransition: true }), 500)
    this.updateDrawerWidth()
    window.addEventListener('resize', this.updateDrawerWidth)
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
    window.removeEventListener('resize', this.updateDrawerWidth)
  }
  render() {
    const { children, variant, className, format, isActionVisible, isOpen, onClose } = this.props
    const { initTransition } = this.state
    const transitionStatus = initTransition ? 'on' : 'off'
    const drawerWidth = this.drawer ? this.drawer.offsetWidth : this.state.drawerWidth
    const iconName = isOpen ? 'cross' : 'arrow-right'
    const openClass = isOpen ? ' drawer-visible--is-open' : ''
    const diff = format === 'full' ? 0 : 24
    const left = isOpen ? 0 : -drawerWidth + diff // 24 = visible part of drawer
    return (
      <div
        style={{ left }}
        className={`drawer-visible${openClass} ${className} drawer-visible--${format} drawer-visible--transition--${transitionStatus}`}
        ref={drawer => {
          this.drawer = drawer
        }}
      >
        {isOpen ? <div className="drawer-visible--overlay" style={{ left: drawerWidth }} onClick={onClose} /> : null}
        {isActionVisible && (
          <div className="drawer-visible--action" onClick={this.toggleDrawer}>
            <Icon name={iconName} />
          </div>
        )}
        <div className={`drawer-visible--content drawer-visible--content--${variant}`}>{children}</div>
      </div>
    )
  }
}
