/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import './MenuHamburguer.css'

import {
  HeaderDesktop,
  NavMenus,
  Ul,
  Li,
  Link,
  LinkInscricao,
  LinkA,

  HeaderMobile,
  SideBarMobile,
  OverlayMenu,
} from './Header.styles'
import logoCoderace from '../../assets/logo-coderace.png'

const Header = ({ transparent = true }) => {
  const location = useLocation()

  const [transparentHeader, setTransparentHeader] = useState(true)
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setTransparentHeader(window.pageYOffset < (location.pathname === '/inscricao' ? 30 : 100)))
      window.addEventListener('resize', () => setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      }), true)
    }

    if (location.hash) {
      window.location.href = location.hash
    }
  }, [])

  return (
    windowDimensions.width < 950 ? (
      <>
        <OverlayMenu open={ isOpenedMenu } />
        <SideBarMobile open={ isOpenedMenu }>
          <NavMenus>
            <Ul open={ isOpenedMenu }>
              <Li>
                <Link to="/" selected={ location.pathname === '/' }>Code Race</Link>
              </Li>
              <Li>
                <LinkA
                  href="/#galeria"
                  selectedSub={ location.hash === '#galeria' }
                  onClick={ () => setIsOpenedMenu(false) }
                >
                  Galeria
                </LinkA>
              </Li>
              <Li>
                <LinkA
                  href="/#faq"
                  selectedSub={ location.hash === '#faq' }
                  onClick={ () => setIsOpenedMenu(false) }

                >
                  FAQ
                </LinkA>
              </Li>
              <Li>
                <LinkA
                  href="/#contato"
                  selectedSub={ location.hash === '#contato' }
                  onClick={ () => setIsOpenedMenu(false) }
                >
                  Contato
                </LinkA>
              </Li>
              <Li>
                <Link to="/patrocinio" selected={ location.pathname === '/patrocinio' }>Patrocine</Link>
              </Li>
              <Li>
                <Link to="/organizacao" selected={ location.pathname === '/organizacao' }>Organização</Link>
              </Li>
              <Li>
                <LinkInscricao to="/inscricao" selected={ location.pathname === '/inscricao' }>Inscrições</LinkInscricao>
              </Li>
            </Ul>
          </NavMenus>
          <img
            id="logo-coderace"
            src={ logoCoderace }
            alt="Icon"
          />
        </SideBarMobile>

        <HeaderMobile id="header-coderace">
          <img
            id="logo-coderace"
            src={ logoCoderace }
            height="40px"
            alt="Icon"
          />
          <input id="menu-toggle" type="checkbox" checked={ isOpenedMenu } onChange={ () => setIsOpenedMenu(!isOpenedMenu) } />
          <label className="menu-button-container" htmlFor="menu-toggle" style={ { zIndex: 10 } }>
            <div className="menu-button" />
          </label>
        </HeaderMobile>
      </>
    ) : (
      <HeaderDesktop
        id="header-coderace"
        transparentHeader={ transparentHeader && transparent }
        isMobile={ isMobile }
      >
        <img
          id="logo-coderace"
          src={ logoCoderace }
          height="40px"
          alt="Icon"
        />
        <NavMenus>
          <Ul>
            <Li>
              <Link to="/" selected={ location.pathname === '/' }>Code Race</Link>
            </Li>
            <Li>
              <LinkA href="/#galeria" selectedSub={ location.hash === '#galeria' }>Galeria</LinkA>
            </Li>
            <Li>
              <LinkA href="/#faq" selectedSub={ location.hash === '#faq' }>FAQ</LinkA>
            </Li>
            <Li>
              <LinkA href="/#contato" selectedSub={ location.hash === '#contato' }>Contato</LinkA>
            </Li>
            <Li>
              <Link to="/patrocinio" selected={ location.pathname === '/patrocinio' }>Patrocine</Link>
            </Li>
            <Li>
              <Link to="/organizacao" selected={ location.pathname === '/organizacao' }>Organização</Link>
            </Li>
            <Li>
              <LinkInscricao to="/inscricao">Inscrições</LinkInscricao>
            </Li>
          </Ul>
        </NavMenus>
      </HeaderDesktop>

    )
  )
}

export default Header
