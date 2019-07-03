import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CityRates = ({ advisor: { picture, name }, appUrl, regionName, onNav, rates }) => {
  const expertCardContent = (
    <B.Content>
      <p>
        Bonjour ! <br />
        Je suis <strong>{name}</strong>, conseiller en <B.Link href="/pret-immobilier/">prêt immobilier</B.Link> expert
        de la région {regionName}. Contactez-nous au 01 76 39 06 41 pour nous présenter votre projet.
      </p>
    </B.Content>
  )
  return (
    <B.Wrapper full>
      <S.Rates>
        <S.Advisor>
          <S.AdvisorTitle>
            <S.AdvisorPicture>
              <B.Image
                isImg
                slug={`${picture.replace('/', '')}/medium`}
                description={name}
                options="c_scale,w_200,q_auto"
              />
            </S.AdvisorPicture>
            <S.AdvisorDescription>
              <B.SubHeading>{name}</B.SubHeading>
              <B.Text size="small" variant="neutral-1-60">
                Expert Pretto
              </B.Text>
            </S.AdvisorDescription>
          </S.AdvisorTitle>
          <B.Responsive max="tablet">
            <B.Card arrow="top" arrowPosition={{ left: 32 }}>
              {expertCardContent}
            </B.Card>
          </B.Responsive>
          <B.Responsive min="tablet">
            <B.Card arrow="top" arrowPosition={{ left: 44 }}>
              {expertCardContent}
            </B.Card>
          </B.Responsive>
        </S.Advisor>
        <S.Banks>
          <B.CityTable appUrl={appUrl} onNav={onNav} rates={rates} />
        </S.Banks>
      </S.Rates>
    </B.Wrapper>
  )
}

CityRates.propTypes = {
  appUrl: PropTypes.string.isRequired,
  advisor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }),
  regionName: PropTypes.string.isRequired,
  onNav: PropTypes.func.isRequired,
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      group_name: PropTypes.string.isRequired,
      good_rate: PropTypes.number.isRequired,
      bad_rate: PropTypes.number.isRequired
    })
  ).isRequired
}

export default memo(CityRates)
