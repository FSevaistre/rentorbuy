import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Divider, Icon, SubHeading, Text, Row } from '../../../index'
import './Operation.scss'
const INTRODUCTION_SENTENCES = {
  budget: 'Nous calculons le budget maximum pour votre projet de la façon suivante'
}
const OPTIONS = {
  budget: {
    label: 'Budget estimé',
    operator: 'plus'
  },
  price: {
    label: 'Prix du bien',
    operator: 'plus'
  },
  capital: {
    label: 'Capital restant dû',
    operator: 'plus'
  },
  landCost: {
    label: 'Prix du terrain',
    operator: 'plus'
  },
  landPrice: {
    label: 'Prix du terrain',
    operator: 'plus'
  },
  buildCost: {
    label: 'Prix de la construction',
    operator: 'plus'
  },
  buildPrice: {
    label: 'Prix de la construction',
    operator: 'plus'
  },
  worksCost: {
    label: 'Prix des travaux',
    operator: 'plus'
  },
  worksPrice: {
    label: 'Prix des travaux',
    operator: 'plus'
  },
  notaryFees: {
    label: 'Frais de notaire',
    operator: 'plus',
    description: 'Nous calculons automatiquement les frais de notaire pour votre achat.'
  },
  applicationFees: {
    label: 'Frais de dossier',
    operator: 'plus',
    description: 'Frais de dossier'
  },
  indemnity: {
    label: 'Indemnités de remboursement anticipées',
    description: 'Ce sont les frais appliqués par votre banque actuelle.'
  },
  guaranteeFees: {
    label: 'Frais de garantie',
    operator: 'plus',
    description: "Cette garantie est obligatoire et est exigée par l'organisme prêteur."
  },
  contribution: {
    label: 'Apport',
    operator: 'minus',
    description:
      'L’apport représente la somme que vous pouvez apporter pour cet achat. Nous recommandons 10% du prix du bien.'
  },
  bridge: {
    label: 'Prêt relais',
    operator: 'minus',
    description:
      'Avance de trésorerie utilisée comme apport, remboursée à la vente de votre bien. Ce montant est calculé à partir de la valeur de votre bien actuel et du prêt qu’il vous reste à rembourser.'
  },
  amount: {
    label: 'Montant emprunté',
    operator: 'equal',
    description: 'C’est le montant que vous devez emprunter à la banque pour financer votre projet.'
  }
}

const EXTRA_OPTIONS = ({ ptz }) => {
  return {
    ptz: {
      label: 'Dont prêt à taux zéro',
      description: ptz && (
        <span>
          Vous rembourserez ce montant sur {ptz.duration / 12} ans à partir de la {ptz.franchise / 12 + 1}
          <sup>e</sup> année de votre emprunt, ceci sans changer votre mensualité.
        </span>
      )
    }
  }
}

export default class Operation extends PureComponent {
  static propTypes = {
    introduction: PropTypes.node,
    operations: PropTypes.array
  }
  render() {
    const { introduction, operations } = this.props
    let total = 0
    const ope = operations.filter(o => OPTIONS[o.slug])
    ope.forEach(o => {
      const { slug, amount } = o
      const { operator } = OPTIONS[slug]
      if (operator === 'plus') total += amount
      if (operator === 'minus') total -= amount
      Object.assign(o, OPTIONS[slug])
    })
    ope.push({ slug: 'amount', amount: total, ...OPTIONS.amount })
    const extraOpe = operations.filter(o => !!EXTRA_OPTIONS(o)[o.slug])
    extraOpe.forEach(o => Object.assign(o, EXTRA_OPTIONS(o)[o.slug]))
    const sortedOperations = [...ope, ...extraOpe]
    return (
      <div className="operation">
        <div className="operation--introduction">{INTRODUCTION_SENTENCES[introduction]}</div>
        <Divider />
        <div className="operation--calculation">
          {sortedOperations.map((o, i) => {
            const { slug, amount, label, operator, description } = o
            const iconProps = operator && {
              name: `operation-${operator}`
            }
            if (operator === 'equal') iconProps.variant = 'primary-1'
            return (
              <div key={slug} className="operation--calculation--row">
                {operator === 'equal' && (
                  <div className="operation--calculation--divider">
                    <Divider />
                  </div>
                )}
                <Row
                  label={
                    <div className="operation--calculation--row--content">
                      {operator && i > 0 && (
                        <div className="operation--calculation--row--content--icon">
                          <Icon {...iconProps} />
                        </div>
                      )}
                      <Text>{label}</Text>
                      {description && (
                        <div>
                          <Text size="small" variant="neutral-1-60">
                            {description}
                          </Text>
                        </div>
                      )}
                    </div>
                  }
                  value={<SubHeading>{amount.toLocaleString('fr')} €</SubHeading>}
                  format="align-top"
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
