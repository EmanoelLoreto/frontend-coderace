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
  const [transparentHeader, setTransparentHeader] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setTransparentHeader(window.pageYOffset < 100)
      )
    }
  }, [])

  return (
    <HeaderMenu transparentHeader={ transparentHeader }>
      <img
        id="logo-coderace"
        src={ logoCoderace }
        height="40px"
        alt="Icon"
      />
      <NavMenus>
        <Ul>
          <Li>
            <Link href="/" selected>Code Race</Link>
          </Li>
          <Li>
            <Link href="/">Galeria</Link>
          </Li>
          <Li>
            <Link href="/">Organização</Link>
          </Li>
          <Li>
            <Link href="/">Patrocine</Link>
          </Li>
          <Li>
            <Link href="/">FAQ</Link>
          </Li>
          <Li>
            <Link href="/">Contato</Link>
          </Li>
          <Li>
            <LinkInscricao href="/">Inscrições</LinkInscricao>
          </Li>
        </Ul>
      </NavMenus>
    </HeaderMenu>
  )
}

export default Header
