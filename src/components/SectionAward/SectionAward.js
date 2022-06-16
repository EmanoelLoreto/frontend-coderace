import React from 'react'

import {
  Section,
  CardAward,
  TitleAward,
  DescriptionAward,
  MoneyPrize,
  FirstPlaceAward,
  CardSubscription,
  TitleSubscription,
  UlRules,
  LiRules,
  HrCard,
  HrVerde,
  GreenSpan,
} from './SectionAward.styles'

import primeiroLugar from '../../assets/primeiro-lugar.png'

const SectionAward = () => (
  <Section>
    <TitleAward>Premiações</TitleAward>
    <DescriptionAward>
      Premiações para VII edição do Code Race
    </DescriptionAward>

    <HrVerde />

    <CardAward>
      <img
        id="primeiro-lugar"
        src={ primeiroLugar }
        alt="Icon"
        height="90%"
        width="70%"
      />

      <HrCard />

      <FirstPlaceAward>1º LUGAR</FirstPlaceAward>
      <MoneyPrize>R$ 4.000,00</MoneyPrize>
    </CardAward>

    <TitleAward>Inscrições abertas</TitleAward>
    <DescriptionAward>
      Confira o <GreenSpan>regulamento</GreenSpan> do Code Race
    </DescriptionAward>

    <HrVerde />

    <CardSubscription>
      <DescriptionAward>INSCRIÇÃO</DescriptionAward>
      <TitleSubscription>GRATUITA</TitleSubscription>

      <HrCard />

      <UlRules>
        <LiRules>Prazo da Inscrição: a definir</LiRules>
        <LiRules>Formato da Equipe: individual ou dupla</LiRules>
        <LiRules>
          Não será permitida a inscrição de uma mesma pessoa em mais de uma
          equipe
        </LiRules>
      </UlRules>
    </CardSubscription>
  </Section>
)

export default SectionAward
