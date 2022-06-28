import { createContext } from 'react'

const AuthContextType = {
  user: {
    email: '',
    password: '',
    role: '',
  },
  signin: () => { },
  signout: () => { },
}

export const AuthContext = createContext(AuthContextType)
