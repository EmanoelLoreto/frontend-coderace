/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
  LinkInscricaoAdmin,
} from './Header.styles'
import logoCoderace from '../../assets/logo-coderace.png'
import { AuthContext } from '../../auth/AuthContext'

const Header = ({ transparent = true }) => {
  const auth = useContext(AuthContext)
  console.log(auth)
  const location = useLocation()
  const navigate = useNavigate()

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

    const storageData = localStorage.getItem('user')
    if (storageData) {
      auth.validateToken()
    }
  }, [])

  return (
    windowDimensions.width < 950 ? (
      <>
        <OverlayMenu open={ isOpenedMenu } onClick={ () => setIsOpenedMenu(false) } />
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
            onClick={ () => navigate('/') }
          />
        </SideBarMobile>

        <HeaderMobile id="header-coderace">
          <img
            id="logo-coderace"
            src={ logoCoderace }
            height="40px"
            alt="Icon"
            onClick={ () => navigate('/') }
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
      >
        <img
          id="logo-coderace"
          src={ logoCoderace }
          height="40px"
          alt="Icon"
          onClick={ () => navigate('/') }
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
        {auth.user && (
          <NavMenus>
            <Ul>
              <Li>
                <LinkInscricaoAdmin color="blue" to="/painel-admin">Painel admin</LinkInscricaoAdmin>
              </Li>
              <Li>
                <LinkInscricaoAdmin color="blue" to="/" onClick={ () => auth.signout() }>Sair</LinkInscricaoAdmin>
              </Li>
            </Ul>
          </NavMenus>
        )}
      </HeaderDesktop>

    )
  )
}

export default Header
