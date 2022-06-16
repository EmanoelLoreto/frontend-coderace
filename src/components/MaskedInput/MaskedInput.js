import React, { useRef } from 'react'
import MaskedInput from 'react-text-mask'

import './MaskedInput.css'

const InputMask = (props) => {
  const {
    guide, onChange, value, ...otherProps
  } = props

  const inputElement = useRef(null)

  const mask = [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]

  return (
    <MaskedInput
      className="masked-input"
      ref={ inputElement }
      mask={ mask }
      guide={ guide }
      value={ value }
      onChange={ onChange }
      { ...otherProps }
    />
  )
}

export default InputMask
