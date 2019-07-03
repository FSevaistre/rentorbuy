import React, { PureComponent } from 'react'
import { SubHeading } from '../../../index'
import './PrivacyContact.scss'

const CONTACT = [
  {
    title: 'Propriétaire et Responsable du traitement',
    address: 'Finspot SAS - 12 rue Anselme - 93400 Saint-Ouen'
  },
  {
    title: 'Courriel de contact du Propriétaire',
    address: (
      <a href="mailto:privacy@pretto.fr" target="blank">
        privacy@pretto.fr
      </a>
    )
  }
]
export default class PrivacyContact extends PureComponent {
  render() {
    return (
      <div className="privacy-contact">
        {CONTACT.map((contact, index) => {
          const { title, address } = contact
          return (
            <div key={index} className="privacy-contact--item">
              <div className="privacy-contact--item--title">
                <SubHeading>{title}</SubHeading>
              </div>
              <div className="privacy-contact--item--address">{address}</div>
            </div>
          )
        })}
      </div>
    )
  }
}
