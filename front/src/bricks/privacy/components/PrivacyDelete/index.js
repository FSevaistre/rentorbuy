import React, { PureComponent } from 'react'
import { Card, Content, Icon } from '../../../index'
import './PrivacyDelete.scss'

export default class PrivacyDelete extends PureComponent {
  render() {
    return (
      <div className="privacy-delete">
        <Card>
          <Content>
            <div className="privacy-delete--content">
              <div className="privacy-delete--content--emoji">
                <Icon name="file-1" variant="primary-1" />
              </div>
              <div className="privacy-delete--content--text">
                <p>
                  Vous souhaitez avoir accès à vos données ou faire une demande de suppression ? Vous pouvez nous
                  contacter sur{' '}
                  <a href="mailto:privacy@pretto.fr" target="blank">
                    privacy@pretto.fr
                  </a>
                  .
                </p>
                <p>Ou par courrier : Pretto, 10 rue des Messageries, 75010 Paris</p>
              </div>
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}
