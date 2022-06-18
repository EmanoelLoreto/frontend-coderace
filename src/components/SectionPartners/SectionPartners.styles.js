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
`

export const CardPartner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 15vw;
  min-height: 35vh;
  box-shadow: 0 10px 25px 0 rgb(6 12 34 / 10%);
  cursor: pointer;
  margin: 10px;

  img {
    transition: all 0.3s ease-in-out 0s;
    width: inherit;
    cursor: pointer;
  }

  :hover {
    img {
      width: 16vw;
    }
  }
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid #00B83B;
`
