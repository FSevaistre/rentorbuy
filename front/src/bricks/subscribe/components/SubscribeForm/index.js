import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Content, Text, TextField } from '../../../index'
import './SubscribeForm.scss'

export default class SubscribeForm extends PureComponent {
  static propTypes = {
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
    hint: PropTypes.string,
    link: PropTypes.node,
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
      link,
      onChangeHint
    } = this.props
    const errorTextPhone = errorPhone ? "Votre n° de téléphone n'est pas valide" : ''
    const errorTextEmail = errorEmail ? "Votre adresse mail n'est pas valide" : ''
    const variantPropsPhone = errorPhone ? { variant: 'error', iconVariant: 'error' } : { variant: 'primary-1' }
    const variantPropsEmail = errorEmail ? { variant: 'error', iconVariant: 'error' } : { variant: 'primary-1' }
    return (
      <div className="subscribe-f">
        <Card variant="white" zDepth={2}>
          <Content>
            <form onSubmit={onSubmit}>
              <fieldset className="subscribe-f--field">
                <label htmlFor="firstName">Votre nom complet *</label>
                <div className="subscribe-f--field--name">
                  <div className="subscribe-f--field--name--first">
                    <TextField
                      id="firstName"
                      value={firstName}
                      onChange={onChange('firstName')}
                      placeholder="Prénom"
                      required
                    />
                  </div>
                  <div className="subscribe-f--field--name--last">
                    <TextField
                      id="lastName"
                      value={lastName}
                      onChange={onChange('lastName')}
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="subscribe-f--field">
                <TextField
                  id="phoneNumber"
                  type="tel"
                  label="Téléphone *"
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

              <fieldset className="subscribe-f--field">
                <TextField
                  id="email"
                  type="email"
                  label="Email *"
                  icon="mail"
                  onClickHint={onChangeHint}
                  value={email}
                  onChange={onChange('email')}
                  onBlur={onBlurEmail}
                  placeholder="bruce.wayne@gmail.com"
                  errorText={errorTextEmail}
                  {...variantPropsEmail}
                  required
                />
              </fieldset>

              <Button
                type="submit"
                format="full"
                variant="accent-1"
                size="large"
                disabled={!formIsValid}
                label="Continuer"
                icon="arrow-right"
                iconPosition="right"
              />
            </form>

            <div className="subscribe-f--cgu">
              <Text size="x-small">
                Pretto utilise vos données personnelles pour remplir sa mission : vous aider à obtenir le meilleur prêt
                immobilier. Ces informations sont confidentielles et ne seront jamais partagées sans votre accord. En
                continuant, vous acceptez nos{' '}
                <a className="" href="https://www.pretto.fr/cgu/" target="_blank" rel="noopener noreferrer">
                  CGU
                </a>{' '}
                et notre {link}.
              </Text>
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}
