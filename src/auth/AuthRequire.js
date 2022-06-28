import React, { useCallback, useContext } from 'react'
import LoginScreen from '../screens/LoginScreen'
import { AuthContext } from './AuthContext'

import { debounce } from 'lodash'

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext)

  const redirect = () => useCallback(debounce(() => <LoginScreen />, 300), [])

  if (!auth?.user) {
    redirect()
    return <LoginScreen />
  }

  return children
}
