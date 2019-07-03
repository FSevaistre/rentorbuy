import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, HeaderBubbles, NumberField, RadioButtonGroup, SelectField } from '../../../index'
import './OfferAcceptedPage.scss'

const COMPONENT = (type, props) => {
  switch (type) {
    case 'select':
      return <SelectField format="form" {...props} />
    case 'radio':
      return <RadioButtonGroup format="inline" variant="primary-1" {...props} valueSelected={props.value} />
    case 'numberfield':
      return <NumberField format="form" {...props} />
    default:
      return 'Unhandled type'
  }
}

const MESSAGES = [
  "Vous avez trouvé votre bien et le vendeur a accepté votre offre d'achat ? Félicitations !",
  'Il est sûrement magnifique, décrivez-le moi :'
]
export default class OfferAcceptedPage extends Component {
  renderField = ({ path, type, title, props, component }) => {
    return (
      <div key={path} className="offer-accepted--field">
        <div className="offer-accepted--field--name">{title}</div>
        {component || COMPONENT(type, props)}
      </div>
    )
  }
  render() {
    const { components, onValidate, disabled, avatar } = this.props
    return (
      <div className="offer-accepted">
        <HeaderBubbles avatar={avatar} messages={MESSAGES} />
        <div className="offer-accepted--container">
          {components.map(field => {
            if (Array.isArray(field)) return field.map(f => this.renderField(f))
            else return this.renderField(field)
          })}
          <Button onClick={onValidate} disabled={disabled}>
            Valider
          </Button>
        </div>
      </div>
    )
  }
}

OfferAcceptedPage.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      props: PropTypes.object,
      component: PropTypes.element
    })
  ),
  onValidate: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  avatar: PropTypes.element
}
