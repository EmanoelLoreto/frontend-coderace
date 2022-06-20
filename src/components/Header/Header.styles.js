/* eslint-disable global-require */
import styled from 'styled-components'

import { Link as RouterLink } from 'react-router-dom'

export const HeaderDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: ${ ({ transparentHeader }) => (transparentHeader ? '20px;' : '10px;') };
  background: ${ ({ transparentHeader }) => (transparentHeader ? 'rgb(15 15 15 / 0%);' : '#000000') };
  background-image: ${ ({ transparentHeader }) => (transparentHeader ? '' : 'linear-gradient(90deg, #000000 0%, #141414 50%, #000000 100%)') };
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
  
  @media(max-width: 950px) {
    transition: all ease-in-out 0.3s;
    margin-left: ${ ({ open }) => (open ? '0px' : '-200px') };
    opacity: ${ ({ open }) => (open ? '100%' : '0') };
    flex-direction: column;
    padding: 0px;
  }
`

export const Li = styled.li`
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 0px 5px;

  background-image:
    linear-gradient(
      transparent: 8%,
      transparent: 90%,
      #00B83B 90%,
      #00B83B 100%,
    )

  @media(max-width: 950px) {
    margin: 10px 5px;

    :last-child {
      margin-top: 25px;
    }
  }
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
  white-space: nowrap;

  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position-x: right;

  transition: background-size 300ms;

  :hover {
    background-size: 100% 100%;
    background-position-x: left;
  }

  :hover {
    color: #fff;
  }

  @media(max-width: 950px) {
    font-size: 1.3rem;
  }
`

export const LinkA = styled.a`
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  outline: none;
  padding: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${ ({ selectedSub }) => (selectedSub ? '#fff' : 'rgba(202, 206, 221, 0.8)') };
  border-bottom: ${ ({ selectedSub }) => (selectedSub ? '2px solid #54a3ff' : '0px solid #54a3ff') };
  transition: all 0.3s ease-in-out 0s;

  :hover {
    color: #fff;
  }

  @media(max-width: 950px) {
    font-size: 1.2rem;
  }
`

export const LinkInscricao = styled(RouterLink)`
  color: #fff;
  background: ${ ({ selected }) => (selected ? 'none' : '#00B83B') };
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

  @media(max-width: 950px) {
    font-size: 1.3rem;
  }
`

export const HeaderMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  position: fixed;
  width: -webkit-fill-available;

  background-color: #000000;
  background-image: linear-gradient(180deg, #000000 0%, #101010 50%, #000000 100%);

  height: 70px;
  transition: all 0.5s;

  z-index: 5;
`

export const OverlayMenu = styled.div`
  display: block;
  width: ${ ({ open }) => (open ? '100%' : '0px') };
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(17, 17, 17, 0.8);
`

export const SideBarMobile = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  width: ${ ({ open }) => (open ? '70%' : '0px') };
  top: 0;
  padding: ${ ({ open }) => (open ? '20px' : '0px') };
  bottom: 0;
  z-index: 6;
  background-color: #282828;
  background-image: linear-gradient(43deg, #282828 0%, #202020 46%, #000000 100%);
  transition: 0.4s;

  img {
    width: 50%;
  }
`
