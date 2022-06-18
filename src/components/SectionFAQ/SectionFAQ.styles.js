import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f6f7fd;
  padding: 0px 5vw;
  scroll-margin-top: 70px;
`

export const TitleFAQ = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const ContainerFAQ = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vw 0;
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid #00B83B;
`

export const HrCard = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
`
