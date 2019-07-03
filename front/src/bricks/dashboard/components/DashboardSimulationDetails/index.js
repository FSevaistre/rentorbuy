import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Row, SubHeading, Text, Placeholder } from '../../../index'
import './DashboardSimulationDetails.scss'

const LABELS = {
  price: 'Prix du bien',
  notaryFees: 'Frais de notaire',
  contribution: 'Votre apport',
  loanAmount: 'Montant emprunté',
  payment: 'Mensualité estimée',
  duration: 'Durée',
  cost: 'Coût du crédit estimé (hors assurance)',
  repurchaseFees: 'Indemnités de remboursement anticipé',
  estimatedValue: 'Valeur estimée du bien',
  remainingPrincipal: 'Capital restant dû'
}

export default class DashboardSimulationDetails extends Component {
  static propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(Object.keys(LABELS)),
          value: PropTypes.number
        })
      )
    ),
    isPlaceholder: PropTypes.bool
  }
  render() {
    const { cards, isPlaceholder } = this.props
    const row = { type: 'price', value: 0 }
    const placeholderCards = [[row, row, row], [row, row, row, row]]
    return (
      <div className="dashboard-simulation-details">
        {(isPlaceholder ? placeholderCards : cards).map((rows, index) => {
          return (
            <div key={index} className="dashboard-simulation-details--card">
              <Card format="line" variant="neutral-1-30">
                <Content size="small">
                  {rows.map((row, i) => {
                    const { type, value } = row
                    return (
                      <div key={i} className="dashboard-simulation-details--row">
                        <Row
                          label={
                            <Text size="small" variant="neutral-1-60">
                              {isPlaceholder ? (
                                <div className="dashboard-simulation-details--row--placeholder--label">
                                  <Placeholder />
                                </div>
                              ) : (
                                LABELS[type]
                              )}
                            </Text>
                          }
                          value={
                            <SubHeading>
                              {isPlaceholder ? (
                                <div className="dashboard-simulation-details--row--placeholder--value">
                                  <Placeholder />
                                </div>
                              ) : (
                                `${(value || 0).toLocaleString('fr')} ${type === 'duration' ? 'ans' : '€'}`
                              )}
                            </SubHeading>
                          }
                        />
                      </div>
                    )
                  })}
                </Content>
              </Card>
            </div>
          )
        })}
      </div>
    )
  }
}
