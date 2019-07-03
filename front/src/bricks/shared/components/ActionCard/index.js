import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Content,
  Divider,
  Emoji,
  Row,
  Button,
  Text,
  Heading,
  SubHeading,
  Icon,
  Mobile,
  Desktop
} from '../../../index'
import './ActionCard.scss'

class ActionCard extends Component {
  render() {
    const {
      buttonLabel,
      children,
      title,
      optionNumber,
      childrenPosition,
      emoji,
      pushedContent,
      data,
      action,
      format,
      onClickInformation,
      isLoggedIn
    } = this.props

    const cardProps = {
      variant: 'white',
      format: 'full',
      zDepth: 2
    }

    const simpleFormat = (
      <Card {...cardProps}>
        <Content size="small" format="center">
          <SubHeading>{title}</SubHeading>
        </Content>
        <Content>
          <Text size="small">{children}</Text>
          <div className="action-card--button">
            <Button label={buttonLabel || 'Choisir'} onClick={action} format={['full', 'line']} variant="primary-1" />
          </div>
        </Content>
      </Card>
    )

    const heading = (
      <div className="action-card--pushed-content">
        {emoji && (
          <div className="action-card--pushed-content--emoji">
            <Emoji size="medium" verticalAlign="center">
              {emoji}
            </Emoji>
          </div>
        )}
        <div className="action-card--pushed-content--amount">{pushedContent}</div>
      </div>
    )
    return (
      <div
        className={`action-card${
          childrenPosition === 'top' && format !== 'simple' ? ' action-card--children-top' : ''
        } action-card--${format}`}
      >
        {format === 'simple' ? (
          simpleFormat
        ) : (
          <Card {...cardProps}>
            <Content variant="accent-1" size="x-small" format="center">
              {optionNumber && (
                <div className="action-card--option-number">
                  <SubHeading size="small" variant="white" format="card-title">
                    Option {optionNumber}
                  </SubHeading>
                </div>
              )}
              <div className="action-card--title">
                <SubHeading variant="white">{title}</SubHeading>
              </div>
            </Content>
            <Content>
              {childrenPosition === 'top' && format !== 'capacity' && (
                <div className="action-card--description">
                  <Text size="small">{children}</Text>
                </div>
              )}
              <div className="action-card--heading">
                {format === 'capacity' && <div>Vous pouvez acheter</div>}
                <Mobile>
                  <Heading size="large">{heading}</Heading>
                </Mobile>
                <Desktop>
                  <Heading>{heading}</Heading>
                </Desktop>
              </div>
              {onClickInformation && (
                <div
                  onClick={() => onClickInformation(this.props)}
                  className="action-card--pushed-content--icon--content"
                >
                  <Icon name="add" size="small" variant="primary-1" />
                  <div className="action-card--pushed-content--icon--content--text">
                    <Text variant="primary-1">Détails du projet</Text>
                  </div>
                </div>
              )}
              {format === 'default' && (
                <div className="action-card--divider">
                  <Divider />
                </div>
              )}
              {format === 'button-middle' && (
                <div className="action-card--button">
                  <Button onClick={action} format="full" variant="primary-1">
                    {buttonLabel || 'Choisir'}
                  </Button>
                </div>
              )}
              {childrenPosition === 'bottom' && format !== 'capacity' && (
                <div className="action-card--description">
                  <Text size="small">{children}</Text>
                </div>
              )}
              {format !== 'capacity' && (
                <div className="action-card--data">
                  {data.map(row => (
                    <div key={row.label} className="action-card--data--row">
                      <Row
                        label={
                          <Text size="small" variant="neutral-1-60">
                            {row.label}
                          </Text>
                        }
                        value={<SubHeading>{row.value}</SubHeading>}
                      />
                    </div>
                  ))}
                </div>
              )}
              {format === 'default' && (
                <div className="action-card--button">
                  <Button label={buttonLabel || 'Choisir'} onClick={action} format="full" variant="primary-1" />
                </div>
              )}
              {format === 'capacity' && (
                <div className="action-card--button">
                  <Button onClick={action} format="full" variant="accent-1">
                    {buttonLabel || `${isLoggedIn ? 'Choisir' : 'Créer'} ce projet`}
                  </Button>
                </div>
              )}
            </Content>
          </Card>
        )}
      </div>
    )
  }
}

ActionCard.propTypes = {
  buttonLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  childrenPosition: PropTypes.string,
  title: PropTypes.string.isRequired,
  optionNumber: PropTypes.number,
  emoji: PropTypes.string,
  pushedContent: PropTypes.string,
  data: PropTypes.array,
  action: PropTypes.func.isRequired,
  format: PropTypes.string,
  onClickInformation: PropTypes.func,
  isLoggedIn: PropTypes.bool
}

ActionCard.defaultProps = {
  childrenPosition: 'top',
  format: 'default'
}

export default ActionCard
