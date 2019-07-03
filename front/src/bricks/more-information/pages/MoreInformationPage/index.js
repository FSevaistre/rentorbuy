import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Content, Divider, Icon, InformationSection, Progress, HeaderBubbles, Desktop } from '../../../index'
import './MoreInformationPage.scss'

export default class MoreInformationPage extends Component {
  static propTypes = {
    messages: PropTypes.any,
    avatar: PropTypes.element,
    sections: PropTypes.arrayOf(PropTypes.object).isRequired,
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    isButtonDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    progressProps: PropTypes.object,
    dialogContent: PropTypes.node
  }

  render() {
    const {
      messages,
      avatar,
      sections,
      onNext,
      onPrevious,
      isButtonDisabled,
      progressProps,
      dialogContent
    } = this.props
    return (
      <div className="more-information">
        <Content>
          {messages && (
            <div className="more-information--messages">
              <HeaderBubbles messages={messages} avatar={avatar} />
            </div>
          )}

          <div className="more-information--form">
            {sections.map((section, i) => (
              <div key={i} className="more-information--form--section">
                <InformationSection {...section} />
                {i < sections.length - 1 && (
                  <div className="more-information--form--section--divider">
                    <Divider />
                  </div>
                )}
              </div>
            ))}
            <div className="more-information--form--actions">
              <Desktop>
                <div className="more-information--form--actions--previous" onClick={onPrevious}>
                  <Icon name="arrow-left" variant="inherit" />
                </div>
              </Desktop>
              <div className="more-information--form--actions--next">
                <Button
                  iconProps={{ name: 'arrow-right' }}
                  iconPosition="right"
                  onClick={onNext}
                  disabled={isButtonDisabled}
                >
                  Continuer
                </Button>
              </div>
            </div>
          </div>
        </Content>
        <div className="more-information--progress">
          <Progress {...progressProps} />
        </div>
        {dialogContent}
      </div>
    )
  }
}
