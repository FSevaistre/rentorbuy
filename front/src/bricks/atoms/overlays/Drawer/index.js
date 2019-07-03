import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import './Drawer.scss'

export default class Drawer extends Component {
  static propTypes = {
    /** Content of Drawer. */
    children: PropTypes.node.isRequired,
    /** isOpen state for Drawer. */
    isOpen: PropTypes.bool.isRequired,
    /** Direction from which Drawer opens. */
    from: PropTypes.string,
    /** Whether there is an overlay or not. */
    hasOverlay: PropTypes.bool,
    /** Overlay props. */
    overlayStyle: PropTypes.object,
    /** onClickOutside function. Useful for closing drawer by clicking outside it. */
    onClickOutside: PropTypes.func,
    /** Variant color of Drawer. */
    variant: PropTypes.string,
    /** Use for compatibility with SSR. */
    useSSR: PropTypes.bool
  }

  static defaultProps = {
    from: 'left',
    hasOverlay: false,
    overlayStyle: {},
    onClickOutside: () => {},
    variant: 'white'
  }

  constructor() {
    super()
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.bodyRoot = document.getElementsByTagName('body')[0]
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  handleClickOutside(event) {
    const domNode = this.node

    if (!domNode || (!domNode.contains(event.target) && this.props.isOpen)) {
      this.props.onClickOutside()
    }
  }

  renderDrawer = () => {
    const { children, isOpen, from, hasOverlay, overlayStyle, onClickOutside, variant } = this.props
    const drawerClass = `drawer drawer--${from}${isOpen ? ' drawer--is-open' : ''}`
    return (
      <div className={drawerClass}>
        <CSSTransition in={isOpen} timeout={500} classNames={`drawer--transition--${from}`} unmountOnExit>
          <div className={`drawer--content drawer--content--${variant}`} ref={node => (this.node = node)}>
            {children}
          </div>
        </CSSTransition>
        {hasOverlay && (
          <CSSTransition in={isOpen} timeout={500} classNames="drawer--transition--overlay" unmountOnExit>
            <div className="drawer--overlay" style={{ ...overlayStyle }} onClick={onClickOutside} />
          </CSSTransition>
        )}
      </div>
    )
  }

  render() {
    if (this.props.useSSR) return this.renderDrawer()
    return !!this.bodyRoot && ReactDOM.createPortal(this.renderDrawer(), this.bodyRoot)
  }
}
