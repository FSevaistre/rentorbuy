import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { scoreToTag } from '../../../assets/helpers'
import { Card, Content, Icon, Row, SubHeading, Text } from '../../../index'
import './InformationCard.scss'

const SUFFIX = {
  amount: '€',
  duration: 'ans'
}
export default class InformationCard extends PureComponent {
  static propTypes = {
    /** Title of component. */
    title: PropTypes.string.isRequired,
    /** Value of component. */
    value: PropTypes.number.isRequired,
    /** Value type of component. The display will be different according to the chosen type. */
    valueType: PropTypes.oneOf(['amount', 'duration', 'score']).isRequired,
    /** Icon  name. Placed next to the value. */
    icon: PropTypes.string,
    /** Triggered anywhere on card click. */
    onClick: PropTypes.func
  }
  render() {
    const { title, value, valueType, icon, onClick } = this.props
    const label = valueType === 'score' ? scoreToTag(value) : `${value.toLocaleString('fr')} ${SUFFIX[valueType]}`
    return (
      <div className="simulation--info-cards--card" onClick={onClick}>
        <Card variant="neutral-1-20" format={['line', 'small', 'full']}>
          <Content size="x-small">
            <Text size="x-small" variant="neutral-1-40">
              {title}
            </Text>
            <div className="simulation--info-cards--card--row">
              <Row
                label={<SubHeading>{label}</SubHeading>}
                value={
                  <div className="simulation--info-cards--card--icon">
                    {!!icon && <Icon name={icon} variant="neutral-1-30" />}
                  </div>
                }
              />
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}
