import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  img {
    width: 10vw;
    margin: 15px 0;
    cursor: pointer;
  }
`

export const ContainerPanel = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px 2vw;

  max-height: 80vh;
  max-width: 80vw;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const NavMenus = styled.nav``

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
    );

  @media(max-width: 950px) {
    margin: 10px 5px;

    :last-child {
      margin-top: 25px;
    }
  }
`

export const Link = styled.a`
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  outline: none;
  padding: 8px;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${ ({ selectedSub }) => (selectedSub ? '#fff' : 'rgba(202, 206, 221, 0.8)') };
  border-bottom: ${ ({ selectedSub }) => (selectedSub ? '3px solid #54a3ff' : '0px solid #54a3ff') };
  transition: all 0.3s ease;

  :hover {
    color: #fff;
  }

  @media(max-width: 950px) {
    font-size: 1.2rem;
  }
`

export const ContainerData = styled.div`
  height: 70vh;
  overflow: auto;
`
