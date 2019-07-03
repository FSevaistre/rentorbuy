import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Content, Row, SubHeading, Tag, Text } from '../../../index'
import './SummaryChanges.scss'

const LABELS = {
  'purchase.property_price': 'Prix du bien',
  'purchase.works_price': 'Travaux',
  contribution: 'Apport',
  'purchase.land_price': 'Prix du terrain',
  'purchase.build_price': 'Prix de la construction',
  'request.duration': 'Durée',
  payment: 'Mensualités'
}
const TAGS = {
  current: { children: 'projet actuel', variant: 'neutral-1' },
  new: { children: 'nouveau projet', variant: 'accent-1' }
}

export default class SummaryChanges extends PureComponent {
  static propTypes = {
    /** Type of component. If set to <code>score</code>, value will be rendered as a tag, otherwise a formatted string. */
    type: PropTypes.oneOf(Object.keys(TAGS)).isRequired,
    /** Values of component. Renders Rows components.  */
    values: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        value: PropTypes.number
      })
    ).isRequired,
    /** Triggered when the <code>Button</code> is clicked. */
    onClick: PropTypes.func
  }

  render() {
    const { type, values, onClick } = this.props
    return (
      <div className="summary-changes">
        <Card format="line" variant="neutral-1-20">
          <Content>
            <div className="summary-changes--tag">
              <Tag size="small" {...TAGS[type]} />
            </div>
            <div className="summary-changes--values">
              {values.map(item => {
                const { path, value } = item
                return (
                  <div key={path} className="summary-changes--values--row">
                    <Row
                      label={
                        <Text size="small" variant="neutral-1-60">
                          {LABELS[path]}
                        </Text>
                      }
                      value={
                        <SubHeading>
                          {value.toLocaleString('fr')} {path === 'request.duration' ? 'ans' : '€'}
                        </SubHeading>
                      }
                    />
                  </div>
                )
              })}
            </div>
            <Button onClick={onClick} format="full">
              Enregistrer
            </Button>
          </Content>
        </Card>
      </div>
    )
  }
}
