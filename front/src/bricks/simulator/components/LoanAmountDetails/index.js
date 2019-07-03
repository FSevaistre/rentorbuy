import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Content, ProjectRow } from '../../../index'
import './LoanAmountDetails.scss'

const kindToItem = kind => {
  switch (kind) {
    case 'capital':
      return { title: 'Capital restant dû' }
    case 'landPrice':
      return { title: 'Prix du terrain' }
    case 'buildPrice':
      return { title: 'Prix de la construction' }
    case 'worksPrice':
      return { title: 'Prix des travaux' }
    case 'furniturePrice':
      return {
        title: 'Prix des meubles',
        description: 'Le mobilier hors électroménager que vous achetez avec ce bien.'
      }
    case 'notaryFees':
      return {
        title: 'Frais de notaire',
        description: 'Nous calculons automatiquement les frais de notaire pour votre achat.'
      }
    case 'indemnity':
      return {
        title: 'Indemnités de remboursement anticipées',
        description: 'Ce sont les frais appliqués par votre banque actuelle.'
      }
    case 'guaranteeFees':
      return {
        title: 'Frais de garantie',
        description: "Cette garantie est obligatoire et est exigée par l'organisme prêteur."
      }
    default:
      return { title: 'Prix du bien' }
  }
}

const LoanAmountDetails = ({ property, ptz, bridgeValue }) => {
  const { data, contribution, kind } = property
  let amountValue = kind === 'purchase' ? -bridgeValue : 0
  let calculation = data.map((item, index) => {
    const { kind, value } = item
    amountValue += value
    return {
      ...kindToItem(kind),
      sign: index > 0 && '+',
      value
    }
  })
  const contributionElem = {
    title: 'Apport',
    description:
      'L’apport représente la somme que vous pouvez apporter pour cet achat. Nous recommandons 10% du prix du bien.',
    value: contribution,
    sign: '-'
  }
  const bridgeElem = bridgeValue > 0 && {
    title: 'Prêt relais',
    description:
      'Avance de trésorerie utilisée comme apport, remboursée à la vente de votre bien. Ce montant est calculé à partir de la valeur de votre bien actuel et du prêt qu’il vous reste à rembourser.',
    value: bridgeValue,
    sign: '-'
  }
  if (contribution) {
    amountValue -= contribution
    calculation.push(contributionElem)
  }
  const amountElem = {
    title: 'Montant emprunté',
    description: 'C’est le montant que vous devez emprunter à la banque pour financer votre projet.',
    value: amountValue,
    sign: '='
  }
  if (bridgeValue > 0 && kind === 'purchase') calculation.push(bridgeElem)

  const ptzElem = ptz.isEligible && {
    title: 'Dont prêt à taux zéro',
    description: (
      <span>
        Vous rembourserez ce montant sur {ptz.duration / 12} ans à partir de la {ptz.franchise / 12 + 1}
        <sup>e</sup> année de votre emprunt, ceci sans changer votre mensualité.
      </span>
    ),
    value: ptz.amount
  }
  calculation.push(amountElem)
  if (ptz.isEligible && kind === 'purchase') calculation.push(ptzElem)

  return (
    <div className="loan-amount-details">
      <Content>
        <div className="loan-amount-details--description">
          Le montant que vous empruntez pour ce projet est calculé de la façon suivante.
        </div>
        <Divider />
        <div className="loan-amount-details--calculation">
          {calculation.map(({ value, ...row }) => (
            <div key={row.title} className="loan-amount-details--calculation--row">
              <ProjectRow {...row} leftSpaced value={`${Number(value).toLocaleString('fr')} €`} />
            </div>
          ))}
        </div>
      </Content>
    </div>
  )
}

LoanAmountDetails.propTypes = {
  property: PropTypes.shape({
    data: PropTypes.array,
    contribution: PropTypes.number
  }),
  ptz: PropTypes.object,
  bridgeValue: PropTypes.number
}

LoanAmountDetails.defaultProps = {
  ptz: {},
  bridgeValue: 0
}

export default LoanAmountDetails
