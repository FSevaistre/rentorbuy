import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Content, Emoji, SubHeading, Icon, ProgressMarked, Text, Placeholder } from '../../../index'
import './DashboardCard.scss'

export default class DashboardCard extends PureComponent {
  static propTypes = {
    /** Defines what emoji goes in front of the title. */
    emojiProps: PropTypes.object,
    /** Defines if the current card is active. Changes the style of the `Card` component */
    isActive: PropTypes.bool,
    /** Title of the card. */
    title: PropTypes.string.isRequired,
    /** Props of title. */
    titleProps: PropTypes.object,
    /** onClick function triggered when the pen icon is clicked. If not set, the icon wont display. */
    actionType: PropTypes.string,
    onClick: PropTypes.func,
    /** Props of <code>[Button](/#!/Button)</code> component. */
    buttonProps: PropTypes.object,
    /** Props of <code>[Icon](/#!/Icon)</code> component. */
    iconProps: PropTypes.object,
    /** Text that explains the current step. */
    content: PropTypes.string.isRequired,
    /** Wille be placed under the content. */
    children: PropTypes.node,
    /** Props of <code>[progressProps](/#!/progressProps)</code> component. */
    progressProps: PropTypes.object,
    /** Validation message of card. Error message will override this message. */
    message: PropTypes.string,
    /** Error message of card. If both error and message are filled, error will override the message. */
    error: PropTypes.string,
    isPlaceholder: PropTypes.bool
  }
  render() {
    const {
      emojiProps,
      iconProps,
      isActive,
      title,
      titleProps,
      onClick,
      buttonProps,
      actionType,
      content,
      children,
      progressProps,
      message,
      error,
      isPlaceholder
    } = this.props
    const cardProps = { variant: 'white' }
    if (isActive) Object.assign(cardProps, { zDepth: 2 })
    return (
      <div
        className={`dashboard-card${actionType ? ' dashboard-card--clickable' : ''}`}
        onClick={actionType && onClick}
      >
        <Card {...cardProps}>
          <Content>
            <div className="dashboard-card--title">
              {emojiProps && (
                <div className="dashboard-card--title__emoji">
                  <Emoji {...emojiProps} />
                </div>
              )}
              <SubHeading size="large" {...titleProps}>
                {title}
              </SubHeading>
            </div>
            {iconProps && (
              <div className="dashboard-card--icon">
                <Content>
                  <Icon variant="primary-1" {...iconProps} />
                </Content>
              </div>
            )}
            <div className="dashboard-card--content">
              <Text size="small">{content}</Text>
              {children && <div className="dashboard-card--content--children">{children}</div>}
            </div>
            {(progressProps || buttonProps) && (
              <div className="dashboard-card--details">
                {buttonProps && (
                  <div className="dashboard-card--details--button">
                    <Button variant="accent-1" {...buttonProps} />
                  </div>
                )}
                {progressProps && (
                  <div className="dashboard-card--details--progress">
                    {isPlaceholder ? (
                      <Placeholder className="dashboard-card--details--progress--placeholder" />
                    ) : (
                      <ProgressMarked {...progressProps} />
                    )}
                  </div>
                )}
              </div>
            )}
          </Content>
          {error ? (
            <Content variant="error-l">
              <Text size="small" variant="error">
                <strong>{error}</strong>
              </Text>
            </Content>
          ) : (
            message && (
              <Content variant="success-l">
                <Text size="small" variant="success">
                  <strong>{message}</strong>
                </Text>
              </Content>
            )
          )}
        </Card>
      </div>
    )
  }
}
