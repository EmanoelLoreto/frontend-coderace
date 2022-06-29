import React, { useCallback, useContext } from 'react'
import LoginScreen from '../screens/LoginScreen'
import { AuthContext } from './AuthContext'

import { debounce } from 'lodash'

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext)

  const redirect = () => useCallback(debounce(() => <LoginScreen />, 1000), [])

  if (!auth?.user) {
    redirect()
  }

  return children
}
