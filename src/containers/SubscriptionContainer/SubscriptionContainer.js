import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  Formik, FieldArray, ErrorMessage, Form, Field
} from 'formik'

import { format as FormatCPF } from '@fnando/cpf' // import just one function

import Header from '../../components/Header'
import SectionAward from '../../components/SectionAward'
import SectionFAQ from '../../components/SectionFAQ'
import SectionContact from '../../components/SectionContact'
import SectionFooter from '../../components/SectionFooter'
import Footer from '../../components/Footer'

import registerFormSchema from '../../forms/schemas/subscriptionForm.schema'

import map from 'lodash/map'

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
  const [heightBackgroundImage, setHeightBackgroundImage] = useState('')
  const [selectedParticipant, setSelectedParticipant] = useState(1)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setHeightBackgroundImage(document.getElementById('section-home').getBoundingClientRect().height)
      )
    }
  }, [])

  const initialValues = {
    teamName: '',
    dataInscricao: new Date().toLocaleDateString('pt-BR'),
    participantsData: [
      {
        id: 1,
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        instituicao: '',
      }
    ]
  }

  const addParticipant = useCallback((values, setValues) => {
    setValues({
      ...values,
      participantsData: [
        ...values.participantsData,
        {
          id: values.participantsData.length + 1,
          nome: '',
          cpf: '',
          email: '',
          telefone: '',
          instituicao: '',
        }
      ]
    })
  }, [])

  const removeParticipant = useCallback((values, setValues) => {
    setValues({
      ...values,
      participantsData: values.participantsData.slice(0, -1)
    })
  }, [])

  const selectedParticipantIndex = useCallback((values) => (
    selectedParticipant > values.participantsData.length ? values.participantsData.length : selectedParticipant
  ), [selectedParticipant])

  const onSubmitSubscription = useCallback(
    (data) => {
      console.log(data)
    },
    [],
  )

  const InputFormik = useCallback(({ field, form, ...props }) => <Input { ...field } { ...props } />, [Input])

  const playerName = useCallback((participant, index) => (participant.nome !== '' ? participant.nome.split(' ')[0] : `Player ${ index + 1 }`),
    [],
  )

  return (
    <Container>
      <Header />
      <SectionHome id="section-home" height={ heightBackgroundImage }>
        <Formik onSubmit={ onSubmitSubscription } validationSchema={ registerFormSchema } initialValues={ initialValues }>
          {({ values, setValues }) => (
            <Form style={ { zIndex: 2 } }>
              <ContainerForm>
                <h1>Monte seu time</h1>
                <ContainerTeam>

                  <ContainerInputAndLabel>
                    <span>Escolha um nome para seu time:</span>
                    <Field name="teamName" type="text" component={ InputFormik } placeholder="Nome para a equipe" />
                    <ErrorMessage name="teamName" component={ LabelError } className="invalid-feedback" />
                  </ContainerInputAndLabel>

                  <ContainerInputAndLabel>
                    <span>Data da inscrição:</span>
                    <Field name="dataInscricao" type="text" component={ InputFormik } disabled />
                  </ContainerInputAndLabel>

                  <ButtonCreateTeam type="submit" value="Criar time" />
                </ContainerTeam>
                <HeaderParticipants>
                  {map(values.participantsData, (participant, index) => (
                    <AvatarAndName
                      key={ participant + index }
                    >
                      <IconParticipant
                        src={ require(`../../assets/avatars/avatar-${ index }.png`) }
                        alt="avatar"
                        onClick={ () => setSelectedParticipant(index + 1) }
                        selected={ selectedParticipantIndex(values) === (index + 1) }
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
                      style={ { display: selectedParticipantIndex(values) === (index + 1) ? 'grid' : 'none' } }
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
                        <ErrorMessage name={ `participantsData.${ index }.nome` } component={ LabelError } className="invalid-feedback" />
                      </ContainerInputAndLabel>

                      <ContainerInputAndLabel style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
                        <ContainerInputAndLabel style={ { flex: '1', marginRight: '15px' } }>
                          <span>CPF:</span>
                          <Field
                            name={ `participantsData.${ index }.cpf` }
                            type="text"
                            component={ InputFormik }
                            value={ FormatCPF(participantInitialValue.cpf) }
                            placeholder="CPF"
                          />
                          <ErrorMessage name={ `participantsData.${ index }.cpf` } component={ LabelError } className="invalid-feedback" />
                        </ContainerInputAndLabel>

                        <ContainerInputAndLabel style={ { flex: '1', marginLeft: '15px' } }>
                          <span>Telefone:</span>
                          <Field
                            name={ `participantsData.${ index }.telefone` }
                            type="text"
                            component={ InputFormik }
                            placeholder="(00) 00000-0000"
                          />
                          <ErrorMessage name={ `participantsData.${ index }.telefone` } component={ LabelError } className="invalid-feedback" />
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
                        <ErrorMessage name={ `participantsData.${ index }.email` } component={ LabelError } className="invalid-feedback" />
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
                  ))}
                </FieldArray>
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
