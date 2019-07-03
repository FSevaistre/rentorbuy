import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

class Card extends Component {
  state = {
    windowWidth: typeof window === 'undefined' ? 0 : window.innerWidth,
    cardWidth: 0
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleMouseEnter = () => this.props.onHover(true)
  handleMouseLeave = () => this.props.onHover(false)
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth, cardWidth: this.card.offsetWidth })
  }
  render() {
    const { children, zDepth, variant, format, arrow, arrowPosition, noRadius, onHover } = this.props
    const cardProps = { zDepth, variant, format, noRadius, arrow, ...this.state }
    const arrowContent = arrow !== '' ? <S.Arrow variant={variant} position={arrow} translate={arrowPosition} /> : null
    return (
      <S.Card
        {...cardProps}
        ref={ref => (this.card = ref)}
        onMouseEnter={onHover && this.handleMouseEnter}
        onMouseLeave={onHover && this.handleMouseLeave}
      >
        {arrowContent}
        <S.Content>{children}</S.Content>
      </S.Card>
    )
  }
}

Card.propTypes = {
  /** Node of children. */
  children: PropTypes.node.isRequired,
  /** Depth of Card. */
  zDepth: PropTypes.number,
  /** Variant color of Card. */
  variant: PropTypes.string,
  /** Style format of Card. */
  format: PropTypes.any,
  /** Set if there should be an arrow. Values can be: <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>. */
  arrow: PropTypes.string,
  /** Define the position of arrow using style. For example <code>{left: 24}</code> for an arrow positionned top or bottom. Centered by default. */
  arrowPosition: PropTypes.object,
  /** Define whether there should be no border radius on a certaint part of the Card. Can be a string (for a single noRadius) or an array
  Options are: <code>top-left</code>, <code>top-right</code>, <code>bottom-right</code>, <code>bottom-left</code>.*/
  noRadius: PropTypes.any,
  /** Triggers on enter and leave, returns `true` when hover, `false` when not. */
  onHover: PropTypes.func
}

Card.defaultProps = {
  zDepth: 0,
  variant: 'neutral-1-l',
  format: 'default',
  arrow: '',
  arrowPosition: null,
  noRadius: []
}

export default Card
