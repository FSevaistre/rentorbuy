import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { SubHeading } from '../../../index'
import './InformationSection.scss'

export default class InformationSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const { title, subtitle, fields } = this.props
    return (
      <div className="information-section">
        <div className="information-section--title">
          <SubHeading size="large">{title}</SubHeading>
        </div>
        {subtitle && <div className="information-section--subtitle">{subtitle}</div>}
        <div className="information-section--fields">
          <TransitionGroup key={title}>
            {fields.map(field => (
              <CSSTransition key={field.name} timeout={500} classNames="form-section--transition">
                <div className="information-section--field">{field.component}</div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}
