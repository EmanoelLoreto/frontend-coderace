// const validator = require('@fnando/cpf/commonjs')

import { isValid } from '@fnando/cpf' // import just one function

const cpfValidator = cpf => isValid(cpf)

export default cpfValidator
