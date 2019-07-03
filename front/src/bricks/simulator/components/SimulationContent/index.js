import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Heading, InformationCards, ResultCards, Text, Mobile, Desktop } from '../../../index'
import './SimulationContent.scss'

export default class SimulationContent extends PureComponent {
  static propTypes = {
    /** Hides arrow buttons on cards. */
    hideButtons: PropTypes.bool,
    /** Displayed message after on optimization have been done.*/
    optimizeMessage: PropTypes.string,
    /** Shown when more results are avilable. */
    isShowMoreActive: PropTypes.bool,
    /** Warning saying there are no better offer. */
    repurchaseHasAlert: PropTypes.bool,
    /** onClick action when the show more element is active */
    onShowMore: PropTypes.func,
    /** Props of <code>[InformationCards](/#!/InformationCards)</code> component. */
    informationCardsProps: PropTypes.object,
    /** Props of <code>[ResultCards](/#!/ResultCards)</code> component. */
    resultCardsProps: PropTypes.object
  }

  render() {
    const {
      hideButtons,
      isShowMoreActive,
      repurchaseHasAlert,
      onShowMore,
      optimizeMessage,
      informationCardsProps,
      resultCardsProps
    } = this.props
    return (
      <div className="simulation-content">
        <Mobile>
          <div className="simulation-content--information-cards">
            <InformationCards {...informationCardsProps} />
          </div>
        </Mobile>
        {optimizeMessage !== '' && (
          <div className="simulation-content--optimize-message">
            <Card variant="primary-1-l">
              <Content size="small">
                <Text variant="primary-1">{optimizeMessage}</Text>
              </Content>
            </Card>
          </div>
        )}
        {repurchaseHasAlert && (
          <div className="simulation-content--repurchase-alert">
            <Card variant="warning-l">
              <Content size="small">
                <Text variant="warning" size="small">
                  Bravo ! Il semble que vous avez déjà un bon taux, nous n{"'"}avons pas identifié d{"'"}offre vous
                  permettant de faire des économies sur votre crédit.
                </Text>
              </Content>
            </Card>
          </div>
        )}
        <Desktop>
          <div className="simulation-content--heading">
            <Heading size="small">Comparez les offres des banques</Heading>
          </div>
        </Desktop>
        <div className="simulation-content--result-cards">
          <ResultCards {...resultCardsProps} hideButtons={hideButtons} />
        </div>
        {isShowMoreActive && (
          <div className="simulation-content--show-more">
            <div onClick={onShowMore} className="simulation-content--show-more--action">
              <Text size="small">Afficher plus d{"'"}offres</Text>
            </div>
          </div>
        )}
        <div className="simulation-content--information">
          <Text size="x-small" variant="neutral-1-60">
            Offre non contractuelle : meilleures estimations Pretto sur la base des données déclaratives fournies, à
            confirmer par une étude complète des justificatifs.
          </Text>
        </div>
      </div>
    )
  }
}
