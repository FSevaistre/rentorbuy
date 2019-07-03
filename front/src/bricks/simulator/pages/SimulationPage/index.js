import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogTemplate,
  DrawerVisible,
  LoanAmountDetails,
  ScoreDetails,
  SimulationActions,
  SimulationContent,
  SimulationSidebar,
  SimulationDetails,
  Tablet,
  DesktopOnly,
  Desktop
} from '../../../index'
import './SimulationPage.scss'

export default class SimulationPage extends PureComponent {
  static propTypes = {
    /** LoggedIn state of user. */
    isLoggedIn: PropTypes.bool,
    /** Dialog with <code>SimulationDetails</code> component. */
    isDialogOpen: PropTypes.bool,
    /** Dialog with <code>LoanAmountDetails</code> component. */
    isLoanAmountDetailsOpen: PropTypes.bool,
    /** Dialog with <code>ScoreDetails</code> component. */
    isScoreDetailsOpen: PropTypes.bool,
    /** onClick function closing <code>LoanAmountDetails</code> component. */
    onCloseLoanAmountDetails: PropTypes.func,
    /** onClick function closing <code>ScoreDetails</code> component. */
    onCloseScoreDetails: PropTypes.func,
    /** onClick function triggered when cross icon is clicked. */
    onClose: PropTypes.func,
    /** Validating the dialog simulaiton. */
    onValidate: PropTypes.func,
    /** Props of <code>[ScoreDetails](/#!/ScoreDetails)</code> component. */
    scoreDetailsProps: PropTypes.object,
    /** Props of <code>[LoanAmountDetails](/#!/LoanAmountDetails)</code> component. */
    loanAmountDetailsProps: PropTypes.object,
    /** Props of <code>[SimulationActions](/#!/SimulationActions)</code> component. */
    simulationActionsProps: PropTypes.object,
    /** Props of <code>[SimulationDetails](/#!/SimulationDetails)</code> component. */
    simulationDetailsProps: PropTypes.object,
    /** Props of <code>[SimulationContent](/#!/SimulationContent)</code> component. */
    simulationContentProps: PropTypes.object,
    /** Props of <code>[SimulationSidebar](/#!/SimulationSidebar)</code> component. */
    simulationSidebarProps: PropTypes.object,
    version: PropTypes.oneOf(['a', 'b'])
  }

  state = {
    isDrawerOpen: false
  }

  handleToggleDrawer = () => this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }))

  render() {
    const {
      isLoggedIn,
      isDialogOpen,
      isLoanAmountDetailsOpen,
      isScoreDetailsOpen,
      onCloseLoanAmountDetails,
      onCloseScoreDetails,
      onClose,
      onValidate,
      scoreDetailsProps,
      loanAmountDetailsProps,
      simulationActionsProps,
      simulationContentProps,
      simulationSidebarProps,
      simulationDetailsProps,
      version
    } = this.props
    const { isDrawerOpen } = this.state
    const navbarProps = {
      iconLeft: 'cross',
      variant: 'white'
    }
    return (
      <div className="simulation-page">
        <Desktop>
          <div className="simulation-page--actions">
            <SimulationActions {...simulationActionsProps} isSaveDisabled={isLoggedIn} />
          </div>
        </Desktop>
        <div className="simulation-page--container">
          <Tablet>
            <DrawerVisible
              variant={version === 'a' ? 'neutral-1-l' : 'white'}
              onClose={this.handleToggleDrawer}
              onOpen={this.handleToggleDrawer}
              isOpen={isDrawerOpen}
            >
              <SimulationSidebar {...simulationSidebarProps} />
            </DrawerVisible>
          </Tablet>
          <DesktopOnly>
            <div className={`simulation-page--sidebar simulation-page--sidebar__${version}`}>
              <SimulationSidebar {...simulationSidebarProps} version={version} />
            </div>
          </DesktopOnly>
          <div className={`simulation-page--content simulation-page--content__${version}`}>
            <SimulationContent {...simulationContentProps} hideButtons={isLoggedIn} />
          </div>
        </div>
        <Dialog isOpen={isDialogOpen}>
          <DialogTemplate
            navbarProps={{
              ...navbarProps,
              title: 'Modifier votre projet',
              iconLeftAction: onClose
            }}
            buttonProps={{ children: 'Simuler mon prêt', onClick: onValidate }}
            hideDivider
          >
            <SimulationDetails {...simulationDetailsProps} isSaveDisabled={isLoggedIn} />
          </DialogTemplate>
        </Dialog>
        <Dialog isOpen={isLoanAmountDetailsOpen} onRequestClose={onCloseLoanAmountDetails}>
          <DialogTemplate
            navbarProps={{ ...navbarProps, title: 'Montant emprunté', iconLeftAction: onCloseLoanAmountDetails }}
          >
            <LoanAmountDetails {...loanAmountDetailsProps} />
          </DialogTemplate>
        </Dialog>
        <Dialog isOpen={isScoreDetailsOpen} onRequestClose={onCloseScoreDetails}>
          <DialogTemplate
            navbarProps={{
              ...navbarProps,
              title: `Votre projet est ${scoreDetailsProps.label}`,
              iconLeftAction: onCloseScoreDetails
            }}
          >
            <ScoreDetails {...scoreDetailsProps} />
          </DialogTemplate>
        </Dialog>
      </div>
    )
  }
}
