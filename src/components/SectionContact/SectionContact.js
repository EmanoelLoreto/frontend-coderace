import React, { useCallback, useState } from 'react'

import axios from 'axios'

import { useToastAlert } from '../../utils'

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

const SectionFAQ = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const { ToastAlert, ToastUpdate } = useToastAlert()

  const storageData = localStorage.getItem('authToken')

  const [canSendContact, setCanSendContact] = useState(true)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  const sendContact = useCallback(
    (event) => {
      event.preventDefault()

      if (canSendContact) {
        setCanSendContact(false)

        ToastAlert({
          id: 'contact',
          message: 'Enviando contato...',
          type: 'info',
        })

        axios
          .post(`${ apiUrl }/contato`, {
            contact: form
          }, {
            headers: {
              Authorization: storageData,
            }
          })
          .then(() => {
            ToastUpdate({
              id: 'contact',
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
              id: 'contact',
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
    <Section id="contato" data-aos="fade-up">
      <TitleContact>Contato</TitleContact>
      <DescriptionContact>Entre em contato conosco.</DescriptionContact>

      <HrVerde />

      <ContainerFormContact onSubmit={ sendContact }>
        <InputContact
          id="nome"
          type="text"
          placeholder="Seu nome"
          required
          style={ inputNome }
          value={ form.nome }
          onChange={ (e) => setForm({ ...form, nome: e.target.value }) }
        />
        <InputContact
          id="email"
          type="email"
          placeholder="Seu email"
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
    </Section>
  )
}

export default SectionFAQ
