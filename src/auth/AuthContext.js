import { createContext } from 'react'

const AuthContextType = {
  user: {
    email: '',
    role: '',
  },
  signin: () => { },
  signout: () => { },
  validateToken: () => { }
}

export const AuthContext = createContext(AuthContextType)
