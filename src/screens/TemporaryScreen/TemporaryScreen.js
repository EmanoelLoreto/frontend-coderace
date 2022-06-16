import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'
import { teamSchema } from './TeamSchema'

const initialValues = {
  teamName: '',
  participantsData: [
    {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      instituicao: '',
      id: 1,
    },
    {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      instituicao: '',
      id: 2,
    }
  ]
}

const TemporaryScreen = () => {
  const onSubmit = fields => {
    console.log(fields)
  }

  return (
    <Formik validationSchema={ teamSchema } initialValues={ initialValues }  onSubmit={ onSubmit }>
      {({ values }) => (
        <Form>
          <h1>Formulário de cadastro</h1>
          <Field name="teamName" type="text" />
          <ErrorMessage name="teamName" component="div" className="invalid-feedback" />

          <h3>Listagem de participantes</h3>
          <FieldArray name="participantsData">
            <>
              { values.participantsData.map((item, index) => (
                <div key={ index }>
                  <Field name={ `participantsData.${ index }.nome` } type="text" />
                  <ErrorMessage name={ `participantsData.${ index }.nome` } component="div" className="invalid-feedback" />
                  
                  <Field name={ `participantsData.${ index }.cpf` } type="text" />
                  <ErrorMessage name={ `participantsData.${ index }.cpf` } component="div" className="invalid-feedback" />
                  
                  <Field name={ `participantsData.${ index }.email` } type="text" />
                  <ErrorMessage name={ `participantsData.${ index }.email` } component="div" className="invalid-feedback" />
                  
                  <Field name={ `participantsData.${ index }.telefone` } type="text" />
                  <ErrorMessage name={ `participantsData.${ index }.telefone` } component="div" className="invalid-feedback" />
                  
                  <Field name={ `participantsData.${ index }.instituicao` } type="text" />
                  <ErrorMessage name={ `participantsData.${ index }.instituicao` } component="div" className="invalid-feedback" />

                  <hr />
                </div>
              )) }
            </>
          </FieldArray>
          <input type="submit" label="Validar :D" />
        </Form>
      )}
    </Formik>
  )
}

export default TemporaryScreen