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
  padding-bottom: 25px;

  :before {
    content: "";
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`

export const ContainerForm = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 20px;

  background-color: #fff;
  width: 80vw;
  border-radius: 20px;
  z-index: 1;
  margin-top: 10vw;

  h1 {
    grid-area: 1 / 1 / 2 / 3;
    margin: 0px 0px 10px 0px;
    align-self: center;
    justify-self: center;
  }
`

export const ContainerTeam = styled.div`
  grid-area: 2 / 1 / 6 / 3;
  justify-self: center;
`

export const ContainerParticipants = styled.form`
  grid-area: 2 / 3 / 6 / 6;
`

export const GreenSpan = styled.span`
  color: #00B83B;

  :hover {
    color: #54a3ff;
  }
`

export const HeaderParticipants = styled.div`
  display: flex;
  align-items: center;
  grid-area: 1 / 3 / 2 / 6;
`

export const IconParticipant = styled.img`
  width: 5vw;
  border-radius: 50px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.5s;
  margin: 0px 5px;

  :hover {
    border: 2px solid #54a3ff;
    transform: scale(1.02);
  }
`

export const IconAddParticipant = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin-left: 10px;
`
