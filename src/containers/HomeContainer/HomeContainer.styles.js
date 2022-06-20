import styled from 'styled-components'
import backgroundHome from '../../assets/background-home.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const SectionHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ backgroundHome });
  background-attachment: fixed;

  :before {
    content: "";
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: ${ ({ height }) => (height ? `${ height }px` : 'auto') };
    z-index: 1;
  }
`

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  z-index: 1;
`

export const TitleCodeRace = styled.h1`
  font-family: "Raleway", sans-serif;
  color: #fff;
  font-size: calc(3.5vw + 3.5vh);
  font-weight: 600;
  text-transform: uppercase;
  margin: 5px 0px;
`

export const SubTitleCodeRace = styled(TitleCodeRace)`
  font-size: calc(2vw + 2vh);
`

export const GreenSpan = styled.span`
  color: #00B83B;

  :hover {
    color: #54a3ff;
  }
`

export const LinkProtocolo = styled.a`
  font-family: "Raleway", sans-serif;
  color: #00B83B;
  font-weight: 400;
  font-size: calc(1.5vw + 1.5vh);
  text-decoration: none;
  margin-top: 10vh;

  transition: all 0.3s ease-in-out 0s;
  :hover {
    color: #54a3ff;
  }
`
