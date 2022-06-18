import React from 'react'

import Header from '../../components/Header/Header'
import SectionFooter from '../../components/SectionFooter/SectionFooter'
import Footer from '../../components/Footer/Footer'

import {
  Container,
  DescriptionSponsor,
  HrVerde,
  Section,
  TitleSponsor,
  ContainerSponsor,
  ContainerFormContact,
  InputContact,
  inputNome,
  inputEmail,
  inputAssunto,
  inputMensagem,
  InputMessage,
  ButtonSendContact,
  inputResponsavel,
  inputTelefone,
} from './SponsorContainer.styles'

const SponsorContainer = () => (
  <Container>
    <Header transparent={ false } />

    <Section>
      <TitleSponsor>Organização</TitleSponsor>
      <DescriptionSponsor>
        Code Race e você, uma parceria de Sucesso!
      </DescriptionSponsor>

      <HrVerde />

      <ContainerSponsor>
        <span>
          Somos um campeonato de programação que acontece anualmente na
          Antonio Meneghetti Faculdade - AMF, este ano chegamos a nossa VI
          edição. Sempre carregando o objetivo de <b>gerar uma interação entre
            profissionais da área da tecnologia e, através desta, dar maior
            visibilidade aos mesmos no mundo da TI</b>. Participam do evento desde
          estudantes até grandes profissionais do mercado de TI, todos com
          vontade de aprender mais e desenvolver-se na área.
        </span>
        <span>
          O Code Race acontece em três grandes momentos, abertura onde será
          realizado com a presença de um grande palestrante, desenvolvimento
          momento em que os participantes pensam e desenvolvem sua aplicação e
          por fim o grande encerramento com resultado e a entrega da premiação
          para o campeão. Gostaríamos que você e sua empresa fizessem parte
          deste grande evento, para isso disponibilizamos o&nbsp;
          <b>material de patrocínios que pode ser acessado através deste</b> link.
        </span>

        <h3>Preencha o formulário abaixo para entraremos em contato!</h3>

        <ContainerFormContact>
          <InputContact
            id="nome"
            type="text"
            placeholder="Nome da empresa"
            required
            style={ inputNome }
          />
          <InputContact
            id="responsavel"
            type="text"
            placeholder="Responsável"
            required
            style={ inputResponsavel }
          />
          <InputContact
            id="telefone"
            type="text"
            placeholder="Telefone"
            required
            style={ inputTelefone }
          />
          <InputContact
            id="email"
            type="email"
            placeholder="Email"
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
      </ContainerSponsor>
    </Section>

    <SectionFooter />

    <Footer />
  </Container>
)

export default SponsorContainer
