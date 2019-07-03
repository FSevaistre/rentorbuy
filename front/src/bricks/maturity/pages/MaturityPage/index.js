import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { MaturityChoices, Heading, Card, Content } from '../../../index'
import './MaturityPage.scss'

const MaturityPage = ({ options }) => (
  <div className="maturity-page">
    <Content>
      <div className="maturity-page--heading">
        <Heading size="small">Comment avance votre projet immobilier ? </Heading>
      </div>
      <div className="maturity-page--content">
        <div className="maturity-page--content--message">
          <Card variant="accent-1-l">
            <Content>
              Mettre à jour votre projet permet de le faire avancer et d’adapter les conseils de Pretto à votre
              situation.
            </Content>
          </Card>
        </div>
        <MaturityChoices options={options} />
      </div>
    </Content>
  </div>
)

MaturityPage.displayName = 'MaturityPage'
MaturityPage.propTypes = {
  options: PropTypes.array.isRequired
}

export default memo(MaturityPage)
