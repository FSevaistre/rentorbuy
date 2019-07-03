import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Content, Divider, EditableRows, InformationRows, SimulationSliders } from '../../../index'
import './SimulationSidebar.scss'

const DIVIDER = version => (
  <div className="simulation-sidebar--divider">
    <Divider variant={version === 'a' ? 'white' : 'neutral-1-20'} />
  </div>
)
export default class SimulationSidebar extends PureComponent {
  static propTypes = {
    /** onClick fucntion triggered when Button is clicked. */
    onModify: PropTypes.func,
    /** Props of <code>[EditableRows](/#!/EditableRows)</code> component. */
    editableRowsProps: PropTypes.object,
    /** Props of <code>[InformationRows](/#!/InformationRows)</code> component. */
    informationRowsProps: PropTypes.object,
    /** Props of <code>[SimulationSliders](/#!/SimulationSliders)</code> component. */
    simulationSlidersProps: PropTypes.object,
    version: PropTypes.oneOf(['a', 'b'])
  }

  render() {
    const { editableRowsProps, informationRowsProps, simulationSlidersProps, version } = this.props
    return (
      <Content variant={version === 'a' ? 'neutral-1-l' : 'white'}>
        <div className="simulation-sidebar">
          <div>
            <EditableRows {...editableRowsProps} />
            {DIVIDER(version)}
          </div>
          <InformationRows {...informationRowsProps} />
          {DIVIDER(version)}
          <SimulationSliders {...simulationSlidersProps} />
        </div>
      </Content>
    )
  }
}
