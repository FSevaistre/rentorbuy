import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content } from '../../../index'
import './TemplateCard.scss'

export default class TemplateCard extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
  }

  state = {
    isHover: false
  }

  handleHover = isHover => this.setState({ isHover })

  render() {
    const { children, onClick } = this.props
    const cardProps = this.state.isHover && {
      variant: 'primary-1',
      zDepth: 2
    }
    return (
      <div className="template-card" onClick={onClick}>
        <Card format={['line', 'large-border']} variant="neutral-1-20" onHover={this.handleHover} {...cardProps}>
          <Content size="small">{children}</Content>
        </Card>
      </div>
    )
  }
}
