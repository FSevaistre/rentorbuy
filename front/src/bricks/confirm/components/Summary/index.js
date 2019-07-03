import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content, ProjectRow, SubHeading } from '../../../index'

export default class Summary extends PureComponent {
  static propTypes = {
    /** Component title. */
    title: PropTypes.string.isRequired,
    /** Array of ProjectRow props  */
    values: PropTypes.array.isRequired
  }

  render() {
    const { title, values } = this.props

    return (
      <div className="summary">
        <Card format="line" variant="neutral-1-20">
          <Content>
            <div className="summary__title">
              <SubHeading size="large">{title}</SubHeading>
            </div>

            <div>
              {values.map((rowProps, index) => (
                <div key={index} className="summary__row">
                  <ProjectRow rightSpaced {...rowProps} />
                </div>
              ))}
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}
