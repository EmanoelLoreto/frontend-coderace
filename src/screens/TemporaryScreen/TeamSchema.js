import * as Yup from 'yup'
import { cpfValidator, emailValidator, nomeCompletoValidator } from '../../utils'

export const teamSchema = () => Yup.object().shape({
  teamName: Yup.string()
    .required('Nome da equipe obrigatório')
    .min(2, 'Deve ser maior que 2 caracteres'),

  participantsData: Yup.array().of(
    Yup.object().shape({
      nome: Yup.string()
        .required('Nome obrigatório')
        .test('isValidNomeCompleto', 'Deve possuir nome e sobrenome', nomeCompletoValidator),

      cpf: Yup.string()
        .required('CPF obrigatório')
        .test('isValidCpfOrCnpj', 'Deve ser um CPF válido', cpfValidator),

      email: Yup.string()
        .required('Email obrigatório')
        .test('isValidEmail', 'Deve ser um email válido', emailValidator),

      telefone: Yup.string()
        .required('Telefone obrigatório')
        .min(11, 'Telefone inválido')
    })
  )
})
