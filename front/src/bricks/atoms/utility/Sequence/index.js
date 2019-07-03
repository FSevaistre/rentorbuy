import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { castArray } from 'lodash'
import './Sequence.scss'

export default class Sequence extends Component {
  static propTypes = {
    children: PropTypes.node,
    delay: PropTypes.number,
    ctaDelay: PropTypes.number
  }

  static defaultProps = {
    delay: 2000,
    ctaDelay: 1000
  }

  state = {
    rendering: true,
    renderedIndex: 0
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  componentDidMount() {
    this.renderNextChild()
  }

  renderNextChild = () => {
    const { delay, ctaDelay, children } = this.props
    const { renderedIndex } = this.state

    this.setState(prevState => ({ renderedIndex: prevState.renderedIndex + 1 }))

    const d = renderedIndex < React.Children.count(children) - 2 ? delay : ctaDelay

    this.timeout = setTimeout(() => {
      this.renderNextChild()
    }, d)
    if (renderedIndex === React.Children.count(children)) {
      clearTimeout(this.timeout)
      this.setState({ rendering: false, renderedIndex: 0 })
    }
  }

  render() {
    const { children } = this.props
    const items = React.Children.map(children, (child, i) => (
      <div key={i} className="sequence--item">
        {child}
      </div>
    ))
    const { renderedIndex, rendering } = this.state
    const renderedChildren = rendering ? castArray(items).slice(0, renderedIndex) : children
    return <div className="sequence">{renderedChildren}</div>
  }
}
