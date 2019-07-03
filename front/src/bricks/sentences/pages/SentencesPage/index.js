import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import {
  Button,
  Dialog,
  Emoji,
  Helper,
  Icon,
  Progress,
  SentencesGroup,
  SentencesSteps,
  Tag,
  Mobile,
  MobileTablet,
  Desktop,
  DesktopOnly
} from '../../../index'
import './SentencesPage.scss'

export default class SentencesPage extends PureComponent {
  static propTypes = {
    sentenceStepsProps: PropTypes.object,
    emoji: PropTypes.string,
    title: PropTypes.string,
    simulationStatus: PropTypes.string,
    sentencesGroupProps: PropTypes.object,
    helper: PropTypes.object,
    index: PropTypes.number,
    lastFilledIndex: PropTypes.number,
    onClickHelper: PropTypes.func,
    onCloseHelper: PropTypes.func,
    goPreviousStep: PropTypes.func,
    onOpenTimeline: PropTypes.func,
    onCloseTimeline: PropTypes.func,
    onNav: PropTypes.func,
    onSubmit: PropTypes.func,
    isButtonDisabled: PropTypes.bool,
    isHelperOpen: PropTypes.bool,
    isLast: PropTypes.bool,
    isOpen: PropTypes.bool,
    pages: PropTypes.array,
    helpersClicked: PropTypes.object,
    progress: PropTypes.number,
    progressMax: PropTypes.number
  }
  render() {
    const {
      sentenceStepsProps,
      emoji,
      title,
      onClickHelper,
      isHelperOpen,
      helper,
      helpersClicked,
      progress,
      progressMax,
      sentencesGroupProps,
      index,
      goPreviousStep,
      isButtonDisabled,
      onCloseHelper,
      onSubmit,
      isLast,
      isOpen,
      onCloseTimeline,
      onOpenTimeline
    } = this.props
    const buttonProps = isLast
      ? { label: 'Résultats' }
      : { label: 'Continuer', icon: 'arrow-right', iconPosition: 'right' }
    const mobileButtonProps = { icon: 'arrow-right', format: ['circle', 'shadow'], iconSize: 'medium' }
    const onClickAction = isOpen ? { onClick: onCloseTimeline } : { onClick: onOpenTimeline }
    const clickedHelper = helper && helpersClicked[helper.slug]
    const helperProps = { onClickHelper, clickedHelper }
    return (
      <div className="sentences--wrapper">
        <div className="sentences--content">
          <div className="sentences wrapper">
            <div className="sentences--main">
              <Desktop>
                <div className="sentences--main--header">
                  <h1 className="sentences--main--header--title">
                    <span className="sentences--main--header--title--emoji">
                      <Emoji size="medium">{emoji}</Emoji>
                    </span>
                    <span className="sentences--main--header--title--text">{title}</span>
                  </h1>
                </div>
              </Desktop>
              <div className="sentences--main--content">
                <SentencesGroup {...sentencesGroupProps} />
              </div>
              <div className="sentences--main--footer">
                <Desktop>
                  {index > 0 && (
                    <div className="sentences--main--footer--previous" onClick={goPreviousStep}>
                      <Icon name="arrow-left" variant="neutral-1-40" />
                    </div>
                  )}
                </Desktop>
                <CSSTransition
                  in={!isButtonDisabled}
                  timeout={500}
                  classNames="sentences--button--transition"
                  unmountOnExit
                  exit={false}
                >
                  <div className="sentences--main--footer--button">
                    <Mobile>
                      <Button onClick={onSubmit} {...mobileButtonProps} />
                    </Mobile>
                    <Desktop>
                      <Button onClick={onSubmit} {...buttonProps} />
                    </Desktop>
                  </div>
                </CSSTransition>
              </div>
            </div>
            <div className={`sentences--sidebar${progress ? '' : ' sentences--sidebar--no-timeline'}`}>
              <MobileTablet>
                <div className="sentences--sidebar--icon" onClick={onOpenTimeline}>
                  {progress && (
                    <Tag size="large">
                      <div className="sentences--sidebar--icon--label">
                        <div>
                          {index + 1}/{progressMax}
                        </div>
                        <div className="sentences--sidebar--icon--label--add">
                          <Icon name="add" />
                        </div>
                      </div>
                    </Tag>
                  )}
                </div>
                {!!helper && (
                  <Dialog isOpen={isHelperOpen}>
                    <Helper {...helperProps} isMobile>
                      <div className="sentences--sidebar--helper--icon" onClick={onCloseHelper}>
                        <Icon name="cross" />
                      </div>
                      <div>{helper.content}</div>
                    </Helper>
                  </Dialog>
                )}
                <Dialog isOpen={(progress && isOpen) || false} variant="neutral-1">
                  <div className="sentences--sidebar--dialog">
                    <div className="sentences--sidebar--dialog--close" onClick={onCloseTimeline}>
                      <Icon name="cross" />
                    </div>
                    <SentencesSteps {...sentenceStepsProps} />
                  </div>
                </Dialog>
              </MobileTablet>
              <DesktopOnly>
                <CSSTransition
                  in={!!helper && (!isOpen || !progress)}
                  timeout={500}
                  classNames="sentences--helper--transition"
                  unmountOnExit
                >
                  <div className="sentences--sidebar--helper">
                    {helper && <Helper {...helperProps}>{helper.content}</Helper>}
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={progress && isOpen}
                  timeout={300}
                  classNames="sentences--icon-cross--transition"
                  unmountOnExit
                >
                  <div className="sentences--sidebar--icon" {...onClickAction}>
                    <Icon name="cross" />
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={progress && !isOpen}
                  timeout={300}
                  classNames="sentences--icon--transition"
                  unmountOnExit
                >
                  <div className="sentences--sidebar--icon" {...onClickAction}>
                    <Tag size="large">
                      <div className="sentences--sidebar--icon--label">
                        <div>
                          {index + 1}/{progressMax}
                        </div>
                        <div className="sentences--sidebar--icon--label--add">
                          <Icon name="add" />
                        </div>
                      </div>
                    </Tag>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={progress && isOpen}
                  timeout={500}
                  classNames="sentences--steps--transition"
                  unmountOnExit
                >
                  <SentencesSteps {...sentenceStepsProps} />
                </CSSTransition>
              </DesktopOnly>
            </div>
          </div>
          <div className="sentences--footer">
            <CSSTransition
              in={!!progress}
              timeout={500}
              classNames="sentences--footer--progress--transition"
              unmountOnExit
            >
              <div className="sentences--footer--progress">
                <Progress max={1} value={progress} variant="gradient-primary-2" />
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    )
  }
}
