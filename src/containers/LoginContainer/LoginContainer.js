import React, { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  SectionLogin,
  SubContainer,
  ContainerFormLogin,
  InputLogin,
  inputUser,
  inputSenha,
  ButtonLogin,
  ButtonVoltar,
} from './LoginContainer.styles'

import imgFundo from '../../assets/background-about.png'
import imgLogoCodeRace from '../../assets/logo-coderace.png'
import { AuthContext } from '../../auth/AuthContext'

const LoginContainer = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const goBack = useCallback(() => {
    navigate('/')
  }, [navigate])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      auth.signin({ ...form })
    },
    [form],
  )

  return (
    <Container>
      <SectionLogin style={ { backgroundImage: `url( ${ imgFundo } )` } }>
        <SubContainer>
          <img
            src={ imgLogoCodeRace }
            alt="Icon"
          />
          <ContainerFormLogin onSubmit={ handleSubmit }>
            <InputLogin
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
              style={ inputUser }
              value={ form.email }
              onChange={ (e) => setForm({ ...form, email: e.target.value }) }
            />
            <InputLogin
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              required
              style={ inputSenha }
              value={ form.password }
              onChange={ (e) => setForm({ ...form, password: e.target.value }) }
            />
            <ButtonVoltar onClick={ goBack }>Voltar</ButtonVoltar>
            <ButtonLogin type="submit">Acessar</ButtonLogin>
          </ContainerFormLogin>
        </SubContainer>
      </SectionLogin>
    </Container>
  )
}

export default LoginContainer
