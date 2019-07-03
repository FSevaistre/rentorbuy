import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, SubHeading, Icon, Desktop } from '../../../index'
import './CardField.scss'

export default class CardField extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.node,
    onModify: PropTypes.func,
    onDelete: PropTypes.func
  }

  render() {
    const { title, content, onModify, onDelete } = this.props
    return (
      <div className="card-field">
        <Card format="line" variant="neutral-1-20">
          <div className="card-field--title">
            <Content variant="neutral-1" size="x-small">
              <div className="card-field--title--content">
                <div className="card-field--title--content--title">
                  <SubHeading size="small">{title}</SubHeading>
                </div>
                <div className="card-field--title--content--actions">
                  {onModify && (
                    <div onClick={onModify} className="card-field--title--content--actions--modify">
                      <Desktop>Modifier</Desktop>
                      <div className="card-field--title--content--actions--modify--icon">
                        <Icon name="pen" />
                      </div>
                    </div>
                  )}
                  {onDelete && (
                    <div className="card-field--title--content--actions--delete" onClick={onDelete}>
                      <Icon name="cross" />
                    </div>
                  )}
                </div>
              </div>
            </Content>
          </div>
          <Content>
            <div className="card-field--content">{content}</div>
          </Content>
        </Card>
      </div>
    )
  }
}
