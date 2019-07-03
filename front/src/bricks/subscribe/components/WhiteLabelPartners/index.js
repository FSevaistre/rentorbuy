import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Content } from '../../../index'
import './WhiteLabelPartners.scss'

export default class WhiteLabelPartners extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    logo: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const { children, logo, style } = this.props
    const variantProps = !style && { variant: 'accent-1' }
    return (
      <div className="white-label-partners">
        <Card {...variantProps}>
          <div style={style}>
            <Content>
              <div className="white-label-partners--content">
                {logo && (
                  <div className="white-label-partners--content--logo">
                    <img src={`https://res.cloudinary.com/pretto-fr/image/upload/q_auto/${logo}`} alt="logo partner" />
                  </div>
                )}
                {children}
              </div>
            </Content>
          </div>
        </Card>
      </div>
    )
  }
}
