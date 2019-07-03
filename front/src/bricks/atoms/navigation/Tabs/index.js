import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tab } from '../../..'
import './Tabs.scss'

export default class Tabs extends Component {
  static propTypes = {
    /** Tabs elements. Use <code>Tab</code> components. */
    children: PropTypes.node.isRequired,
    /** Define which Tab is active. Starts at 0. */
    tabActive: PropTypes.number,
    /** Format of Tabs */
    format: PropTypes.string
  }
  static defaultProps = {
    tabActive: 0,
    format: 'default'
  }
  constructor(props) {
    super(props)
    this.state = {
      tabActive: props.tabActive
    }
  }
  handleClick = tabActive => {
    this.setState({
      tabActive
    })
  }
  render() {
    const { children, format } = this.props
    return (
      <div className="tabs--container">
        <nav>
          <ul className={`tabs tabs--${format}`}>
            {children.map((tab, i) => {
              if (tab === null) return null
              const { label } = tab.props
              const isActive = this.state.tabActive === i
              return (
                <Tab
                  key={i}
                  label={label}
                  isActive={isActive}
                  onClick={() => {
                    this.handleClick(i)
                    tab.props.onClick(tab, i)
                  }}
                />
              )
            })}
          </ul>
        </nav>
        <div className="tabs--content">
          {children.map((tab, i) => {
            const content =
              this.state.tabActive === i ? (
                <div key={i} className="tab--content">
                  {tab.props.children}
                </div>
              ) : null
            return content
          })}
        </div>
      </div>
    )
  }
}
