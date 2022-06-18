/* eslint-disable no-nested-ternary */
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
  height: 100vh;

  :before {
    content: "";
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: ${ ({ height }) => (height ? `${ height }px` : 'auto') };
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
  min-width: 1060px;

  background-color: #fff;
  width: 80vw;
  border-radius: 20px;
  z-index: 2;
  margin-top: 10vw;

  h1 {
    grid-area: 1 / 1 / 2 / 3;
    margin: 0px 0px 10px 0px;
    align-self: center;
    justify-self: center;
  }
`

export const ContainerTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  grid-area: 2 / 1 / 6 / 3;
`

export const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  padding: 10px 14px;
  box-shadow: none;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 10px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  margin: 5px 0px 10px 0px;
  color: #54a3ff;
  height: 1.5rem;

  :focus {
    color: #54a3ff;
    background-color: #fff;
    border-color: #00B83B;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const InputDisabled = styled(Input)`
  cursor: not-allowed;
`

export const ContainerInputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelError = styled.span`
  color: red;
  font-size: 0.8rem;
  margin: -5px 0px 5px 10px
`

export const ContainerParticipants = styled.div`
  grid-area: 2 / 3 / 6 / 6;

  display: flex;
  flex-direction: column;
`

export const ButtonCreateTeam = styled.input`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
  background: #00B83B;
  padding: 7px 22px;
  border-radius: 50px;
  border: 3px solid #00B83B;
  transition: all ease-in-out 0.3s;
  outline: none;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    color: #00B83B;
    background: none;
  }
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
  border: ${ ({ selected }) => (selected ? '2px solid #54a3ff' : '2px solid transparent') };
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

export const AvatarAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  color: ${ ({ selected, error }) => (selected && !error ? '#54a3ff' : error ? 'red' : '') };

  h4 {
    margin: 5px 0px 0px 0px
  }
`
