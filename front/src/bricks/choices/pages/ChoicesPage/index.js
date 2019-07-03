import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ChoiceCards, ChoiceCategories, DrawerVisible as Drawer, Heading, SimulationRecallBanner } from '../../../index'
import './ChoicesPage.scss'

export default class ChoicesPage extends PureComponent {
  static propTypes = {
    /** OnClick function passed through its children. */
    onClick: PropTypes.func
  }

  state = { isDrawerOpen: false }

  handleToggleDrawer = () => this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }))
  handleRenegotiation = () => this.props.onClick('renegotiation')

  render() {
    const { onClick, recall } = this.props
    return (
      <div>
        {recall && <SimulationRecallBanner slug={recall} />}
        <div className={classnames('choices-page--wrapper', { 'choices-page--wrapper-extra': recall })}>
          <div
            className={`choices-page--categories${this.state.isDrawerOpen ? ' choices-page--categories--open' : ''}`}
          >
            <ChoiceCategories onPurchase={this.handleToggleDrawer} onRenegotiation={this.handleRenegotiation} />
          </div>
          <Drawer
            from="right"
            isOpen={this.state.isDrawerOpen}
            onClose={this.handleToggleDrawer}
            format="full"
            variant="neutral-1-l"
            isActionVisible={false}
          >
            <div className="choices-page">
              <div className="choices-page--heading">
                <Heading>Vous souhaitez préparer votre achat immobilier</Heading>
              </div>
              <div className="choices-page--content">
                <ChoiceCards onClick={onClick} />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    )
  }
}
