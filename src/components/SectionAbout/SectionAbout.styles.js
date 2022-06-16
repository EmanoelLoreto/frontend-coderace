import styled from 'styled-components'
import backgroundAbout from '../../assets/background-about.png'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ backgroundAbout });
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  padding: 0px 5vw;
`

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 2vw;
`

export const TitleAbout = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`

export const TextAbout = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: #fff;
  margin-bottom: 0px;
`

export const FrameVideo = styled.iframe`
  flex: 1;
`
