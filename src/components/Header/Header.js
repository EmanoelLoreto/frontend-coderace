import React, { useState, useEffect } from 'react'
// import { createBrowserHistory } from 'history'

import {
  HeaderMenu,
  NavMenus,
  Ul,
  Li,
  Link,
  LinkInscricao,
} from './Header.styles'
import logoCoderace from '../../assets/logo-coderace.png'

const Header = () => {
  // const history = createBrowserHistory()
  const [transparentHeader, setTransparentHeader] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setTransparentHeader(window.pageYOffset < 100)
      )
    }
  }, [])

  return (
    <HeaderMenu transparentHeader={ transparentHeader } id="header-coderace">
      <img
        id="logo-coderace"
        src={ logoCoderace }
        height="40px"
        alt="Icon"
      />
      <NavMenus>
        <Ul>
          <Li>
            <Link to="/" selected>Code Race</Link>
          </Li>
          <Li>
            <Link to="/galeria">Galeria</Link>
          </Li>
          <Li>
            <Link to="/organizacao">Organização</Link>
          </Li>
          <Li>
            <Link to="/patrocino">Patrocine</Link>
          </Li>
          <Li>
            <Link to="/faq">FAQ</Link>
          </Li>
          <Li>
            <Link to="/contato">Contato</Link>
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
