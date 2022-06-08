import styled from 'styled-components'

export const ContainerQuestion = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`

export const TitleQuestion = styled.h2`
  display: flex;
  justify-content: space-between;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  line-height: 24px;
  font-weight: 600;
  padding-right: 10px;
  transition: all 0.5s;
  color: ${ ({ stateDropdown }) => (stateDropdown ? '#54a3ff' : '#000') };
  cursor: pointer;
  width: 100%;

  :after {
    font-family: FontAwesome;
    content: "\f055";
    color: ${ ({ stateDropdown }) => (stateDropdown ? '#54a3ff' : '#000') };
    transform: scale(1,1);
    margin-top: 2px;
    transition: all 0.5s;
  }
`

export const AnswerQuestion = styled.span`
  visibility: ${ ({ stateDropdown }) => (stateDropdown ? 'inherit' : 'hidden') };
  height: ${ ({ stateDropdown }) => (stateDropdown ? '50px' : '0px') };
  transition: height 0.3s;
  cursor: pointer;
`
