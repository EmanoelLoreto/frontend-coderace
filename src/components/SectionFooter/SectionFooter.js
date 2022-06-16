import React from 'react'

import {
  HrVerde,
  Section,
  ContainerFooterAboutAndContact,
  ContainerFooterAbout,
  TextAboutFooter,
  ContainerFooterContact,
  TitleFooterContact,
  AndressContact,
  IconAwesome,
  IconsContacts,
  LinkGreen,
} from './SectionFooter.styles'

import logoCoderace from '../../assets/logo-coderace.png'

const SectionFooter = () => (
  <Section>
    <ContainerFooterAboutAndContact>
      <ContainerFooterAbout>
        <img
          id="logo-coderace"
          src={ logoCoderace }
          height="40px"
          width="150px"
          alt="Icon"
        />
        <TextAboutFooter>
          O Code Race foi fundado em 2013 por três alunos da Antonio
          Meneghetti Faculdade e desde então acontece anualmente na própria
          instituição. Como objetivo traz a inclusão de alunos do curso de
          Sistema de Informação no mundo dos negócios oferecendo a
          possibilidade de se testarem nas diversas áreas da organização que
          o evento abrange.
        </TextAboutFooter>
        <TextAboutFooter>
          Desde sua primeira edição o Code Race conta com o apoio da Antonio
          Meneghetti Faculdade e da Fundação Antonio Meneghetti que
          disponibiliza recursos para a realização do campeonato. Para saber
          mais acesse{' '}
          <LinkGreen href="www.faculdadeam.edu.br" target="_blank">
            www.faculdadeam.edu.br
          </LinkGreen>{' '}
          e{' '}
          <LinkGreen href="www.fundacaoam.org.br" target="_blank">
            www.fundacaoam.org.br
          </LinkGreen>
          .
        </TextAboutFooter>
      </ContainerFooterAbout>
      <ContainerFooterContact>
        <TitleFooterContact>Contato</TitleFooterContact>

        <HrVerde />

        <AndressContact>Estrada Recanto Maestro, nº 338</AndressContact>
        <AndressContact>Restinga Sêca-RS</AndressContact>
        <AndressContact>97200-000, Brasil</AndressContact>
        <AndressContact>
          <b>Email:</b> contato@coderace.com.br
        </AndressContact>

        <IconsContacts>
          <IconAwesome
            icon="\f09a"
            href="https://www.facebook.com/coderaceamf/"
            target="_blank"
          />
          <IconAwesome
            icon="\f16d"
            href="https://www.instagram.com/code.race/"
            target="_blank"
          />
          <IconAwesome
            icon="\f0e0"
            href="mailto:contato@coderace.com.br?subject=Duvida"
            target="_blank"
          />
        </IconsContacts>
      </ContainerFooterContact>
    </ContainerFooterAboutAndContact>
  </Section>
)

export default SectionFooter
