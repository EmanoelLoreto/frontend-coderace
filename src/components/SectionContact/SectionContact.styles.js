import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 0px 5vw;
  scroll-margin-top: 70px;
`

export const TitleContact = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DescriptionContact = styled.span`
  text-align: center;
  margin: 0 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #9195a2;
`

export const ContainerFormContact = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 60vw;
  margin: 10px 0 2vw;

  @media(max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
    width: 80%;
  }
`

export const inputNome = {
  gridArea: '1 / 1 / 2 / 2',
}

export const inputEmail = {
  gridArea: '1 / 2 / 2 / 3',
}

export const inputAssunto = {
  gridArea: '2 / 1 / 3 / 3',
}

export const inputMensagem = {
  gridArea: '3 / 1 / 5 / 3',
}

export const ButtonSendContact = styled.button`
  grid-area: 5 / 1 / 6 / 3;
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
    height: auto;
    width: 70%;
    margin-bottom: 10px;
  }
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid #00B83B;
`
