import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as B from '../../../../index'
import * as S from './styles'

const getItemBySlug = (menus, name) => menus.find(({ slug }) => slug === name)

const MenuItem = ({ items, name }) => (
  <S.MenuItem>
    <S.MenuTitle>
      <B.SubHeading>{name}</B.SubHeading>
    </S.MenuTitle>

    <div>
      {items.map(({ url, title }, index) => (
        <div key={index}>
          <B.Text size="small">
            <B.Link href={url}>{title}</B.Link>
          </B.Text>
        </div>
      ))}
    </div>
  </S.MenuItem>
)
MenuItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  name: PropTypes.string.isRequired
}
const SiteFooter = ({ menus, trustpilot }) => {
  const menuItemAbout = getItemBySlug(menus, 'a-propos-de-pretto')
  const menuItemLegal = getItemBySlug(menus, 'legal')
  const menuItemRessources = getItemBySlug(menus, 'ressources')
  const menuItemQuestions = getItemBySlug(menus, 'questions-frequentes')
  return (
    <S.Footer>
      <B.Wrapper full>
        <S.Header>
          <S.Title>
            <B.SubHeading size="large">Pretto, le meilleur crédit immobilier, gratuitement et en ligne</B.SubHeading>
          </S.Title>

          <S.Trustpilot>
            <B.MiniTrustpilot {...trustpilot} />
          </S.Trustpilot>
        </S.Header>

        <S.Body>
          <S.Legal>
            <div>
              <B.Text size="x-small">
                Pretto est une marque de la société FINSPOT, société par actions simplifiée, immatriculée au registre de
                l’ORIAS en tant que Courtier en opérations de banque et en services de paiement sous le numéro 17000916.
              </B.Text>
            </div>

            <div>
              <B.Text size="x-small">© {new Date().getFullYear()} Pretto</B.Text>
            </div>

            <S.Socials>
              <S.Social>
                <B.Button
                  format="squared-icon"
                  href="https://www.facebook.com/hellopretto/"
                  icon="facebook"
                  size="small"
                  variant="white"
                />
              </S.Social>

              <S.Social>
                <B.Button
                  format="squared-icon"
                  href="https://twitter.com/hellopretto"
                  icon="twitter"
                  size="small"
                  variant="white"
                />
              </S.Social>
            </S.Socials>
          </S.Legal>

          <S.Menus>
            <S.Menu>
              <MenuItem {...menuItemAbout} />
              <MenuItem {...menuItemLegal} />
            </S.Menu>
            <S.Menu>
              <MenuItem {...menuItemRessources} />
            </S.Menu>
            <S.Menu>
              <MenuItem {...menuItemQuestions} />
            </S.Menu>
          </S.Menus>
        </S.Body>
      </B.Wrapper>
    </S.Footer>
  )
}

SiteFooter.propTypes = {
  /** Menu list. */
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      ).isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Trustpilot rating */
  trustpilot: PropTypes.shape({
    count: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired
  }).isRequired
}

export default memo(SiteFooter)
