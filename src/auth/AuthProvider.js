import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import axios from 'axios'

import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import { useToastAlert } from '../utils'

export const AuthProvider = ({ children }) => {
  const apiUrl = process.env.REACT_APP_API_URL

  const location = useLocation()
  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  const { ToastAlert, ToastUpdate } = useToastAlert()

  const validateToken = useCallback(async () => {
    const storageData = localStorage.getItem('authToken')

    ToastAlert({
      id: 'validating',
      message: 'Validando usuário.',
      type: 'info',
    })

    if (storageData) {
      try {
        const { data } = await axios.post(`${ apiUrl }/login/validate-token`, {
          token: storageData
        }, {
          headers: {
            Authorization: storageData,
          }
        })

        if (data.data.email) {
          ToastUpdate({
            id: 'validating',
            message: 'Usuário validado.',
            type: 'success',
            autoClose: 2000,
          })

          setUser(data.data)
          setUserStorage(JSON.stringify(data.data))
        } else {
          ToastUpdate({
            id: 'validating',
            message: 'Usuário não encontrado.',
            type: 'erro',
            autoClose: 2000,
          })

          signout()
        }
      } catch (error) {
        ToastUpdate({
          id: 'validating',
          message: 'Erro ao validar o usuário.',
          type: 'erro',
          autoClose: 2000,
        })

        ToastUpdate({
          id: 'validating',
          message: error.response?.data?.error?.message?.error,
          type: 'erro',
          autoClose: 2000,
        })

        signout()
      }
    } else {
      setTimeout(() => {
        ToastUpdate({
          id: 'validating',
          message: 'Usuário não logado.',
          type: 'warning',
          autoClose: 2000,
        })
        setToken('')
        setUserStorage('')
      }, 100)
    }
  }, [])

  useEffect(() => {
    if (location.pathname === '/painel-admin') {
      validateToken()
    }
  }, [])

  const signin = useCallback(async ({ email, password }) => {
    try {
      ToastAlert({
        id: 'login',
        message: 'Logando...',
        type: 'info',
      })

      const { data } = await axios.post(`${ apiUrl }/login`, { email, password })

      if (data.user && data.token) {
        ToastUpdate({
          id: 'login',
          message: 'Logado com sucesso!',
          type: 'success',
          autoClose: 6000,
        })

        setUser(data.user)
        setToken(data.token)
        setUserStorage(JSON.stringify(data.user))
        navigate('/painel-admin')
      }
    } catch (error) {
      ToastUpdate({
        id: 'login',
        message: 'Erro ao logar.',
        type: 'error',
        autoClose: 6000,
      })

      ToastAlert({
        message: error?.response?.data?.error?.message ?? 'Erro 404',
        type: 'error',
        autoClose: 6000,
      })
    }
  }, [])

  const signout = useCallback(() => {
    setUser(null)
    setToken('')
    setUserStorage('')

    ToastAlert({
      message: 'Deslogado.',
      type: 'info',
      autoClose: 6000,
    })
  }, [])

  const setToken = useCallback((token) => {
    localStorage.setItem('authToken', token)
  }, [])

  const setUserStorage = useCallback((userStorage) => {
    localStorage.setItem('user', userStorage)
  }, [])

  const AuthContextProps = useMemo(() => ({
    user, signin, signout, validateToken
  }), [user, signin, signout, validateToken])

  return (
    <AuthContext.Provider value={ AuthContextProps }>
      { children }
    </AuthContext.Provider>
  )
}
