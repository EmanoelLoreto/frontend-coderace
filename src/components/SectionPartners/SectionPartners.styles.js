import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 0px 5vw;
`

export const TitlePartners = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const ContainerPartners = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  margin-bottom: 2vw;

  @media(max-width: 950px) {
    flex-direction: column;
    align-content: center;
  }
`

export const CardPartner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 20vw;
  min-height: 35vh;
  cursor: pointer;
  margin: 10px;

  border-radius: 50px;
  background: #f7f7f7;
  box-shadow:  20px 20px 60px #d2d2d2,
              -20px -20px 60px #ffffff;

  img {
    transition: all 0.3s ease-in-out 0s;
    width: 70%;
    cursor: pointer;
  }

  :hover {
    img {
      width: 16vw;
    }
  }

  @media(max-width: 950px) {
    width: 80%;
    min-height: 35vh;
  }
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid #00B83B;
`
