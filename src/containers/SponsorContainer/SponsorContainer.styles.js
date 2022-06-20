import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 0px 5vw;
  margin-top: 7vw;

  @media(max-width: 950px) {
    margin-top: 20vw;
  }
`

export const TitleSponsor = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DescriptionSponsor = styled.span`
  text-align: center;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #9195a2;
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid #00B83B;
`

export const ContainerSponsor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;

  span {
    margin-top: 50px;
    text-align: justify;
  }

  h3 {
    margin-top: 30px;
  }
`

export const ContainerFormContact = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 60vw;
  margin: 10px 0 2vw;

  @media(max-width: 950px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`

export const InputContact = styled.input`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }

  @media(max-width: 950px) {
    width: 80%;
  }
`

export const InputMessage = styled.textarea`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  resize: none;
  width: auto;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }

  @media(max-width: 950px) {
    flex: auto;
    width: 80%;
    height: 100px;
  }
`

export const inputNome = {
  gridArea: '1 / 1 / 2 / 3',
}

export const inputResponsavel = {
  gridArea: '1 / 3 / 2 / 5',
}

export const inputTelefone = {
  gridArea: '2 / 1 / 3 / 3',
}

export const inputEmail = {
  gridArea: '2 / 3 / 3 / 5',
}

export const inputAssunto = {
  gridArea: '3 / 1 / 4 / 5',
}

export const inputMensagem = {
  gridArea: '4 / 1 / 6 / 5',
}

export const ButtonSendContact = styled.button`
  grid-area: 6 / 2 / 7 / 4;
  background: #00B83B;
  padding: 10px 40px;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 50px;
  justify-self: center;
  transition: background .15s ease-in-out, box-shadow .15s ease-in-out;
  height: 3.5vw;
  margin-top: 5px;

  :hover {
    background: #54a3ff;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }

  @media(max-width: 950px) {
    width: 50%;
    height: auto;
    margin-bottom: 15px;
  }
`
