import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ResultCardSwipe from './ResultCardSwipe'
import ResultCardBanks from './ResultCardBanks'
import ResultCardA from './ResultCardA'
import ResultCardB from './ResultCardB'
import './ResultCard.scss'

export default class ResultCard extends PureComponent {
  static propTypes = {
    /** Index of card. */
    index: PropTypes.number,
    /** Shows button card. */
    isButtonActive: PropTypes.bool,
    /** Version of component.*/
    version: PropTypes.oneOf(['a', 'b', 'banks', 'swipe']),
    /** Triggered when card is clicked on no specific location. */
    onCardClick: PropTypes.func,
    /** Triggered when card is clicked on the arrow. */
    onArrowClick: PropTypes.func,
    /** Triggered when card is clicked on the continue button. */
    onContinueClick: PropTypes.func,
    /** A different style is set on the first element. */
    isFirst: PropTypes.bool,
    /** Shows result details when opened. */
    isOpen: PropTypes.bool,
    /** Information data passed to the card. */
    cardData: PropTypes.shape({
      projectKind: PropTypes.string,
      rate: PropTypes.number,
      bankKind: PropTypes.string,
      payment: PropTypes.number,
      totalCost: PropTypes.number,
      savings: PropTypes.number,
      interests: PropTypes.number,
      guaranty: PropTypes.number,
      applicationFees: PropTypes.number,
      transferability: PropTypes.bool,
      modularity: PropTypes.bool,
      prepaymentCharge: PropTypes.bool
    }),
    /** Specific use for trustpilot card. */
    count: PropTypes.string,
    /** Specific use for trustpilot card. */
    rate: PropTypes.string
  }
  static defaultProps = {
    version: 'a'
  }

  constructor(props) {
    super(props)
    this.state = {
      isDetailsOpen: props.isFirst
    }
  }

  handleToggleDetails = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ isDetailsOpen: !this.state.isDetailsOpen })
  }

  handleCardClick = e => {
    e.preventDefault()
    e.stopPropagation()
    this.props.onCardClick()
  }

  handleArrowClick = e => {
    e.preventDefault()
    e.stopPropagation()
    this.props.onArrowClick()
  }

  render() {
    const { version, isFirst, cardData, isButtonActive, count, rate, onCardClick } = this.props
    const resultCardProps = {
      isButtonActive,
      isFirst,
      isOpen: this.state.isDetailsOpen,
      onToggleDetails: this.handleToggleDetails,
      cardData,
      onArrowClick: this.handleArrowClick
    }
    let content
    switch (version) {
      case 'swipe':
        return <ResultCardSwipe count={count} rate={rate} onClick={onCardClick} />
      case 'banks':
        content = <ResultCardBanks />
        break
      case 'a':
        content = <ResultCardA {...resultCardProps} />
        break
      case 'b':
        content = <ResultCardB {...resultCardProps} />
        break
      default:
    }
    return (
      <div className={'simulator--result-card'} onClick={this.handleCardClick}>
        {content}
      </div>
    )
  }
}
