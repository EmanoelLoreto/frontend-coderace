import React, { Suspense } from 'react'
import Router from './routes/routes'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SuspenseScreen from './screens/SuspenseScreen'

export default function App() {
  return (
    <Suspense fallback={ <SuspenseScreen /> }>
      <ToastContainer />
      <Router />
    </Suspense>
  )
}
