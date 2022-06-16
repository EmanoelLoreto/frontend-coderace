import React, { lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const HomeScreen = lazy(() => import('../screens/HomeScreen'))
const SubscriptionScreen = lazy(() => import('../screens/SubscriptionScreen'))

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" exact element={ <HomeScreen /> } />
        <Route path="/inscricao" exact element={ <SubscriptionScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
