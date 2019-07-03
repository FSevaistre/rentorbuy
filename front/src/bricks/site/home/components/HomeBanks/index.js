import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const HomeBanks = ({ banks }) => (
  <S.Banks>
    {banks.title && (
      <S.BanksTitle>
        <B.Heading type="h2" variant="primary-1">
          {banks.title}
        </B.Heading>
      </S.BanksTitle>
    )}

    {banks.content && (
      <S.BanksDescription>
        <B.Text type="p">{banks.content}</B.Text>
      </S.BanksDescription>
    )}

    <S.BankLogo>
      <S.PrettoLogoContainer>
        <S.PrettoLogoPower>
          <S.PrettoLogoThunder />
        </S.PrettoLogoPower>
        <S.PrettoLogo>
          <B.Icon name="p-logo" />
        </S.PrettoLogo>
      </S.PrettoLogoContainer>
      <S.BankLogoContainer>
        {banks.items.map(({ slug, size }, i) => (
          <S.BankLogoItem key={slug} number={i + 1}>
            <S.BankLogoContent size={size}>
              <B.Image isImg description={slug} slug={`website/page/home/${slug}`} options="c_scale,w_200,q_auto" />
            </S.BankLogoContent>
          </S.BankLogoItem>
        ))}
      </S.BankLogoContainer>
    </S.BankLogo>
  </S.Banks>
)

HomeBanks.propTypes = {
  /** Partner banks. */
  banks: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default memo(HomeBanks)
