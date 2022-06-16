import React from 'react'

import map from 'lodash/map'

import Dropdown from '../Dropdown'

import {
  ContainerFAQ,
  HrCard,
  HrVerde,
  Section,
  TitleFAQ,
} from './SectionFAQ.styles'

const SectionFAQ = () => {
  const questionsFAQ = [
    {
      question: 'Qual linguagem de programação pode ser usada?',
      answer:
        'A linguagem de programação fica por conta da equipe. Não restringimos nenhuma linguagem. É de livre escolha.',
    },
    {
      question: 'Os integrantes precisam ser da mesma instituição?',
      answer: `Não. Os integrantes podem ser de instituições diferentes,
        diferentes idades e diferentes níveis de conhecimento. Podem estar graduando ou ser graduado.
      `,
    },
    {
      question: 'Quantos integrantes pode ter a equipe?',
      answer:
        'A equipe pode ser composta por no mínimo 1 (um) integrante e no máximo 5 (cinco) integrantes.',
    },
  ]

  return (
    <Section>
      <TitleFAQ>F.A.Q</TitleFAQ>

      <HrVerde />

      <ContainerFAQ>
        {map(questionsFAQ, (questionFAQ) => (
          <div key={ questionFAQ.question }>
            <Dropdown
              question={ questionFAQ.question }
              answer={ questionFAQ.answer }
            />
            <HrCard />
          </div>
        ))}
      </ContainerFAQ>
    </Section>
  )
}

export default SectionFAQ
