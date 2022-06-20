import styled from 'styled-components'

export const ContainerQuestion = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

  @media(max-width: 950px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
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
    margin-left: 10px;
    transition: all 0.5s;
  }

  @media(max-width: 950px) {
    padding: 0px;
  }
`

export const AnswerQuestion = styled.span`
  visibility: ${ ({ stateDropdown }) => (stateDropdown ? 'inherit' : 'hidden') };
  height: ${ ({ stateDropdown }) => (stateDropdown ? '70px' : '0px') };
  transition: height 0.3s;
  cursor: pointer;

  @media(max-width: 950px) {
    height: ${ ({ stateDropdown }) => (stateDropdown ? '' : '0px') };
  }
`
