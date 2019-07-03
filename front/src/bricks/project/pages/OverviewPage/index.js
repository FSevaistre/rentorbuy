import classnames from 'classnames'
import flatten from 'lodash/flatten'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import {
  Card,
  Content,
  CreditCapability,
  Divider,
  Desktop,
  Graph,
  Heading,
  Mobile,
  ProjectRow,
  SubHeading
} from '../../../index'

import './OverviewPage.scss'

const LOAN_TITLE_LABELS = {
  purchase: 'Votre prêt',
  renegotiation: 'Votre nouveau prêt'
}

const PROJECT_TITLE_LABELS = {
  purchase: 'Votre projet',
  renegotiation: 'Votre rachat'
}

export default class OverviewPage extends PureComponent {
  static propTypes = {
    creditCapabilityProps: PropTypes.object.isRequired,
    goodUsage: PropTypes.oneOf(['primary_residence', 'rental_investment', 'secondary_residence']).isRequired,
    graphProps: PropTypes.object.isRequired,
    loanValues: PropTypes.array.isRequired,
    projectKind: PropTypes.string.isRequired,
    projectValues: PropTypes.array.isRequired,
    isCompareActive: PropTypes.bool
  }

  state = { selectedValue: null }

  handleSelectValue = selectedValue => {
    this.setState({ selectedValue })
  }

  handleUnselectValue = () => {
    this.setState({ selectedValue: null })
  }

  render() {
    const {
      creditCapabilityProps,
      goodUsage,
      graphProps,
      loanValues,
      projectKind,
      projectValues,
      isCompareActive
    } = this.props
    const { selectedValue } = this.state

    return (
      <div className="overview-page">
        <div className="overview-page__wrapper">
          <Desktop>
            <div className="overview-page__wrapper__title">
              <Heading>{PROJECT_TITLE_LABELS[projectKind]}</Heading>
            </div>
          </Desktop>

          <div className="overview-page__container">
            <div className="overview-page__container__item overview-page__content">
              <div className="overview-page__content__card">
                <Card format="line">
                  <Content>
                    <div>
                      Voici la répartition des montants de votre projet ainsi que le calcul de ce que vous empruntez à
                      la banque.
                    </div>

                    <div className="overview-page__content__divider">
                      <Divider />
                    </div>

                    <div>
                      {projectValues.map((group, index) => (
                        <div className="overview-page__content__group" key={index}>
                          {group.map(({ path, variant, ...props }, index) => (
                            <div className="overview-page__content__row" key={index}>
                              <span
                                className={classnames(
                                  'overview-page__content__row__highlight',
                                  variant &&
                                    `overview-page__content__row__highlight--${variant.replace(
                                      /^([\w]+-[\d]).*/,
                                      '$1-l'
                                    )}`,
                                  {
                                    'overview-page__content__row__highlight--highlighted':
                                      selectedValue !== null && selectedValue.paths.includes(path)
                                  }
                                )}
                              />

                              <ProjectRow
                                {...props}
                                leftSpaced
                                rightSpaced={flatten(projectValues).some(value => !!value.onAction)}
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="overview-page__content__divider">
                      <Divider />
                    </div>

                    <div>
                      <Graph
                        {...graphProps}
                        onSelectValue={this.handleSelectValue}
                        onUnselectValue={this.handleUnselectValue}
                        selectedValue={selectedValue}
                      />
                    </div>
                  </Content>
                </Card>
              </div>

              <Mobile>
                <div className="overview-page__content__card">
                  <CreditCapability {...creditCapabilityProps} />
                </div>
              </Mobile>

              {loanValues.length > 0 && (
                <div className="overview-page__content__card">
                  <Card format="line">
                    <Content>
                      <div className="overview-page__content__card__title">
                        <SubHeading size="large">{LOAN_TITLE_LABELS[projectKind]}</SubHeading>
                      </div>

                      <div>
                        {loanValues.map((props, index) => (
                          <div className="overview-page__content__row" key={index}>
                            <ProjectRow {...props} rightSpaced />
                          </div>
                        ))}
                      </div>
                    </Content>
                  </Card>
                </div>
              )}

              {goodUsage !== 'rental_investment' && (
                <div className="overview-page__content__card">
                  <Card format="line">
                    <Content>
                      <div className="overview-page__content__card__title">
                        <SubHeading size="large">Conditions</SubHeading>
                      </div>

                      <div>
                        Vous devrez domicilier vos revenus dans la banque qui vous accordera le financement pour votre
                        projet.
                      </div>
                    </Content>
                  </Card>
                </div>
              )}
            </div>

            {isCompareActive && (
              <Desktop>
                <div className="overview-page__container__item overview-page__sidebar">
                  <CreditCapability {...creditCapabilityProps} />
                </div>
              </Desktop>
            )}
          </div>
        </div>
      </div>
    )
  }
}
