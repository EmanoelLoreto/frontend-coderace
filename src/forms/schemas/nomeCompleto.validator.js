// Regex para exigir nome e sobrenome pelo menos
const regexPattern = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/

const nomeCompletoValidator = name => regexPattern.test(name)

export default nomeCompletoValidator
