import React, {
  useCallback, useMemo, useState
} from 'react'

import Header from '../../components/Header'
import SectionAward from '../../components/SectionAward'
import SectionFAQ from '../../components/SectionFAQ'
import SectionContact from '../../components/SectionContact'
import SectionFooter from '../../components/SectionFooter'
import Footer from '../../components/Footer'

import { Formik } from 'formik'

import map from 'lodash/map'

import {
  Container,
  SectionHome,
  ContainerForm,
  ContainerTeam,
  ContainerParticipants,
  HeaderParticipants,
  IconParticipant,
  IconAddParticipant
} from './SubscriptionContainer.styles'

import InputFormik from '../../components/FormikInput'

const SubscriptionContainer = () => {
  const initialValues = {
    teamData: {
      teamName: '',
      dataInscricao: ''
    },
    participantsData: []
  }

  const [selectedParticipant, setSelectedParticipant] = useState(1)

  const [participants, setParticipants] = useState([
    {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      instituicao: '',
      id: 1,
    }
  ])

  const addParticipant = useCallback(() => {
    setParticipants([
      ...participants,
      {
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        instituicao: '',
        id: participants.length + 1,
      }
    ])
  }, [participants])

  const removeParticipant = useCallback(() => {
    setParticipants([...participants.slice(0, -1)])
  }, [participants])

  const selectedParticipantIndex = useMemo(() => (
    selectedParticipant > participants.length ? participants.length : selectedParticipant
  ), [selectedParticipant, participants])

  const onSubmitSubscription = useCallback(
    (data) => {
      console.log(data)
    },
    [],
  )

  return (
    <Container>
      <Header />
      <SectionHome>
        <ContainerForm>
          <h1>Monte seu time</h1>
          <ContainerTeam>
            <InputFormik type="team" initialValues={ initialValues.teamData } />
          </ContainerTeam>
          <HeaderParticipants>
            {map(participants, (participant, index) => (
              <IconParticipant
                src={ require(`../../assets/avatars/avatar-${ index }.png`) }
                alt="avatar"
                key={ participant + index }
                onClick={ () => setSelectedParticipant(index + 1) }
              />
            ))}
            {participants.length < 5 && (
              <IconAddParticipant
                src={ require('../../assets/botao-adicionar.png') }
                alt="botao-add"
                onClick={ () => addParticipant() }
                style={ { width: '36px', height: '36px' } }
              />
            )}
            {participants.length > 1 && (
              <IconAddParticipant
                src={ require('../../assets/botao-remover.png') }
                alt="botao-remove"
                onClick={ () => removeParticipant() }
              />
            )}
          </HeaderParticipants>
          <Formik onSubmit={ onSubmitSubscription }>
            <ContainerParticipants>
              {map(participants, (participantInitialValue, index) => (
                <InputFormik
                  style={ { display: selectedParticipantIndex === (index + 1) ? 'initial' : 'none' } }
                  type="participants"
                  initialValues={ participantInitialValue }
                  key={ index }
                  onSubmitSubscription={ onSubmitSubscription }
                />
              ))}
            </ContainerParticipants>
          </Formik>
        </ContainerForm>
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
