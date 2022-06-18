import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  HeaderMenu,
  NavMenus,
  Ul,
  Li,
  Link,
  LinkInscricao,
  LinkA,
} from './Header.styles'
import logoCoderace from '../../assets/logo-coderace.png'

const Header = ({ transparent = true }) => {
  const location = useLocation()

  const [transparentHeader, setTransparentHeader] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setTransparentHeader(window.pageYOffset < (location.pathname === '/inscricao' ? 30 : 100)))
    }

    if (location.hash) {
      window.location.href = location.hash
    }
  }, [])

  return (
    <HeaderMenu transparentHeader={ transparentHeader && transparent } id="header-coderace">
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
            <LinkA href="/#galeria">Galeria</LinkA>
          </Li>
          <Li>
            <LinkA href="/#faq">FAQ</LinkA>
          </Li>
          <Li>
            <LinkA href="/#contato">Contato</LinkA>
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
    </HeaderMenu>
  )
}

export default Header
