import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Button, Card, Content, Heading, Text, Row, Icon, Divider, Mobile, Desktop } from '../../../../index'
import './ResultCardB.scss'

const ResultCardB = ({
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
  const cardProps = isFirst && { zDepth: 2 }
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
      ? [{ title: 'Coût des intérêts', value: interests }, { title: 'Coût de la garantie', value: guaranty }]
      : [
          { title: 'Économies sur les intérêts', value: remainingInterests - interests },
          { title: 'Pénalités de remboursement', value: repurchaseFees },
          { title: 'Coût de la garantie', value: guaranty }
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
    <div className="simulator--result-card-b">
      <Card variant="white" {...cardProps}>
        <Content>
          <div className="simulator--result-card-b--content">
            <div className="simulator--result-card-b--content--rate">
              <div className="simulator--result-card-b--content--rate--title">
                <Heading size="large" {...isFirst && { variant: 'accent-1' }}>
                  {rate.toFixed(2).replace('.', ',')}%
                </Heading>
              </div>
              {projectKind === 'renegotiation' && (
                <div className="simulator--result-card-b--content--rate--savings">
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

            <div className="simulator--result-card-b--content--insurance">
              <Text size="x-small">
                Taux négocié par <strong>Pretto</strong>, hors assurance
              </Text>
            </div>

            {isButtonActive && (
              <div className="simulator--result-card-b--content--action" onClick={onArrowClick}>
                <Button icon="arrow-right" size="small" {...buttonProps} />
              </div>
            )}
          </div>

          <div className="simulator--result-card-b--tags">
            {isFirst && (
              <div className="simulator--result-card-b--tags--tag">
                <Card
                  format={['small-radius', isFirst ? 'default' : 'line']}
                  variant={isFirst ? 'accent-1' : 'neutral-1-20'}
                >
                  <div className="simulator--result-card-b--tags--tag--content">
                    <Text size={isMobile ? 'x-small' : 'small'}>Meilleure offre négociée</Text>
                  </div>
                </Card>
              </div>
            )}
            <div className="simulator--result-card-b--tags--tag">
              <Card format={['small-radius', 'line']} variant="neutral-1-20">
                <div className="simulator--result-card-b--tags--tag--content">
                  <Text size={isMobile ? 'x-small' : 'small'}>Banque {bankKindString}</Text>
                </div>
              </Card>
            </div>
          </div>

          <CSSTransition in={isOpen} timeout={500} classNames="simulator--result-card-b--transition" unmountOnExit>
            <div className="simulator--result-card-b--details">
              <div className="simulator--result-card-b--details--wrapper">
                <Divider />
                <div className="simulator--result-card-b--details--content">
                  <div className="simulator--result-card-b--details--content--costs">
                    <Row
                      label={
                        <Text size="small" variant="neutral-1-40">
                          Mensualités
                        </Text>
                      }
                      value={<Text size="small">{Math.round(payment).toLocaleString('fr')} €</Text>}
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
                  <div className="simulator--result-card-b--details--content--extras">
                    <Row
                      label={
                        <Text size="small" variant="neutral-1-40">
                          Frais de dossier bancaires
                        </Text>
                      }
                      value={<Text size="small">{applicationFees} €</Text>}
                    />
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

          <div className="simulator--result-card-b--see-offer" onClick={onToggleDetails}>
            <Text size="small" variant="primary-1">
              <span className="simulator--result-card-b--see-offer--action">
                <span className="simulator--result-card-b--see-offer--action--label">
                  {isOpen ? 'Masquer les détails' : "Détails de l'offre"}
                </span>
                <span
                  className={`simulator--result-card-b--see-offer--action--icon ${isOpen &&
                    'simulator--result-card-b--see-offer--action--icon--opened'}`}
                >
                  <Icon name="arrow-full-bottom" />
                </span>
              </span>
            </Text>
          </div>
        </Content>
      </Card>
    </div>
  )
}

ResultCardB.propTypes = {
  isMobile: PropTypes.bool,
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

ResultCardB.defaultProps = {
  isButtonActive: true
}

const ResultCard = props => (
  <Fragment>
    <Mobile>
      <ResultCardB {...props} isMobile />
    </Mobile>
    <Desktop>
      <ResultCardB {...props} />
    </Desktop>
  </Fragment>
)

export default ResultCard
