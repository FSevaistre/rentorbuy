import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Button, Emoji, TextField, Text } from '../../../index'
import './ConnectionCard.scss'

const ConnectionCard = memo(
  ({
    label,
    emoji,
    buttonText,
    onEmailChange,
    email,
    placeholder,
    onSubmit,
    onCorrect,
    errorText,
    disabled,
    information
  }) => (
    <div className="connection-card">
      <Card zDepth={2} variant="white">
        <Content>
          <div className="connection-card--form">
            <form onSubmit={onSubmit}>
              <div className="connection-card--input">
                <TextField
                  type="email"
                  label={label}
                  placeholder={placeholder}
                  icon="mail"
                  onChange={onEmailChange}
                  value={email}
                  onClickHint={onCorrect}
                  errorText={errorText}
                  autoFocus
                />
              </div>
              <div className="connection-card--button">
                <Button format="full" onClick={onSubmit} disabled={disabled} variant="accent-1">
                  {buttonText}
                </Button>
              </div>
            </form>
          </div>
        </Content>
        <Card variant="accent-1-l" noRadius={['top-left', 'top-right']}>
          <Content>
            <div className="connection-card--safety">
              <div className="connection-card--safety--emoji">
                <Emoji>{emoji}</Emoji>
              </div>
              <Text variant="accent-1-d" size="small">
                {information}
              </Text>
            </div>
          </Content>
        </Card>
      </Card>
    </div>
  )
)

ConnectionCard.displayName = 'ConnectionCard'

ConnectionCard.propTypes = {
  label: PropTypes.string,
  emoji: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func,
  email: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  onCorrect: PropTypes.func,
  errorText: PropTypes.node,
  disabled: PropTypes.bool,
  information: PropTypes.node
}

export default ConnectionCard
