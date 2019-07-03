import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const CityBanks = ({ banks, zipcode, city }) => {
  return (
    <B.Wrapper>
      <S.Banks>
        {banks.map((bank, i) => {
          return (
            <S.Bank key={i}>
              <B.Card variant="white" zDepth={2} format="full">
                <B.Content>
                  <S.Container>
                    <S.Logo>
                      <B.Image
                        isImg
                        slug={`v1508856831/banks/${bank.group}`}
                        description={bank.name}
                        options="c_scale,w_96,q_auto"
                      />
                    </S.Logo>
                    <S.Content>
                      <S.Name>
                        <B.SubHeading type="h3" title={bank.name}>
                          {bank.name}
                        </B.SubHeading>
                      </S.Name>
                      <S.Address>
                        <B.Text size="small">
                          {bank.address}
                          <br />
                          {zipcode} {city}
                        </B.Text>
                      </S.Address>
                      <S.Phone>
                        <B.Text size="small">
                          Tél. :{' '}
                          <a href={`tel:${bank.phone_link}`} rel="nofollow">
                            {bank.phone}
                          </a>
                        </B.Text>
                      </S.Phone>
                      <B.Text size="small">
                        <S.Link href={bank.website} rel="nofollow" target="blank">
                          Site internet
                        </S.Link>
                      </B.Text>
                    </S.Content>
                  </S.Container>
                </B.Content>
              </B.Card>
            </S.Bank>
          )
        })}
      </S.Banks>
    </B.Wrapper>
  )
}

CityBanks.propTypes = {
  banks: PropTypes.arrayOf(
    PropTypes.shape({
      group: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone_link: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string.isRequired
    })
  ).isRequired,
  zipcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

export default memo(CityBanks)
