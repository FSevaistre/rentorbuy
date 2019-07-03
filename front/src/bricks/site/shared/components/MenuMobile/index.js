import React, { memo } from 'react'
import PropTypes from 'prop-types'

import * as B from '../../../../index'
import * as S from './styles'

const MenuMobile = ({ menu, subMenus, guideMenu, showGuide, onClose, current }) => {
  return (
    <S.Container>
      <S.Close onClick={onClose}>
        <B.Icon name="cross" />
      </S.Close>
      <S.Menu>
        <S.MenuItem>
          <B.Link href="/" onClick={onClose}>
            Accueil
          </B.Link>
        </S.MenuItem>
        {menu.map(item => {
          const subMenu = subMenus[item.ID]
          if (subMenu)
            return subMenu.filter(Boolean).map(item => (
              <S.MenuItem key={item.ID} active={current.indexOf(item.url) > -1}>
                <B.Link href={item.url} onClick={onClose}>
                  {item.title}
                </B.Link>
              </S.MenuItem>
            ))
          else
            return (
              <S.MenuItem key={item.ID} active={current.indexOf(item.url) > -1}>
                <B.Link href={item.url} onClick={onClose}>
                  {item.title}
                </B.Link>
                {item.url === '/guide/' && showGuide && (
                  <S.GuideMenu>
                    {guideMenu.map(({ name, slug, url, variant }) => (
                      <S.GuideMenuItem key={slug} active={current === url} variant={variant}>
                        <B.Link href={url} onClick={onClose}>
                          <B.Text type="span" size="small">
                            {name}
                          </B.Text>
                        </B.Link>
                      </S.GuideMenuItem>
                    ))}
                  </S.GuideMenu>
                )}
              </S.MenuItem>
            )
        })}
      </S.Menu>
      <S.Button>
        <B.Button href="https://app.pretto.fr" format={['line', 'lowercase']} size="small">
          Espace client
        </B.Button>
      </S.Button>
    </S.Container>
  )
}

MenuMobile.propTypes = {
  showGuide: PropTypes.bool,
  menu: PropTypes.array,
  subMenus: PropTypes.object,
  guideMenu: PropTypes.array,
  onClose: PropTypes.func,
  current: PropTypes.string
}

MenuMobile.defaultProps = {
  subMenus: {}
}

export default memo(MenuMobile)
