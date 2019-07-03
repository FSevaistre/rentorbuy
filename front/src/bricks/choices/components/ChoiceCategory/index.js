import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Content, Icon, SubHeading, Text, Mobile, Desktop } from '../../../index'
import './ChoiceCategory.scss'

const CONFIG = {
  purchase: {
    title: 'Vous souhaitez préparer votre achat immobilier',
    description: 'Complétez votre profil, simulez votre projet et obtenez le meilleur taux.'
  },
  renegotiation: {
    title: 'Vous souhaitez renégocier votre prêt immobilier',
    description: 'Simulez les économies que vous pouvez réaliser.'
  }
}
export default class ChoiceCategory extends PureComponent {
  static propTypes = {
    /** Kind of Project. Can be `purchase`, or `renegotiation`. */
    kind: PropTypes.oneOf(Object.keys(CONFIG)).isRequired
  }

  render() {
    const { kind } = this.props
    let { title, description } = CONFIG[kind]
    return (
      <div className="choice-category">
        <Content>
          <div className="choice-category--wrapper">
            <img
              className="choice-category--picture"
              src={`https://res.cloudinary.com/pretto-fr/image/upload/c_scale,w_640,q_auto/pretto-ui/choose-${kind}.png`}
              alt={kind}
            />
            <div className="choice-category--content">
              <div className="choice-category--title">
                <SubHeading size="large">{title}</SubHeading>
                <div className="choice-category--title--action">
                  <Mobile>
                    <Icon name="arrow-right" variant="primary-1" />
                  </Mobile>
                  <Desktop>
                    <Button icon="arrow-right" format="circle" size="small" />
                  </Desktop>
                </div>
              </div>
              <div className="choice-category--description">
                <Text size="small">{description}</Text>
              </div>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}
