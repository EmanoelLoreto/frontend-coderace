import styled, { keyframes } from 'styled-components'

export const BackgroundSuspense = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
`

const pulseAnimation = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
`

export const LogoCoderace = styled.img`
  width: 50vw;
  margin-bottom: 5vw;
  animation: ${ pulseAnimation } 3s ease-in-out infinite both;

  @media(max-width: 950px) {
    width: 80%;
    height: auto;
  }
`
