import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavBar, Divider, Content, Card, Button, Icon } from '../../../index'
import './DialogTemplate.scss'

export default class DialogTemplate extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    navbarProps: PropTypes.object,
    buttonProps: PropTypes.object,
    actionCard: PropTypes.shape({
      onClick: PropTypes.func,
      content: PropTypes.node
    }),
    buttonType: PropTypes.oneOf(['button', 'card']),
    hideDivider: PropTypes.bool
  }
  static defaultProps = {
    buttonType: 'button'
  }
  render() {
    const { children, navbarProps, buttonProps, actionCard, buttonType, hideDivider } = this.props
    return (
      <div className="dialog-template">
        {navbarProps && (
          <div className="dialog-template--navbar">
            <NavBar {...navbarProps} />
            {!hideDivider && <Divider />}
          </div>
        )}
        <div className={`dialog-template--content ${buttonProps ? 'dialog-template--content--with-button' : ''}`}>
          {children}
        </div>
        {buttonType === 'button' && buttonProps && (
          <div
            className={classnames('dialog-template--button', {
              'dialog-template--button--inline': buttonProps.position !== 'sticky'
            })}
          >
            <Content>
              <Button {...buttonProps} />
            </Content>
          </div>
        )}
        {buttonType === 'card' && actionCard && (
          <div className="dialog-template__card" onClick={actionCard.onClick}>
            <Card variant="accent-1" zDepth={2}>
              <Content size="small">
                <div className="dialog-template__card__content">
                  {actionCard.content}
                  <div className="dialog-template__card__content__icon">
                    <Icon name="arrow-right" />
                  </div>
                </div>
              </Content>
            </Card>
          </div>
        )}
      </div>
    )
  }
}
