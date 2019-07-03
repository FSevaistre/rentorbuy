import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Content, EditableFields, SimulationSliders } from '../../../index'
import './SimulationDetails.scss'

const CONTENT = (type, props) => {
  switch (type) {
    case 'sliders':
      return <SimulationSliders {...props} />
    case 'fields':
      return <EditableFields {...props} />
    default:
      return 'Type is not defined'
  }
}
export default class SimulationDetails extends PureComponent {
  static propTypes = {
    /** Whether Save button is active or not. */
    isSaveDisabled: PropTypes.bool,
    /** Props of <code>[SimulationSliders](/#!/SimulationSliders)</code> component. */
    simulationSlidersProps: PropTypes.object,
    /** Props of <code>[EditableFields](/#!/EditableFields)</code> component. */
    editableFieldsProps: PropTypes.object,
    /** onClick function triggered when user icon is clicked */
    onClickUser: PropTypes.func,
    /** onClick function triggered when save button is clicked. */
    onOptimize: PropTypes.func,
    /** onClick function triggered when optimize button is clicked */
    onSubscribe: PropTypes.func
  }

  render() {
    const {
      isSaveDisabled,
      simulationSlidersProps,
      editableFieldsProps,
      onClickUser,
      onOptimize,
      onSubscribe
    } = this.props
    const cards = [{ type: 'sliders', props: simulationSlidersProps }]
    if (editableFieldsProps.fields.length > 0) {
      cards.push({ type: 'fields', props: editableFieldsProps })
    }
    const cardProps = {
      variant: 'neutral-1-20',
      format: ['line', 'small-radius']
    }
    return (
      <div className="simulation-details">
        <div className="simulation-details--container">
          {cards.map((card, i) => {
            return (
              <div key={i} className="simulation-details--card">
                <Card {...cardProps}>
                  <Content>{CONTENT(card.type, card.props)}</Content>
                </Card>
              </div>
            )
          })}
          <div className="simulation-details--card">
            <Card {...cardProps}>
              <Content>
                <div className="simulation-details__actions">
                  <div className="simulation-details__actions__action">
                    <Button format="flat" onClick={onOptimize} iconProps={{ name: 'thumb-up', variant: 'primary-1' }}>
                      Optimiser
                    </Button>
                  </div>

                  {!isSaveDisabled && (
                    <div className="simulation-details__actions__action">
                      <Button
                        format="flat"
                        onClick={onSubscribe}
                        iconProps={{ name: 'bookmark', variant: 'primary-1' }}
                      >
                        Sauvegarder
                      </Button>
                    </div>
                  )}

                  <div className="simulation-details__actions__action">
                    <Button format="flat" onClick={onClickUser} iconProps={{ name: 'pen', variant: 'primary-1' }}>
                      Modifier votre simulation
                    </Button>
                  </div>
                </div>
              </Content>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
