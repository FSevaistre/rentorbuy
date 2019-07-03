import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Button, Card, Content, Heading, Text, Row, Icon, Divider, Mobile, Desktop } from '../../../../index'
import './ResultCardA.scss'

const ResultCardA = ({
  isMobile,
  isButtonActive,
  isFirst,
  isOpen,
  onToggleDetails,
  onArrowClick,
  cardData: {
    projectKind,
    rate,
    bankKind,
    payment,
    totalCost,
    interests,
    guaranty,
    applicationFees,
    transferability,
    prepaymentCharge,
    modularity,
    remainingInterests,
    repurchaseFees,
    savings
  }
}) => {
  const cardProps = isFirst
    ? { format: ['line', 'large-border'], variant: 'accent-1', zDepth: 2 }
    : isMobile
    ? { format: 'default', variant: 'white' }
    : { format: 'line', variant: 'neutral-1-20' }
  const buttonProps = isFirst ? { variant: 'accent-1', format: 'circle' } : { format: ['line', 'circle'] }
  const costDetails =
    projectKind === 'purchase'
      ? {
          title: 'Coût du crédit',
          value: totalCost
        }
      : {
          title: 'Économies réalisées',
          value: savings
        }
  const costBreakdown =
    projectKind === 'purchase'
      ? [
          { title: 'Coût des intérêts', value: interests },
          { title: 'Coût de la garantie', value: guaranty },
          { title: 'Frais de dossier bancaires', value: applicationFees }
        ]
      : [
          { title: 'Économies sur les intérêts', value: remainingInterests - interests },
          { title: 'Pénalités de remboursement', value: repurchaseFees },
          { title: 'Coût de la garantie', value: guaranty },
          { title: 'Frais de dossier bancaires', value: applicationFees }
        ]
  let bankKindString = ''
  switch (bankKind) {
    case 'specialiste':
      bankKindString = 'spécialiste'
      break
    case 'regionale':
      bankKindString = 'régionale'
      break
    default:
      bankKindString = bankKind
  }

  const isPositive = costDetails.value >= 0

  return (
    <div className="simulator--result-card-a">
      <Card {...cardProps}>
        <Content>
          <div className="simulator--result-card-a--content">
            <div className="simulator--result-card-a--content--rate">
              <div className="simulator--result-card-a--content--rate--title">
                <Heading {...isFirst && { size: 'large' }}>{rate.toFixed(2).replace('.', ',')} %</Heading>
              </div>
              <div>
                <Text size="x-small">hors assurance</Text>
              </div>
              <div>
                <Text size="x-small">
                  <strong>Banque {bankKindString}</strong>
                </Text>
              </div>
              {projectKind === 'renegotiation' && (
                <div className="simulator--result-card-a--content--rate--savings">
                  <Text variant={isPositive ? 'accent-1' : 'neutral-1'}>
                    <strong>{`${Math.round(Math.abs(costDetails.value)).toLocaleString('fr')} €`}</strong>
                  </Text>
                  <Text size="x-small">
                    {isPositive
                      ? " d'économies réalisées par rapport à votre prêt actuel."
                      : ' de surcoût par rapport à votre prêt actuel.'}
                  </Text>
                </div>
              )}
            </div>

            <div className={`simulator--result-card-a--content--infos${!isButtonActive ? ' button--hidden' : ''}`}>
              <Row
                label={
                  <Text size="small" variant="neutral-1-40">
                    Mensualités
                  </Text>
                }
                value={<Text size="small">{`${Math.round(payment).toLocaleString('fr')} € / mois`}</Text>}
              />
              {projectKind === 'purchase' && (
                <Row
                  label={
                    <Text size="small" variant="neutral-1-40">
                      {costDetails.title}
                    </Text>
                  }
                  value={<Text size="small">{`${Math.round(costDetails.value).toLocaleString('fr')} €`}</Text>}
                />
              )}
              <div className="simulator--result-card-a--content--infos--see-offer" onClick={onToggleDetails}>
                <Text size="small" variant="primary-1">
                  <span className="simulator--result-card-a--content--infos--see-offer--action">
                    <span className="simulator--result-card-a--content--infos--see-offer--action--label">
                      {isOpen ? 'Masquer' : 'Voir'} l{"'"}
                      offre
                    </span>
                    <span
                      className={`simulator--result-card-a--content--infos--see-offer--action--icon ${isOpen &&
                        'simulator--result-card-a--content--infos--see-offer--action--icon--opened'}`}
                    >
                      <Icon name="arrow-full-bottom" />
                    </span>
                  </span>
                </Text>
              </div>
            </div>

            {isButtonActive && (
              <div className="simulator--result-card-a--content--action" onClick={onArrowClick}>
                <Button icon="arrow-right" size="small" {...buttonProps} />
              </div>
            )}
          </div>

          <CSSTransition in={isOpen} timeout={500} classNames="simulator--result-card-a--transition" unmountOnExit>
            <div className="simulator--result-card-a--details">
              <div className="simulator--result-card-a--details--wrapper">
                <Divider />
                <div className="simulator--result-card-a--details--content">
                  <div className="simulator--result-card-a--details--content--costs">
                    {costBreakdown.map(({ title, value }, i) => (
                      <Row
                        key={i}
                        label={
                          <Text size="small" variant="neutral-1-40">
                            {title}
                          </Text>
                        }
                        value={<Text size="small">{`${Math.round(value).toLocaleString('fr')} €`}</Text>}
                      />
                    ))}
                  </div>
                  <div className="simulator--result-card-a--details--content--extras">
                    <Row
                      label={
                        <Text size="small" variant="neutral-1-40">
                          Transférabilité du prêt
                        </Text>
                      }
                      value={
                        <Text size="small" {...transferability && { variant: 'success' }}>
                          {transferability ? 'OUI' : 'NON'}
                        </Text>
                      }
                    />
                    <Row
                      label={
                        <Text size="small" variant="neutral-1-40">
                          Modularité / report du prêt
                        </Text>
                      }
                      value={
                        <Text size="small" {...modularity && { variant: 'success' }}>
                          {modularity ? 'OUI' : 'NON'}
                        </Text>
                      }
                    />
                    <Row
                      label={
                        <Text size="small" variant="neutral-1-40">
                          Exonération d{"'"}
                          IRA
                        </Text>
                      }
                      value={
                        <Text size="small" {...!prepaymentCharge && { variant: 'success' }}>
                          {prepaymentCharge ? 'NON' : 'OUI'}
                        </Text>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </Content>
      </Card>
    </div>
  )
}

ResultCardA.propTypes = {
  isButtonActive: PropTypes.bool,
  isFirst: PropTypes.bool,
  isOpen: PropTypes.bool,
  onArrowClick: PropTypes.func,
  onToggleDetails: PropTypes.func,
  cardData: PropTypes.shape({
    projectKind: PropTypes.string,
    rate: PropTypes.number,
    bankKind: PropTypes.string,
    payment: PropTypes.number,
    totalCost: PropTypes.number,
    interests: PropTypes.number,
    guaranty: PropTypes.number,
    applicationFees: PropTypes.number,
    transferability: PropTypes.bool,
    modularity: PropTypes.bool,
    prepaymentCharge: PropTypes.bool
  })
}

ResultCardA.defaultProps = {
  isButtonActive: true
}

const ResultCard = props => (
  <Fragment>
    <Mobile>
      <ResultCardA {...props} isMobile />
    </Mobile>
    <Desktop>
      <ResultCardA {...props} />
    </Desktop>
  </Fragment>
)

export default ResultCard
