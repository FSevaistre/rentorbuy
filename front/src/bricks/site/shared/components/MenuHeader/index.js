import React, { memo, Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import * as B from '../../../../index'
import * as S from './styles'

const getScrollPosition = () => {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0 }
  }

  return { x: window.pageXOffset, y: window.pageYOffset }
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition())

  useEffect(() => {
    let requestedAnimationFrame = null

    const handleAnimationFrame = () => {
      setScrollPosition(getScrollPosition())
      requestedAnimationFrame = null
    }

    const handleScroll = () => {
      if (requestedAnimationFrame === null) {
        requestedAnimationFrame = window.requestAnimationFrame(handleAnimationFrame)
      }
    }

    window.addEventListener('scroll', handleScroll)
    setScrollPosition(getScrollPosition())

    return () => {
      if (requestedAnimationFrame !== null) {
        window.cancelAnimationFrame(requestedAnimationFrame)
      }

      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

const MenuHeader = ({
  menu,
  subMenus,
  currentSubMenuId,
  guideMenu,
  searchComponent,
  isSearchOpen,
  current,
  isMenuOpen,
  onOpenMenu,
  onCloseMenu,
  showGuide,
  onTrack
}) => {
  const { y } = useScrollPosition()
  const limit = current === '/' ? 350 : 100
  const buttonProps = {
    href: 'https://app.pretto.fr',
    variant: 'accent-1',
    onClick: onTrack
  }
  const subMenu = subMenus[currentSubMenuId]
  return (
    <Fragment>
      <S.StickyMenu visible={y > limit}>
        <B.Wrapper>
          <S.Container>
            <B.Responsive min="tablet">
              <S.Logo>
                <B.Link href="/">
                  <B.Logo variant="primary-1" size="medium" />
                </B.Link>
              </S.Logo>
            </B.Responsive>

            <S.MenuContainer>
              <S.UserIcon>
                <a href="https://app.pretto.fr">
                  <B.UserAccount size="large" />
                </a>
              </S.UserIcon>

              <B.Responsive max="tablet">
                <B.Button {...buttonProps} size="small" format="condensed">
                  Simuler mon prêt
                </B.Button>
              </B.Responsive>

              <B.Responsive min="tablet">
                <B.Button {...buttonProps}>Simuler mon prêt</B.Button>
              </B.Responsive>
            </S.MenuContainer>
          </S.Container>
        </B.Wrapper>
      </S.StickyMenu>

      <B.Responsive max="tablet">
        <B.Wrapper>
          <S.Container>
            <S.Logo>
              <B.Link href="/">
                <B.Mobile>
                  <B.Logo variant="primary-1" size="small" />
                </B.Mobile>
                <B.Tablet>
                  <B.Logo variant="primary-1" size="medium" />
                </B.Tablet>
              </B.Link>
            </S.Logo>
            <S.Icons>
              <a href="https://app.pretto.fr">
                <B.UserAccount />
              </a>
              <S.Icon onClick={onOpenMenu}>
                <B.Icon name="menu" variant="primary-1" />
              </S.Icon>
            </S.Icons>
            <B.Drawer isOpen={isMenuOpen} onClickOutside={onCloseMenu} from="right" useSSR hasOverlay>
              <B.MenuMobile
                menu={menu}
                subMenus={subMenus}
                showGuide={showGuide}
                onClose={onCloseMenu}
                current={current}
                guideMenu={guideMenu}
              />
            </B.Drawer>
          </S.Container>
        </B.Wrapper>
      </B.Responsive>

      <B.Responsive min="tablet">
        <B.Wrapper>
          <S.Container>
            <S.Logo>
              <B.Link href="/">
                <B.Responsive max="laptop">
                  <B.Logo variant="primary-1" size="medium" />
                </B.Responsive>
                <B.Responsive min="laptop">
                  <B.Logo variant="primary-1" size="large" />
                </B.Responsive>
              </B.Link>
            </S.Logo>
            <S.MenuContainer>
              <CSSTransition in={!isSearchOpen} classNames="transition--slide-right" timeout={500} unmountOnExit>
                <S.Menu>
                  {menu.map(item => {
                    const isSubMenuActive =
                      subMenu && subMenu.find(({ menu_item_parent }) => Number(menu_item_parent) === item.ID)
                    return (
                      <S.MenuItem key={item.ID} active={current.includes(item.url) || isSubMenuActive}>
                        <B.Link href={item.url}>{item.title}</B.Link>
                      </S.MenuItem>
                    )
                  })}
                  <S.MenuItem noHover>
                    <B.Button href="https://app.pretto.fr" format={['line', 'lowercase', 'condensed']} size="small">
                      Espace client
                    </B.Button>
                  </S.MenuItem>
                </S.Menu>
              </CSSTransition>
              {searchComponent}
            </S.MenuContainer>
          </S.Container>
        </B.Wrapper>
        {subMenu && (
          <S.SubMenuContainer>
            <S.SubMenu>
              {subMenu.map(item => {
                const { title, url } = item
                if (item)
                  return (
                    <S.SubMenuItem key={url} active={current === url}>
                      <B.Link href={url}>{title}</B.Link>
                    </S.SubMenuItem>
                  )
                return null
              })}
            </S.SubMenu>
          </S.SubMenuContainer>
        )}
      </B.Responsive>
    </Fragment>
  )
}

MenuHeader.propTypes = {
  menu: PropTypes.array,
  subMenus: PropTypes.object,
  guideMenu: PropTypes.array,
  currentSubMenuId: PropTypes.string,
  searchComponent: PropTypes.element,
  isSearchOpen: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  showGuide: PropTypes.bool,
  onOpenMenu: PropTypes.func,
  onCloseMenu: PropTypes.func,
  onTrack: PropTypes.func,
  current: PropTypes.string
}

export default memo(MenuHeader)
