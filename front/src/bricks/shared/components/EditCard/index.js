import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, Text, SubHeading, Icon } from '../../../index'
import './EditCard.scss'

const CONFIG = {
  payment: {
    title: 'Mensualité',
    suffix: '€'
  },
  contribution: {
    title: 'Apport',
    suffix: '€'
  }
}

class EditCard extends PureComponent {
  static propTypes = {
    slug: PropTypes.string,
    amount: PropTypes.number,
    onClick: PropTypes.func
  }

  render() {
    const { slug, amount, onClick } = this.props
    const { title, suffix } = CONFIG[slug]
    return (
      <div className="edit-card" onClick={() => onClick(slug)}>
        <Card format={['small', 'line']} variant="neutral-1-20">
          <Content size="x-small">
            <Text size="x-small" variant="neutral-1-30">
              {title}
            </Text>
            <div className="edit-card--amount">
              <SubHeading>
                {amount.toLocaleString('fr')} {suffix}
              </SubHeading>
              <Icon name="pen" variant="neutral-1-30" />
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}

export default EditCard
