import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Swipeable from 'react-swipeable'
import './SwipeAction.scss'

export default class SwipeAction extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickContent: PropTypes.func,
    onClickAction: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = { deltaX: this.windowWidth, isDeleteOpen: false, componentWidth: window.innerWidth }
  }
  componentDidMount() {
    const componentWidth = document.getElementsByClassName('swipe-action')[0].offsetWidth
    this.setState({ componentWidth })
  }
  handleSwipeLeft = (e, absX) => {
    const { componentWidth } = this.state
    if (!this.state.isDeleteOpen && this.state.deltaX > componentWidth / 2)
      this.setState({ deltaX: componentWidth - absX })
  }

  handleSwipeRight = (e, absX) => {
    const { componentWidth } = this.state
    if (this.state.isDeleteOpen && this.state.deltaX < componentWidth)
      this.setState({ deltaX: componentWidth / 2 + absX })
  }

  handleSwiped = (e, deltaX, deltaY, isFlick) => {
    const { componentWidth } = this.state
    if ((isFlick || deltaX > componentWidth / 4) && deltaX > 0)
      this.setState({ deltaX: componentWidth / 2, isDeleteOpen: true })
    else if ((isFlick || deltaX > componentWidth / 4) && deltaX < 0)
      this.setState({ deltaX: componentWidth, isDeleteOpen: false })
    else this.setState({ deltaX: componentWidth, isDeleteOpen: false })
  }
  handleClickContent = () => {
    const { onClickContent } = this.props
    if (this.state.isDeleteOpen && onClickContent) onClickContent()
    this.setState({ isDeleteOpen: false, deltaX: this.state.componentWidth })
  }
  handleClickAction = () => {
    this.setState({ isDeleteOpen: false, deltaX: this.state.componentWidth })
    this.props.onClickAction()
  }
  render() {
    const { children } = this.props
    return (
      <div className="swipe-action">
        <Swipeable
          onSwipingLeft={this.handleSwipeLeft}
          onSwiped={this.handleSwiped}
          onSwipingRight={this.handleSwipeRight}
          trackMouse
        >
          <div
            className="swipe-action--content"
            style={{ right: this.state.componentWidth - this.state.deltaX }}
            onClick={this.handleClickContent}
          >
            {children}
          </div>
          <div className="swipe-action--delete" style={{ left: this.state.deltaX }} onClick={this.handleClickAction}>
            Supprimer
          </div>
        </Swipeable>
      </div>
    )
  }
}
