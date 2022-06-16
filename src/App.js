import React, { Suspense } from 'react'
import Router from './routes/routes'

import SuspenseScreen from './screens/SuspenseScreen'

export default function App() {
  return (
    <Suspense fallback={ <SuspenseScreen /> }>
      <Router />
    </Suspense>
  )
}
