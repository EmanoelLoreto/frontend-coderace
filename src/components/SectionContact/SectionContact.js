import React from 'react'

import {
  Section,
  TitleContact,
  DescriptionContact,
  ContainerFormContact,
  InputContact,
  inputNome,
  inputEmail,
  inputAssunto,
  inputMensagem,
  InputMessage,
  ButtonSendContact,
  HrVerde,
} from './SectionContact.styles'

const SectionFAQ = () => (
  <Section id="contato" data-aos="fade-up">
    <TitleContact>Contato</TitleContact>
    <DescriptionContact>Entre em contato conosco.</DescriptionContact>

    <HrVerde />

    <ContainerFormContact>
      <InputContact
        id="nome"
        type="text"
        placeholder="Seu nome"
        required
        style={ inputNome }
      />
      <InputContact
        id="email"
        type="email"
        placeholder="Seu email"
        required
        style={ inputEmail }
      />
      <InputContact
        id="assunto"
        type="text"
        placeholder="Assunto"
        required
        style={ inputAssunto }
      />
      <InputMessage
        id="mensagem"
        type="textarea"
        placeholder="Mensagem"
        required
        style={ inputMensagem }
      />
      <ButtonSendContact>Enviar mensagem</ButtonSendContact>
    </ContainerFormContact>
  </Section>
)

export default SectionFAQ
