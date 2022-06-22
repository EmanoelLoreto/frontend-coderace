import reduce from 'lodash/reduce'

const trimMask = str => {
  const specialChars = [' ', '.', '_', '-', '(', ')', '/']

  return reduce(
    specialChars,
    (strTrim, char) => strTrim.split(char).join(''),
    str
  )
}

export default trimMask
