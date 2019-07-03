import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  ActionCards,
  BudgetDetails,
  CapacityActions,
  CapacityBudget,
  Card,
  Content,
  Dialog,
  DialogTemplate,
  EditCards,
  Emoji,
  Spinner,
  SpinnerContent,
  SubMenu,
  SubHeading,
  Mobile,
  Desktop
} from '../../../index'
import './CapacityPage.scss'

export default class CapacityPage extends PureComponent {
  static propTypes = {
    editCardsProps: PropTypes.object,
    actionCardsProps: PropTypes.object,
    capacityBudgetProps: PropTypes.object,
    capacityActionsProps: PropTypes.object,
    budgetDetailsProps: PropTypes.object,
    subMenuProps: PropTypes.object,
    isOpen: PropTypes.bool,
    isDetailsOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onCloseDetails: PropTypes.func,
    isLoading: PropTypes.bool,
    onSubscribe: PropTypes.func,
    version: PropTypes.oneOf(['a', 'b'])
  }

  render() {
    const {
      isOpen,
      isDetailsOpen,
      onCloseDetails,
      onClose,
      editCardsProps,
      actionCardsProps,
      capacityBudgetProps,
      capacityActionsProps,
      subMenuProps,
      budgetDetailsProps,
      isLoading,
      onSubscribe,
      version
    } = this.props
    const { length } = actionCardsProps.data
    const description =
      length > 1
        ? `Voici une estimation de votre budget pour ${length} durées d’emprunt classiques.`
        : "Voici une estimation de votre budget sur la seule durée d'emprunt qui semble accessible."
    const descriptionB =
      length > 1
        ? `Nous vous proposons des estimations du prix de votre bien sur ${length} durées d’emprunt.`
        : 'Nous vous proposons des estimations du prix de votre bien sur la seule durée d’emprunt qui semble accessible.'
    return (
      <div className="capacity-page">
        <div className={`capacity-page--edit-cards capacity-page--edit-cards--${version}`}>
          <Desktop>
            <SubMenu {...subMenuProps} />
          </Desktop>
          <div className="capacity-page--wrapper">
            <Content>
              <Mobile>
                <EditCards {...editCardsProps} />
              </Mobile>
              <Desktop>
                <CapacityBudget {...capacityBudgetProps} />
              </Desktop>
            </Content>
          </div>
        </div>
        <div className="capacity-page--content">
          {isLoading ? (
            <div className="capacity-page--spinner">
              <Spinner overlay>
                <SpinnerContent slug="capacity" />
              </Spinner>
            </div>
          ) : (
            <div className="capacity-page--wrapper">
              {length > 0 ? (
                version === 'a' ? (
                  <Fragment>
                    <div className="capacity-page--cta">
                      <div className="capacity-page--cta--button">
                        <div>
                          Comparez les taux en choisissant votre budget
                          <span className="capacity-page--cta--button--emoji">
                            <Emoji>:point_down:</Emoji>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="capacity-page--content--description">
                      <Content>
                        <div className="capacity-page--content--description--wrapper">
                          <div>{description}</div>
                        </div>
                      </Content>
                    </div>
                    <div className="capacity-page--content--action-cards">
                      <ActionCards {...actionCardsProps} />
                    </div>
                  </Fragment>
                ) : (
                  <div className="capacity-page--cta--b">
                    <div className="capacity-page--cta--b--title">
                      <SubHeading size="large">Choisissez votre projet</SubHeading>
                    </div>
                    <div className="capacity-page--cta--b--description">{descriptionB}</div>
                    <ActionCards {...actionCardsProps} />
                  </div>
                )
              ) : (
                <div className="capacity-page__error">
                  <div className="capacity-page__error__title">
                    <div className="capacity-page__error__emoji">
                      <Emoji size="medium">:open_mouth:</Emoji>
                    </div>

                    <SubHeading size="large">Oups !</SubHeading>
                  </div>

                  <div className="capacity-page__error__description">
                    Nous ne pouvons pas vous proposer de budget pour cette mensualité.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <Mobile>
          <Dialog isOpen={isOpen} onRequestClose={onClose}>
            <DialogTemplate
              navbarProps={{
                title: 'Modifier votre projet',
                iconLeft: 'cross',
                iconLeftAction: onClose,
                variant: 'white'
              }}
              buttonProps={{ children: 'Voir mon budget', onClick: onClose }}
              hideDivider
            >
              <CapacityBudget {...capacityBudgetProps} />
              <div className="capacity-page--actions">
                <Card format={['line', 'small-radius']} variant="neutral-1-20">
                  <Content size="small">
                    <CapacityActions {...capacityActionsProps} />
                  </Content>
                </Card>
              </div>
            </DialogTemplate>
          </Dialog>
        </Mobile>
        <Dialog isOpen={isDetailsOpen} onRequestClose={onCloseDetails}>
          <DialogTemplate
            buttonType="card"
            actionCard={{
              onClick: onSubscribe,
              content: 'Créez votre projet pour profiter des meilleurs outils, gratuitement.'
            }}
            navbarProps={{
              title: 'Votre projet',
              iconLeft: 'cross',
              iconLeftAction: onCloseDetails,
              variant: 'white'
            }}
          >
            <BudgetDetails {...budgetDetailsProps} />
          </DialogTemplate>
        </Dialog>
      </div>
    )
  }
}
