import React from 'react'

import {
  Section,
  ContainerAbout,
  TitleAbout,
  TextAbout,
  FrameVideo,
} from './SectionAbout.styles'

const SectionAbout = () => (
  <Section>
    <ContainerAbout data-aos="fade-up">
      <TitleAbout>Sobre o Code Race</TitleAbout>
      <TextAbout>
        Somos um campeonato de programação que acontece anualmente na
        Antonio Meneghetti Faculdade - AMF. Sempre carregando o objetivo de
        <b>gerar uma interação entre profissionais da área da tecnologia</b> e,
        através desta, dar maior visibilidade aos mesmos no mundo da TI.
        Participam do evento desde estudantes até grandes profissionais do
        mercado de TI, todos com vontade de aprender mais e desenvolver-se
        na área.
      </TextAbout>
      <TextAbout>
        Vem aí a mais nova edição Code Race. Neste ano o evento será on-line
        e contará com diversas novidades. Começando com um novo formato de
        evento (vamos resgatar as raízes), a composição dos times,
        inscrições gratuítas (em breve), premiações. Tudo para tornar o
        desafio ainda mais empolgante. Dia 26/11/2021 #coderace #amf #siamf
        #savethedate.
      </TextAbout>
    </ContainerAbout>
    <FrameVideo
      width="100%"
      src="https://www.youtube.com/embed/uen3jvi-WWc"
      title="CODE RACE VI"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      data-aos="fade-up"
    />
  </Section>
)

export default SectionAbout
