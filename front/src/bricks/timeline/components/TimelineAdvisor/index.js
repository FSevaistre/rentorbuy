import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Divider, Icon, Dialog, Mobile, Desktop } from '../../../index'
import './TimelineAdvisor.scss'

export default class TimelineAdvisor extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onChat: PropTypes.func,
    onCall: PropTypes.func,
    avatar: PropTypes.element,
    card: PropTypes.element,
    link: PropTypes.element
  }

  render() {
    const { name, email, onOpen, isOpen, onClose, onChat, onCall, avatar, card, link } = this.props
    return (
      <div className="timeline-advisor">
        <Divider />
        <div className="timeline-advisor--wrapper">
          <div className="timeline-advisor--picture">{avatar}</div>
          <Desktop>
            <div className="timeline-advisor--infos">
              <div className="timeline-advisor--infos--title">Votre conseiller</div>
              <div className="timeline-advisor--infos--name">{name}</div>
            </div>
          </Desktop>
          <div className="timeline-advisor--actions">
            <Mobile>
              <div className="timeline-advisor--actions--icon" onClick={onCall}>
                <Icon name="phone" variant="neutral-1-40" />
              </div>
            </Mobile>
            <Desktop>
              <div className="timeline-advisor--actions--icon" onClick={onOpen}>
                <Icon name="phone" variant="neutral-1-40" />
              </div>
            </Desktop>
            <div className="timeline-advisor--actions--icon">
              <a href={`mailto:${email}`} target="blank">
                <Icon name="mail" variant="neutral-1-40" />
              </a>
            </div>
            <div className="timeline-advisor--actions--icon" onClick={onChat}>
              <Icon name="chat" variant="neutral-1-40" />
            </div>
            <div className="timeline-advisor--actions--icon">{link}</div>
          </div>
        </div>
        <Dialog isOpen={isOpen} onRequestClose={onClose} className="advisor-avatar-dialog">
          {card}
        </Dialog>
      </div>
    )
  }
}
