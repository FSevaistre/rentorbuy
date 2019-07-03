import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SubHeading } from '../../../index'
import './PrivacyInformation.scss'

const CATEGORY = {
  marketing: 'Marketing et partenariats',
  analysis: 'Amélioration de votre expérience',
  hosting: 'Infrastructure technique et hébergement',
  clientRelation: 'Relation client et suivi de dossier',
  storage: 'Stockage et traitement des pièces justificatives',
  auth: 'Inscription et authentification'
}
const DATA = {
  cookies: 'Cookies',
  ip: 'Adresse IP',
  nav: 'Données de navigation',
  meta: 'Metadonnées sur le projet (type de bien, utilisation)',
  lastName: 'Nom',
  firstName: 'Prénom',
  email: 'Email',
  phone: 'Numéro de tel',
  project: 'Détails du projet',
  documents: 'Pièces justificatives'
}
export default class PrivacyInformation extends PureComponent {
  static propTypes = {
    category: PropTypes.oneOf(Object.keys(CATEGORY)).isRequired,
    data: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(DATA))).isRequired
  }
  render() {
    const { category, data } = this.props
    return (
      <div className="privacy-information">
        <div className="privacy-information--category">
          <SubHeading>{CATEGORY[category]}</SubHeading>
        </div>
        <div className="privacy-information--data">
          Données collectées :{' '}
          {data.map((elem, index) => {
            return (
              <span key={elem}>
                {DATA[elem]}
                {index < data.length - 1 ? ', ' : '.'}
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}
