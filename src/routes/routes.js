import React, { lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const HomeScreen = lazy(() => import('../screens/HomeScreen'))
const SubscriptionScreen = lazy(() => import('../screens/SubscriptionScreen'))
const OrganizationScreen = lazy(() => import('../screens/OrganizationScreen'))
const SponsorScreen = lazy(() => import('../screens/SponsorScreen'))

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" exact element={ <HomeScreen /> } />
        <Route path="/inscricao" exact element={ <SubscriptionScreen /> } />
        <Route path="/organizacao" exact element={ <OrganizationScreen /> } />
        <Route path="/patrocinio" exact element={ <SponsorScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
