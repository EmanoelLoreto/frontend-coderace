import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { format as FormatCPF } from '@fnando/cpf' // import just one function

import subscriptionFormSchmea from '../../forms/schemas/subscriptionForm.schema'
// import telefoneFormatter from '../../forms/schemas/telefoneFormatter'

import {
  Input,
  InputDisabled,
  ContainerInputAndLabel,
  LabelError,
} from './FormikInput.styles'

import InputMask from '../MaskedInput'

const FormikInput = ({
  initialValues, type, style, onSubmitSubscription
}) => {
  // const onSubmit = useCallback((values) => {
  //   console.log(values)
  //   // fetch('/user/cadaster', {
  //   //   name: values.nome,
  //   //   password: values.senha,
  //   // }).then((response) => {
  //   //   // Redirecionar para pagina de login
  //   //   console.log(response)
  //   // }).catch((error) => {
  //   //   console.log(error)
  //   // })
  // }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: subscriptionFormSchmea(),
    onSubmitSubscription,
  })

  useEffect(() => {
    // console.log(formik)
    // console.log(type)
  }, [formik, type])

  return (
    <div style={ style }>
      {type === 'team' ? (
        <>
          <h1>Equipe</h1>
          <ContainerInputAndLabel>
            <span>Nome da equipe:</span>
            <Input
              id="teamName"
              name="teamName"
              value={ formik.values.teamName }
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              placeholder="Nome"
            />
            {formik.errors.teamName && formik.touched.teamName && (
              <LabelError className="label-error">{ formik.errors.teamName }</LabelError>
            )}
          </ContainerInputAndLabel>

          <ContainerInputAndLabel>
            <span>Data da inscrição:</span>
            <InputDisabled
              id="dataInscricao"
              name="dataInscricao"
              value={ new Date().toLocaleDateString('pt-BR') }
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              placeholder="Data inscrição"
              disabled
            />
            {formik.errors.dataInscricao && formik.touched.dataInscricao && (
            <LabelError className="label-error">{ formik.errors.dataInscricao }</LabelError>
            )}
          </ContainerInputAndLabel>

          <button onClick={ formik.handleSubmit } type="button" className="btn btn-primary mr-1">
            Buy Tickets
          </button>
        </>
      ) : '' }

      {type === 'participants' ? (
        <>
          <h1>Time</h1>
          <ContainerInputAndLabel>
            <span>Nome:</span>
            <Input
              id="nome"
              name="nome"
              value={ formik.values.nome }
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              placeholder="Nome e sobrenome"
            />
            {formik.errors.nome && formik.touched.nome && (
            <LabelError className="label-error">{ formik.errors.nome }</LabelError>
            )}
          </ContainerInputAndLabel>

          <ContainerInputAndLabel>
            <span>CPF:</span>
            <Input
              id="cpf"
              name="cpf"
              value={ FormatCPF(formik.values.cpf) }
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              placeholder="CPF"
            />
            {formik.errors.cpf && formik.touched.cpf && (
            <LabelError className="label-error">{ formik.errors.cpf }</LabelError>
            )}
          </ContainerInputAndLabel>

          <ContainerInputAndLabel>
            <span>E-mail:</span>
            <Input
              id="email"
              name="email"
              value={ formik.values.email }
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              placeholder="E-mail"
            />
            {formik.errors.email && formik.touched.email && (
            <LabelError className="label-error">{ formik.errors.email }</LabelError>
            )}
          </ContainerInputAndLabel>

          <ContainerInputAndLabel>
            <span>Telefone:</span>
            <InputMask
              id="telefone"
              name="telefone"
              value={ formik.values.telefone }
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              placeholder="(00) 00000-0000"
              guide
            />
            {formik.errors.telefone && formik.touched.telefone && (
              <LabelError className="label-error">{ formik.errors.telefone }</LabelError>
            )}
          </ContainerInputAndLabel>

          <ContainerInputAndLabel>
            <span>Instituição onde estuda/estudou:</span>
            <Input
              id="instituicao"
              name="instituicao"
              value={ formik.values.instituicao }
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              placeholder="Instituição de ensino"
            />
            {formik.errors.instituicao && formik.touched.instituicao && (
            <LabelError className="label-error">{ formik.errors.instituicao }</LabelError>
            )}
          </ContainerInputAndLabel>
        </>
      ) : '' }
    </div>
  )
}

export default FormikInput
