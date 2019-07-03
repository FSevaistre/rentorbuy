import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DashboardSwipe, Emoji, Heading, DrawerVisible, Mobile, Desktop, Tablet, DesktopOnly } from '../../../index'
import './DashboardPage.scss'

export default class DashboardPage extends PureComponent {
  static propTypes = {
    greetings: PropTypes.string,
    username: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object),
    dashboardSwipeProps: PropTypes.object
  }

  state = { isDrawerOpen: false }

  handleToggleDrawer = () => this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }))

  render() {
    const { greetings, username, cards, dashboardSwipeProps } = this.props
    const sidebar = (
      <div className="dashboard-page--sidebar">
        <DashboardSwipe {...dashboardSwipeProps} />
      </div>
    )
    return (
      <div className="dashboard-page">
        <div className="dashboard-page--wrapper">
          <div className="dashboard-page--title">
            <div className="dashboard-page--title--emoji">
              <Mobile>
                <Emoji>:wave:</Emoji>
              </Mobile>
              <Desktop>
                <Emoji size="medium">:wave:</Emoji>
              </Desktop>
            </div>
            <div className="dashboard-page--title--heading">
              <Heading>
                {greetings} {username}
                &nbsp;!
              </Heading>
            </div>
          </div>

          <div className="dashboard-page--container">
            <div className="dashboard-page--content">
              {cards.map(card => {
                return (
                  <div key={card.props.title} className="dashboard-page--content--card">
                    {card}
                  </div>
                )
              })}
            </div>
            <Mobile>{sidebar}</Mobile>
            <Tablet>
              <DrawerVisible
                isOpen={this.state.isDrawerOpen}
                onOpen={this.handleToggleDrawer}
                onClose={this.handleToggleDrawer}
              >
                <div className="dashboard-page--sidebar--drawer">
                  <DashboardSwipe {...dashboardSwipeProps} cardProps={{ variant: 'neutral-1-l' }} />
                </div>
              </DrawerVisible>
            </Tablet>
            <DesktopOnly>{sidebar}</DesktopOnly>
          </div>
        </div>
      </div>
    )
  }
}
