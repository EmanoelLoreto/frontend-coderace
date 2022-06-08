import React, { useState } from 'react'

import {
  ContainerQuestion,
  TitleQuestion,
  AnswerQuestion,
} from './Dropdown.styles'

const Dropdown = ({ question, answer }) => {
  const [stateDropdown, setStateDropdown] = useState(false)

  return (
    <ContainerQuestion>
      <TitleQuestion
        onClick={ () => setStateDropdown(!stateDropdown) }
        stateDropdown={ stateDropdown }
      >
        { question }
      </TitleQuestion>
      <AnswerQuestion
        onClick={ () => setStateDropdown(!stateDropdown) }
        stateDropdown={ stateDropdown }
      >
        { answer }
      </AnswerQuestion>
    </ContainerQuestion>
  )
}

export default Dropdown
