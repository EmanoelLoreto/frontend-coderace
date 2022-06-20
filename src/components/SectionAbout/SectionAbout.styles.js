import styled from 'styled-components'
import backgroundAbout from '../../assets/background-about.png'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ backgroundAbout });
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 0px 5vw;

  @media(max-width: 950px) {
    flex-direction: column;
  }
`

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 2vw;

  @media(max-width: 950px) {
    margin-bottom: 5vw;
  }
`

export const TitleAbout = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: calc(2.5vw + 2.5vh);
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;

  @media(max-width: 950px) {
    text-align: center;
  }
`

export const TextAbout = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: #fff;
  margin-bottom: 0px;
`

export const FrameVideo = styled.iframe`
  flex: 1;
  height: 24vw;

  @media(max-width: 950px) {
    margin-bottom: 5vw;
  }
`
