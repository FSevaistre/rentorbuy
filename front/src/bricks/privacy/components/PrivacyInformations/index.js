import React, { PureComponent } from 'react'
import { PrivacyInformation } from '../../../index'

const REASONS = [
  {
    category: 'marketing',
    services: ['segment', 'gtm', 'adwords', 'facebook', 'bankin'],
    data: ['cookies', 'ip', 'nav']
  },
  {
    category: 'analysis',
    services: ['hotjar', 'mixpanel', 'analytics'],
    data: ['cookies', 'ip', 'nav', 'meta']
  },
  {
    category: 'hosting',
    services: ['heroku', 'algolia', 'zapier'],
    data: ['firstName', 'lastName', 'email', 'ip', 'nav', 'project', 'documents']
  },
  {
    category: 'clientRelation',
    services: ['pipedrive', 'intercom', 'aircall'],
    data: ['firstName', 'lastName', 'email', 'phone', 'meta']
  },
  {
    category: 'storage',
    services: ['box', 'hyperlex'],
    data: ['lastName', 'documents']
  },
  {
    category: 'auth',
    services: ['auth0'],
    data: ['cookies', 'email']
  }
]
export default class PrivacyInformations extends PureComponent {
  render() {
    return (
      <div className="privacy-informations">
        <div className="privacy-informations--disclaimer">
          <p>
            La mission de Pretto est de négocier pour vous le meilleur prêt immobilier. Dans ce cadre, vous allez être
            amené à nous communiquer des informations détaillées sur votre situation financière et votre projet. Ces
            informations nous permettent d{"'"}identifier la ou les banques les plus adaptées à votre projet et de
            présenter un dossier complet et de qualité afin d{"'"}obtenir un taux préférentiel. Nous ne vous demandons
            pas d{"'"}information qui n{"'"}est pas directement utile à cette mission.
          </p>
          <p>
            En parallèle des informations nécessaires à l{"'"}étude de votre financement, Pretto collecte des Données
            Personnelles pour les raisons suivantes :
          </p>
        </div>
        <div className="privacy-informations--reasons">
          {REASONS.map(reason => {
            return (
              <div key={reason.category} className="privacy-informations--reasons--item">
                <PrivacyInformation {...reason} />
              </div>
            )
          })}
        </div>
        <div className="privacy-informations--links">
          Vous pouvez consulter :{' '}
          <a href="https://www.pretto.fr/cgu/" target="blank">
            nos cgu
          </a>,{' '}
          <a href="https://www.pretto.fr/mentions-legales/" target="blank">
            nos mentions légales
          </a>,{' '}
          <a href="https://www.pretto.fr/privacy/" target="blank">
            notre politique de confidentialité
          </a>.
        </div>
      </div>
    )
  }
}
