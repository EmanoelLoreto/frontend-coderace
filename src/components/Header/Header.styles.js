/* eslint-disable global-require */
import styled from 'styled-components'

import { Link as RouterLink } from 'react-router-dom'

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: ${ ({ transparentHeader }) => (transparentHeader ? '20px;' : '10px;') };
  background: ${ ({ transparentHeader }) => (transparentHeader ? 'rgb(15 15 15 / 0%);' : '#0f0f0f;') };
  -webkit-tap-highlight-color: transparent;
  width: -webkit-fill-available;
  position: fixed;
  transition: all 0.5s ease-in-out 0s;
  z-index: 3;
`

export const NavMenus = styled.nav`

`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`

export const Li = styled.li`
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 0px 5px;
`

export const Link = styled(RouterLink)`
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  outline: none;
  padding: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: ${ ({ selected }) => (selected ? '#fff' : 'rgba(202, 206, 221, 0.8)') };
  border-bottom: ${ ({ selected }) => (selected ? '3px solid #00B83B' : '0px solid #00B83B') };
  transition: all 0.3s ease-in-out 0s;

  :hover {
    color: #fff;
  }
`

export const LinkA = styled.a`
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  outline: none;
  padding: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: ${ ({ selected }) => (selected ? '#fff' : 'rgba(202, 206, 221, 0.8)') };
  border-bottom: ${ ({ selected }) => (selected ? '3px solid #00B83B' : '0px solid #00B83B') };
  transition: all 0.3s ease-in-out 0s;

  :hover {
    color: #fff;
  }
`

export const LinkInscricao = styled(RouterLink)`
  color: #fff;
  background: #00B83B;
  padding: 7px 22px;
  border-radius: 50px;
  border: 3px solid #00B83B;
  transition: all ease-in-out 0.3s;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  outline: none;

  :hover {
    background: none;
  }
`
