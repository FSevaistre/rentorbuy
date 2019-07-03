import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Desktop } from '../../..'
import {
  Emoji,
  Card,
  Content,
  Dialog,
  DialogTemplate,
  Heading,
  SponsorshipProgress,
  SponsorshipWinnings,
  SponsorshipInvite,
  SponsorshipShare,
  SponsorshipShareDialog,
  SponsorshipSponsored,
  SubHeading,
  Text,
  SponsorshipConditionsPage
} from '../../../index'
import './SponsorshipPage.scss'

const DIALOG_TITLE = {
  share: 'Partager votre lien',
  invite: 'Envoyer une invitation',
  conditions: 'Conditions générales'
}
export default class SponsorshipPage extends PureComponent {
  static propTypes = {
    bounty: PropTypes.number,
    error: PropTypes.bool,
    adding: PropTypes.bool,
    progress: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    emptyCards: PropTypes.number,
    formComponent: PropTypes.element.isRequired,
    sponsorshipShareDialogProps: PropTypes.object,
    isOpen: PropTypes.bool,
    onOpenShare: PropTypes.func,
    onOpenInvite: PropTypes.func,
    onOpenConditions: PropTypes.func,
    onClose: PropTypes.func,
    dialogContentType: PropTypes.oneOf(Object.keys(DIALOG_TITLE))
  }

  content = () => {
    const type = this.props.dialogContentType
    switch (type) {
      case 'share':
        return <SponsorshipShareDialog {...this.props.sponsorshipShareDialogProps} onClose={this.props.onClose} />
      case 'invite':
        return <Content>{this.props.formComponent}</Content>
      case 'conditions':
        return <SponsorshipConditionsPage />
      default:
        return null
    }
  }

  render() {
    const {
      bounty,
      error,
      progress,
      amount,
      data,
      emptyCards,
      sponsorshipShareDialogProps,
      adding,
      isOpen,
      onOpenShare,
      onOpenInvite,
      onOpenConditions,
      onClose,
      dialogContentType
    } = this.props
    return (
      <div className="sponsorship-page">
        <div className="sponsorship-page--header">
          <Content>
            <div className="sponsorship-page--header--wrapper">
              <Desktop>
                <Heading size="large">
                  <div className="sponsorship-page--header--title">
                    <div className="sponsorship-page--header--title--emoji">
                      <Emoji size="medium">:sunglasses:</Emoji>
                    </div>
                    Parrainez vos proches
                  </div>
                </Heading>
              </Desktop>
              <div className="sponsorship-page--header--description">
                Vos amis, collègues ou famille ont un projet immobilier ? Devenez ambassadeur Pretto en les parrainant.
                Chaque parrainage peut vous rapporter {bounty} €. Voir les{' '}
                <span onClick={onOpenConditions}>conditions générales</span>.
              </div>
              <div className="sponsorship-page--header--details">
                <div className="sponsorship-page--header--details--progress">
                  <SponsorshipProgress progress={progress} />
                </div>
                <div className="sponsorship-page--header--details--winnings">
                  <SponsorshipWinnings amount={amount} />
                </div>
              </div>
            </div>
          </Content>
        </div>
        <Content variant="white">
          <div className="sponsorship-page--actions">
            <div className="sponsorship-page--actions--invite" onClick={onOpenInvite}>
              <SponsorshipInvite />
            </div>
            <div className="sponsorship-page--actions--share">
              <SponsorshipShare onShare={onOpenShare} {...sponsorshipShareDialogProps} />
            </div>
          </div>
        </Content>
        <CSSTransition in={error} timeout={500} classNames="sponsorship-page--error--transition" unmountOnExit>
          <div className="sponsorship-page--error">
            <Card variant="error-l">
              <Content>
                <Text variant="error">Désolé cette personne a déjà un dossier chez Pretto.</Text>
              </Content>
            </Card>
          </div>
        </CSSTransition>
        <div className="sponsorship-page--sponsored">
          <div className="sponsorship-page--sponsored--title">
            <SubHeading size="large">Vos parrainages</SubHeading>
          </div>
          <div className="sponsorship-page--sponsored--cards">
            <SponsorshipSponsored cards={data} addCards={emptyCards} onAdd={onOpenInvite} adding={adding} />
          </div>
        </div>
        <Dialog isOpen={isOpen} onRequestClose={onClose}>
          <DialogTemplate
            navbarProps={{
              variant: 'white',
              iconLeft: 'cross',
              iconLeftAction: onClose,
              title: DIALOG_TITLE[dialogContentType]
            }}
          >
            {this.content()}
          </DialogTemplate>
        </Dialog>
      </div>
    )
  }
}
