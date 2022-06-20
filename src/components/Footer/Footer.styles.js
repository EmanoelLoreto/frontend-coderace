import styled, { keyframes } from 'styled-components'

export const LinkGreen = styled.a`
  color: #00B83B;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0;
  text-align: justify;
  transition: all 0.3s ease-in-out 0s;

  :hover {
    color: #54a3ff;
  }
`

export const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 5vw;
  background: #141414;
  background-image: linear-gradient(180deg, #141414 0%, #242424 100%);
`

export const Copyright = styled.h2`
  font-size: 1rem;
  color: #ddd;
  text-align: center;
  margin: 25px 0 20px 0;
`

export const Policys = styled.div`
  color: #fff;
  margin: 5px 0 0 0;

  @media(max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    b {
      transform: rotate(90deg);
      margin: -5px;
    }
  }
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
  }
`

export const Developed = styled.h5`
  color: #fff;
  margin: 10px 0 30px 0;

  animation: ${ pulseAnimation } 3s ease-in-out infinite both;

  @media(max-width: 950px) {
    margin-top: 30px;
  }
`
