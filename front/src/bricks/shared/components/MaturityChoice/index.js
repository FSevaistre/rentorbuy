import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Emoji, Placeholder } from '../../../index'
import './MaturityChoice.scss'

const OPTIONS = {
  search_started: {
    label: 'Je suis en recherche de mon bien',
    emoji: ':mag_right:'
  },
  offer_made: {
    label: "J'ai fait une offre",
    emoji: ':house_with_garden:'
  },
  offer_accepted: {
    label: 'Mon offre est acceptée',
    emoji: ':tada:'
  },
  sale_agreement_signed: {
    label: "J'ai signé mon compromis",
    emoji: ':pen_ballpoint:'
  }
}
export default class MaturityChoice extends PureComponent {
  state = { isHover: false }
  handleHover = isHover => this.setState({ isHover })
  render() {
    const { onClick, option, isPlaceholder } = this.props
    const { label, emoji } = OPTIONS[option] || {}

    const cardProps = this.state.isHover && { variant: 'primary-1', zDepth: 2 }
    return (
      <div className="maturity-choice" onClick={onClick}>
        <Card format={['line', 'large-border']} variant="neutral-1-20" onHover={this.handleHover} {...cardProps}>
          <Content size="small">
            <div className="maturity-choice--wrapper">
              {option && (
                <div className="maturity-choice--content">
                  <div className="maturity-choice--content--emoji">
                    <Emoji size="medium">{!isPlaceholder ? emoji : ':house:'}</Emoji>
                  </div>
                  <div className="maturity-choice--content--text">
                    {!isPlaceholder ? label : <Placeholder className="maturity-choice--content--text--placeholder" />}
                  </div>
                </div>
              )}
              {!onClick && <div className="maturity-choice--edit">Modifier</div>}
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}

MaturityChoice.propTypes = {
  onClick: PropTypes.func,
  option: PropTypes.oneOf(Object.keys(OPTIONS)),
  isPlaceholder: PropTypes.bool
}
