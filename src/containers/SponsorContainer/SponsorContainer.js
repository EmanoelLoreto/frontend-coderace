import React, { useCallback, useState } from 'react'

import axios from 'axios'

import { useToastAlert } from '../../utils'

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

const SponsorContainer = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const { ToastAlert, ToastUpdate } = useToastAlert()

  const [canSendContact, setCanSendContact] = useState(true)
  const [form, setForm] = useState({
    nomeEmpresa: '',
    responsavel: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  const sendSponsor = useCallback(
    (event) => {
      event.preventDefault()

      if (canSendContact) {
        setCanSendContact(false)

        ToastAlert({
          id: 'sponsor',
          message: 'Enviando contato...',
          type: 'info',
        })

        axios
          .post(`${ apiUrl }/patrocinio`, {
            sponsor: form
          })
          .then(() => {

            ToastUpdate({
              id: 'sponsor',
              message: 'Contato enviado com sucesso!',
              type: 'success',
              autoClose: 6000,
            })

            setTimeout(() => {
              setCanSendContact(true)
            }, 120000)
          })
          .catch((error) => {
            setCanSendContact(true)
            ToastUpdate({
              id: 'sponsor',
              message: 'Erro ao enviar o contato, contate um adminstrador.',
              type: 'error',
              autoClose: 6000,
            })

            ToastAlert({
              message: error?.response?.data?.error?.message ?? 'Erro 404',
              type: 'error',
              autoClose: 6000,
            })
          })
      } else {
        ToastAlert({
          message: 'Você deve esperar 2 minutos para enviar outra mensagem.',
          type: 'info',
          autoClose: 6000,
        })
      }
    },
    [form, canSendContact],
  )
  return (
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

          <ContainerFormContact onSubmit={ sendSponsor }>
            <InputContact
              id="nomeEmpresa"
              type="text"
              placeholder="Nome da empresa"
              required
              style={ inputNome }
              value={ form.nomeEmpresa }
              onChange={ (e) => setForm({ ...form, nomeEmpresa: e.target.value }) }
            />
            <InputContact
              id="responsavel"
              type="text"
              placeholder="Responsável"
              required
              style={ inputResponsavel }
              value={ form.responsavel }
              onChange={ (e) => setForm({ ...form, responsavel: e.target.value }) }
            />
            <InputContact
              id="telefone"
              type="text"
              placeholder="Telefone"
              required
              style={ inputTelefone }
              value={ form.telefone }
              onChange={ (e) => setForm({ ...form, telefone: e.target.value }) }
            />
            <InputContact
              id="email"
              type="email"
              placeholder="Email"
              required
              style={ inputEmail }
              value={ form.email }
              onChange={ (e) => setForm({ ...form, email: e.target.value }) }
            />
            <InputContact
              id="assunto"
              type="text"
              placeholder="Assunto"
              required
              style={ inputAssunto }
              value={ form.assunto }
              onChange={ (e) => setForm({ ...form, assunto: e.target.value }) }
            />
            <InputMessage
              id="mensagem"
              type="textarea"
              placeholder="Mensagem"
              required
              style={ inputMensagem }
              value={ form.mensagem }
              onChange={ (e) => setForm({ ...form, mensagem: e.target.value }) }
            />
            <ButtonSendContact type="submit">Enviar mensagem</ButtonSendContact>
          </ContainerFormContact>
        </ContainerSponsor>
      </Section>

      <SectionFooter />

      <Footer />
    </Container>
  )
}

export default SponsorContainer
