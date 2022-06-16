// Regex para validar email
const regexPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

const emailValidator = email => regexPattern.test(email)

export default emailValidator
