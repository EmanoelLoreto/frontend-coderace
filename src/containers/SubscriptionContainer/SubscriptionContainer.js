import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { useToastAlert, trimMask } from '../../utils'

import {
  Formik, FieldArray, ErrorMessage, Form, Field
} from 'formik'

import { format as FormatCPF } from '@fnando/cpf'

import Header from '../../components/Header'
import SectionAward from '../../components/SectionAward'
import SectionFAQ from '../../components/SectionFAQ'
import SectionContact from '../../components/SectionContact'
import SectionFooter from '../../components/SectionFooter'
import Footer from '../../components/Footer'
import InputMask from 'react-input-mask'

import registerFormSchema from '../../forms/schemas/subscriptionForm.schema'

import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

import {
  Container,
  SectionHome,
  ContainerForm,
  ContainerTeam,
  ContainerParticipants,
  HeaderParticipants,
  IconParticipant,
  IconAddParticipant,
  Input,
  ContainerInputAndLabel,
  LabelError,
  ButtonCreateTeam,
  AvatarAndName,
} from './SubscriptionContainer.styles'

const SubscriptionContainer = () => {
  const { ToastAlert, ToastUpdate } = useToastAlert()

  const [heightBackgroundImage, setHeightBackgroundImage] = useState('')
  const [heightHeaderMenu, setHeightHeaderMenu] = useState('')
  const [selectedParticipant, setSelectedParticipant] = useState(1)
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const apiUrl = process.env.REACT_APP_API_URL

  const setDimensions = useCallback(() => {
    setHeightBackgroundImage(
      document.getElementById('section-home')
        ? document.getElementById('section-home').getBoundingClientRect().height
        : ''
    )

    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    setTimeout(() => {
      setDimensions()
    }, 300)
  }, [document, window])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        setDimensions()
      }, true)

      setHeightHeaderMenu(
        document.getElementById('header-coderace')
          ? document.getElementById('header-coderace').getBoundingClientRect().height
          : ''
      )

      setTimeout(() => {
        setDimensions()
      }, 300)
    }

    Aos.init({ duration: 1500 })
  }, [document, window])

  const initialValues = {
    teamName: '',
    dataInscricao: new Date().toLocaleDateString('pt-BR'),
    participantsData: [
      {
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        instituicao: '',
      },
    ],
  }

  const addParticipant = useCallback((values, setValues) => {
    setValues({
      ...values,
      participantsData: [
        ...values.participantsData,
        {
          nome: '',
          cpf: '',
          email: '',
          telefone: '',
          instituicao: '',
        },
      ],
    })
  }, [])

  const removeParticipant = useCallback((values, setValues) => {
    setValues({
      ...values,
      participantsData: values.participantsData.slice(0, -1),
    })
  }, [])

  const selectedParticipantIndex = useCallback(
    (values) => (selectedParticipant > values.participantsData.length
      ? values.participantsData.length
      : selectedParticipant),
    [selectedParticipant]
  )

  const onSubmitSubscription = useCallback(
    (data, formik) => {
      ToastAlert({
        id: 'creating-team',
        message: 'Criando time...',
        type: 'info',
      })

      const participantsData = map(data.participantsData, (participant) => ({
        ...participant,
        cpf: trimMask(participant.cpf),
        telefone: trimMask(participant.telefone),
      }))

      axios
        .post(`${ apiUrl }/inscricao`, {
          teamData: {
            nome: data.teamName,
            dataInscricao: data.dataInscricao,
          },
          participantsData,
        })
        .then(() => {
          formik.resetForm()
          ToastUpdate({
            id: 'creating-team',
            message: 'Time criado com sucesso!',
            type: 'success',
            autoClose: 6000,
          })
        })
        .catch((error) => {
          ToastUpdate({
            id: 'creating-team',
            message: 'Erro ao criar o time.',
            type: 'error',
            autoClose: 6000,
          })

          ToastAlert({
            message: error?.response?.data?.error?.message ?? 'Erro 404',
            type: 'warning',
            autoClose: 6000,
          })
        })
    },
    [apiUrl]
  )

  const InputFormik = useCallback(
    ({ field, form, ...props }) => <Input { ...field } { ...props } />,
    [Input]
  )

  const playerName = useCallback(
    (participant, index) => (participant.nome !== ''
      ? participant.nome.split(' ')[0]
      : `Player ${ index + 1 }`),
    []
  )

  const hasErrorPlayer = useCallback(
    (errors, touched, index) => !isEmpty(errors)
      && !isEmpty(touched)
      && !isEmpty(errors?.participantsData)
      && !isEmpty(touched?.participantsData)
      && !isEmpty(errors?.participantsData[index])
      && !isEmpty(touched?.participantsData[index])
      && ((errors.participantsData[index].nome
        && touched.participantsData[index].nome)
        || (errors.participantsData[index].cpf
          && touched.participantsData[index].cpf)
        || (errors.participantsData[index].email
          && touched.participantsData[index].email)
        || (errors.participantsData[index].telefone
          && touched.participantsData[index].telefone)),
    []
  )

  return (
    <Container>
      <Header />
      <SectionHome id="section-home" height={ heightBackgroundImage }>
        <Formik
          onSubmit={ onSubmitSubscription }
          validationSchema={ registerFormSchema }
          initialValues={ initialValues }
        >
          {({
            values, setValues, errors, touched, handleChange, handleBlur
          }) => (
            <Form style={ { zIndex: 2 } }>
              <ContainerForm height={ heightHeaderMenu }>
                <h1>Monte seu time</h1>
                <ContainerTeam>
                  <ContainerInputAndLabel>
                    <span>Escolha um nome para seu time:</span>
                    <Field
                      name="teamName"
                      type="text"
                      component={ InputFormik }
                      placeholder="Nome para a equipe"
                    />
                    <ErrorMessage
                      name="teamName"
                      component={ LabelError }
                      className="invalid-feedback"
                    />
                  </ContainerInputAndLabel>

                  <ContainerInputAndLabel>
                    <span>Data da inscrição:</span>
                    <Field
                      name="dataInscricao"
                      type="text"
                      component={ InputFormik }
                      disabled
                    />
                  </ContainerInputAndLabel>

                  {windowDimensions.width > 950 && (
                    <ButtonCreateTeam type="submit" value="Criar time" />
                  )}
                </ContainerTeam>
                <HeaderParticipants>
                  {map(values.participantsData, (participant, index) => (
                    <AvatarAndName
                      key={ participant + index }
                      selected={ selectedParticipantIndex(values) === index + 1 }
                      error={ hasErrorPlayer(errors, touched, index) }
                    >
                      <IconParticipant
                        src={ require(`../../assets/avatars/avatar-${ index }.png`) }
                        alt="avatar"
                        onClick={ () => setSelectedParticipant(index + 1) }
                        selected={
                          selectedParticipantIndex(values) === index + 1
                        }
                      />
                      <h4>{playerName(participant, index)}</h4>
                    </AvatarAndName>
                  ))}
                  {values.participantsData.length < 5 && (
                  <IconAddParticipant
                    src={ require('../../assets/botao-adicionar.png') }
                    alt="botao-add"
                    onClick={ () => addParticipant(values, setValues) }
                    style={ { width: '36px', height: '36px' } }
                  />
                  )}
                  {values.participantsData.length > 1 && (
                  <IconAddParticipant
                    src={ require('../../assets/botao-remover.png') }
                    alt="botao-remove"
                    onClick={ () => removeParticipant(values, setValues) }
                  />
                  )}
                </HeaderParticipants>
                <FieldArray name="participantsData">
                  {() => map(values?.participantsData, (participantInitialValue, index) => (
                    <ContainerParticipants
                      key={ index }
                      style={ {
                        display:
                          selectedParticipantIndex(values) === index + 1
                            ? 'grid'
                            : 'none',
                      } }
                    >
                      <ContainerInputAndLabel>
                        <span>Nome:</span>
                        <Field
                          name={ `participantsData.${ index }.nome` }
                          type="text"
                          component={ InputFormik }
                          placeholder="Seu nome"
                          value={ participantInitialValue.nome }
                        />
                        <ErrorMessage
                          name={ `participantsData.${ index }.nome` }
                          component={ LabelError }
                          className="invalid-feedback"
                        />
                      </ContainerInputAndLabel>

                      <ContainerInputAndLabel
                        style={ {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        } }
                      >
                        <ContainerInputAndLabel
                          style={ { flex: '1', marginRight: '15px' } }
                        >
                          <span>CPF:</span>
                          <Field
                            name={ `participantsData.${ index }.cpf` }
                            type="text"
                            component={ InputFormik }
                            value={ FormatCPF(participantInitialValue.cpf) }
                            placeholder="CPF"
                          />
                          <ErrorMessage
                            name={ `participantsData.${ index }.cpf` }
                            component={ LabelError }
                            className="invalid-feedback"
                          />
                        </ContainerInputAndLabel>

                        <ContainerInputAndLabel
                          style={ { flex: '1', marginLeft: '15px' } }
                        >
                          <span>Telefone:</span>
                          <InputMask
                            mask="(99) 99999-9999"
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.participantsData[index].telefone }
                          >
                            {(inputProps) => (
                              <Field
                                { ...inputProps }
                                name={ `participantsData.${ index }.telefone` }
                                id={ `participantsData.${ index }.telefone` }
                                type="text"
                                component={ InputFormik }
                                placeholder="(00) 00000-0000"
                              />
                            )}
                          </InputMask>
                          <ErrorMessage
                            name={ `participantsData.${ index }.telefone` }
                            component={ LabelError }
                            className="invalid-feedback"
                          />
                        </ContainerInputAndLabel>
                      </ContainerInputAndLabel>

                      <ContainerInputAndLabel>
                        <span>E-mail:</span>
                        <Field
                          name={ `participantsData.${ index }.email` }
                          type="text"
                          component={ InputFormik }
                          placeholder="E-mail"
                        />
                        <ErrorMessage
                          name={ `participantsData.${ index }.email` }
                          component={ LabelError }
                          className="invalid-feedback"
                        />
                      </ContainerInputAndLabel>

                      <ContainerInputAndLabel>
                        <span>Instituição onde estuda/estudou:</span>
                        <Field
                          name={ `participantsData.${ index }.instituicao` }
                          type="text"
                          component={ InputFormik }
                          placeholder="Instituição"
                        />
                      </ContainerInputAndLabel>
                    </ContainerParticipants>
                  )
                  )}
                </FieldArray>
                {windowDimensions.width <= 950 && (
                <ButtonCreateTeam type="submit" value="Criar time" />
                )}
              </ContainerForm>
            </Form>
          )}
        </Formik>
      </SectionHome>

      <SectionAward />

      <SectionFAQ />

      <SectionContact />

      <SectionFooter />

      <Footer />
    </Container>
  )
}
export default SubscriptionContainer
