/* eslint-disable global-require */
import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 0px 5vw;
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

export const CardAward = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 1vw;
  margin: 3vw;
  
  border-radius: 50px;
  background: #f7f7f7;
  box-shadow:  20px 20px 60px #d2d2d2,
              -20px -20px 60px #ffffff;

  img {
    animation: ${ pulseAnimation } 3s ease-in-out infinite both;
  }
`

export const TitleAward = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DescriptionAward = styled.span`
  text-align: center;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #9195a2;
`

export const HrCard = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
`

export const FirstPlaceAward = styled.b`
  color: #6c757d;
  margin: 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.7;
`

export const MoneyPrize = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin: 0 0 5px 0;
`

export const CardSubscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 2vw;
  margin: 3vw;

  border-radius: 50px;
  background: #f7f7f7;
  box-shadow:  20px 20px 60px #d2d2d2,
              -20px -20px 60px #ffffff;
`

export const TitleSubscription = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2.6rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  margin: 10px 0px;
`

export const UlRules = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0 4vw;

  @media(max-width: 950px) {
    padding: 0 7vw;
    text-align: center;
  }
`

export const LiRules = styled.li`
  margin: 8px 0;
  font-size: 1rem;

  :before {
    font-family: FontAwesome;
    float: left;
    margin-left: -1.5em;
    content: "\f00c";
    color: #d91f26;
    transform: scale(1, 1);
    position: absolute;
    margin-top: -1px;
    color: #00B83B;
  }
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid #00B83B;
`

export const GreenSpan = styled.span`
  color: #00B83B;
`
