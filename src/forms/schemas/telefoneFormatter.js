const telefoneFormatter = number => {
  if (!number) return null

  let regexp = ''

  if (number.length === 10) {
    regexp = /^(\d{2})(\d{4})(\d{4})$/
  } else if (number.length === 11) {
    regexp = /^(\d{2})(\d{1})(\d{4})(\d{4})$/
  }

  const match = number.match(regexp)

  if (match) {
    if (number.length === 10) {
      return ['(', match[1], ') ', match[2], '-', match[3]].join('')
    }
    return ['(', match[1], ') ', match[2], match[3], '-', match[4]].join('')
  }
  return number
}

export default telefoneFormatter
