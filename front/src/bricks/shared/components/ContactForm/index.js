import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '../../../index'
import './ContactForm.scss'

const LABELS = {
  subscribe: {
    name: 'Votre nom complet *',
    phone: 'Téléphone *',
    email: 'Email *',
    errorPhone: 'Votre n° de téléphone n’est pas valide',
    errorEmail: 'Votre adresse mail n’est pas valide',
    buttonProps: {
      format: 'full',
      variant: 'accent-1',
      size: 'large',
      label: 'Continuer',
      icon: 'arrow-right',
      iconPosition: 'right'
    }
  },
  sponsorship: {
    name: 'Nom complet',
    phone: 'Téléphone',
    email: 'Adresse mail',
    errorPhone: 'Le n° de téléphone n’est pas valide',
    errorEmail: 'L’adresse mail n’est pas valide',
    buttonProps: {
      label: "Envoyer l'invitation"
    }
  }
}
export default class ContactForm extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(Object.keys(LABELS)).isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
    errorPhone: PropTypes.bool,
    errorEmail: PropTypes.bool,
    formIsValid: PropTypes.bool,
    onChange: PropTypes.func,
    onBlurPhone: PropTypes.func,
    onBlurEmail: PropTypes.func,
    onSubmit: PropTypes.func,
    terms: PropTypes.element,
    onChangeHint: PropTypes.func
  }

  static defaultProps = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  }
  render() {
    const {
      type,
      firstName,
      lastName,
      phoneNumber,
      email,
      formIsValid,
      errorPhone,
      errorEmail,
      onChange,
      onSubmit,
      onBlurPhone,
      onBlurEmail,
      terms,
      onChangeHint
    } = this.props
    const errorTextPhone = errorPhone ? LABELS[type].errorPhone : ''
    const errorTextEmail = errorEmail ? LABELS[type].errorEmail : ''
    const variantPropsPhone = errorPhone ? { variant: 'error', iconVariant: 'error' } : { variant: 'primary-1' }
    const variantPropsEmail = errorEmail ? { variant: 'error', iconVariant: 'error' } : { variant: 'primary-1' }

    return (
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <fieldset className="contact-form--field">
            <label htmlFor="firstName">{LABELS[type].name}</label>
            <div className="contact-form--field--name">
              <div className="contact-form--field--name--first">
                <TextField
                  id="firstName"
                  value={firstName}
                  onChange={onChange('firstName')}
                  placeholder="Prénom"
                  required
                />
              </div>
              <div className="contact-form--field--name--last">
                <TextField id="lastName" value={lastName} onChange={onChange('lastName')} placeholder="Nom" required />
              </div>
            </div>
          </fieldset>

          <fieldset className="contact-form--field">
            <TextField
              id="phoneNumber"
              type="tel"
              label={LABELS[type].phone}
              icon="phone"
              value={phoneNumber}
              onChange={onChange('phoneNumber')}
              onBlur={onBlurPhone}
              placeholder="06 78 39 75 30"
              errorText={errorTextPhone}
              {...variantPropsPhone}
              required
            />
          </fieldset>

          <fieldset className="contact-form--field">
            <TextField
              id="email"
              type="email"
              label={LABELS[type].email}
              icon="mail"
              value={email}
              onChange={onChange('email')}
              onClickHint={onChangeHint}
              onBlur={onBlurEmail}
              placeholder="bruce.wayne@gmail.com"
              errorText={errorTextEmail}
              {...variantPropsEmail}
              required
            />
          </fieldset>

          <div className={`contact-form--button contact-form--button--${type}`}>
            <Button {...LABELS[type].buttonProps} type="submit" disabled={!formIsValid} />
          </div>
        </form>

        {terms && <div className="contact-form--cgu">{terms}</div>}
      </div>
    )
  }
}
