/* eslint-disable global-require */
import styled from 'styled-components'

export const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  flex: 1;
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
