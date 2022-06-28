/* eslint-disable global-require */
import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
`

export const SectionLogin = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    width: 40vw;
    margin: 15px 0;
  }
`

export const SubContainer = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px 2vw;
`

export const ContainerFormLogin = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export const InputLogin = styled.input`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: px;
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
`

export const inputUser = {
  gridArea: '1 / 1 / 2 / 5',
}

export const inputSenha = {
  gridArea: '2 / 1 / 3 / 5',
}

export const IconAwesome = styled.a`
  font-size: 18px;
  background: #0f0f0f;
  color: #eee;
  margin-right: 4px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-top: 10px;
  margin-right: 15px;

  :hover {
    :before {
      color: #54a3ff;
    }  
  }

  :before {
    font-family: FontAwesome;
    content: "${ ({ icon }) => icon }";
    transform: scale(1, 1);
    color: #fff;
    background: #0f0f0f;
    margin-top: 5px;
    margin-left: -7px;
    position: absolute;
    transition: all 0.3s ease-in-out 0s;
  }
`
export const ButtonLogin = styled.button`
  grid-area: 3 / 3 / 4 / 5;
  background: #0181D4;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 0.1rem;
  border-radius: 18px;
  margin-top: 5px;

  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;

  transition: all 0.5s;
  :hover {
    background: #54a3ff;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const ButtonVoltar = styled.button`
  grid-area: 3 / 1 / 4 / 3;
  background: #727272;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 0.1rem;
  border-radius: 18px;
  margin-top: 5px;

  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;

  transition: all 0.5s;
  :hover {
    background: #54a3ff;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`
