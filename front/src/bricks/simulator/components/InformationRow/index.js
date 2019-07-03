import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { scoreToTag } from '../../../assets/helpers'
import { Icon, Row, SubHeading, Text } from '../../../index'
import './InformationRow.scss'

export default class InformationRow extends PureComponent {
  static propTypes = {
    /** Label of component. */
    label: PropTypes.string,
    /** Type of component. If set to <code>score</code>, value will be rendered as a tag, otherwise a formatted string. */
    type: PropTypes.string,
    /** Value of component. */
    value: PropTypes.number,
    /** Triggered when any element is clicked. */
    onClick: PropTypes.func
  }
  render() {
    const { label, type, value, onClick } = this.props
    const rowValue = type === 'score' ? scoreToTag(value) : <SubHeading>{value.toLocaleString('fr')} €</SubHeading>
    return (
      <div className="information-row">
        <Row
          label={
            <span className="information-row--label" onClick={onClick}>
              <Text size="small" variant="neutral-1-60">
                {label}
              </Text>
            </span>
          }
          value={
            <div className="information-row--value">
              <span className="information-row--value--result" onClick={onClick}>
                {rowValue}
              </span>
              <div className="information-row--value--icon" onClick={onClick}>
                {onClick && <Icon name="info" variant="neutral-1-30" />}
              </div>
            </div>
          }
        />
      </div>
    )
  }
}
