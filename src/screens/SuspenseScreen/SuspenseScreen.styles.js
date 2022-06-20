import styled from 'styled-components'

export const BackgroundSuspense = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
`

export const LogoCoderace = styled.img`
  width: 50vw;
  height: 35vh;

  @media(max-width: 950px) {
    width: 80%;
    height: auto;
  }
`
