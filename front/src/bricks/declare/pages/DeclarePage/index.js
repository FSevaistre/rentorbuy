import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../../index'
import * as S from './styles'

export default class DeclarePage extends Component {
  static propTypes = {
    /** Validate function. */
    onValidate: PropTypes.func.isRequired,
    /** on change funciton. */
    onChangeField: PropTypes.func.isRequired,
    /** Messages shown on top of page to describe content. */
    messages: PropTypes.string.isRequired,
    /** Essentially src of avatar in order to show picture of advisor. */
    avatarProps: PropTypes.object.isRequired,
    /** Fields needed to declare comortgagor. */
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        component: PropTypes.element.isRequired
      })
    ).isRequired,
    /** Whether validation button should be disabled or not. */
    isButtonDisabled: PropTypes.bool
  }

  render() {
    const { onValidate, messages, avatarProps, fields, isButtonDisabled } = this.props

    return (
      <B.Wrapper>
        <S.Messages>
          {messages.map((message, i) => (
            <S.Message key={i} isLast={i === messages.length - 1}>
              <B.BubbleChat avatarProps={avatarProps} hideAvatar={i > 0}>
                {message}
              </B.BubbleChat>
            </S.Message>
          ))}
        </S.Messages>

        <S.Content>
          <B.Form>
            <B.FormSection title="Votre coemprunteur">
              {fields.map(({ label, component }, index) => (
                <B.FormField key={index} label={label} labelId={label}>
                  {component}
                </B.FormField>
              ))}
            </B.FormSection>
          </B.Form>

          <S.ButtonWrapper>
            <B.Button onClick={onValidate} disabled={isButtonDisabled}>
              Valider
            </B.Button>
          </S.ButtonWrapper>
        </S.Content>
      </B.Wrapper>
    )
  }
}
