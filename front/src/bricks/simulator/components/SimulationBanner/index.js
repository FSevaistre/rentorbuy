import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Badge, Button, Card, Desktop } from '../../../index'
import './SimulationBanner.scss'

export default class SimulationBanner extends PureComponent {
  static propTypes = {
    /** Whether to show or not the banner. */
    show: PropTypes.bool,
    /** Save action. */
    onSave: PropTypes.func,
    /** Quit action. */
    onQuit: PropTypes.func
  }

  render() {
    const { onSave, onQuit, show } = this.props
    const buttonProps = {
      format: 'squared',
      variant: 'white'
    }
    return (
      <div>
        {show && <div className="simulation-banner--hidden" />}
        <CSSTransition in={show} timeout={500} classNames="simulation-banner--transition" unmountOnExit>
          <div className="simulation-banner">
            <Card variant="accent-1">
              <div className="simulation-banner--wrapper">
                <div className="simulation-banner--content">
                  <Desktop>
                    <div className="simulation-banner--content--badge">
                      <Badge format="line" variant="accent-1" icon="exclamation-mark" size="small" />
                    </div>
                  </Desktop>
                  Enregistrer votre projet ?
                </div>
                <div className="simulation-banner--buttons">
                  <div className="simulation-banner--buttons--save">
                    <Button {...buttonProps} onClick={onSave}>
                      Enregistrer
                    </Button>
                  </div>
                  <div className="simulation-banner--buttons--quit">
                    <Button {...buttonProps} onClick={onQuit}>
                      Quitter
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </CSSTransition>
      </div>
    )
  }
}
