import React, { lazy } from 'react'
import {
  Routes, Route, BrowserRouter
} from 'react-router-dom'

import { RequireAuth } from '../auth/AuthRequire'
import { AuthProvider } from '../auth/AuthProvider'

const HomeScreen = lazy(() => import('../screens/HomeScreen'))
const SubscriptionScreen = lazy(() => import('../screens/SubscriptionScreen'))
const OrganizationScreen = lazy(() => import('../screens/OrganizationScreen'))
const SponsorScreen = lazy(() => import('../screens/SponsorScreen'))
const LoginScreen = lazy(() => import('../screens/LoginScreen'))

const AdminPanelScreen = lazy(() => import('../screens/AdminPanelScreen'))

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="*" exact element={ <HomeScreen /> } />
          <Route path="/inscricao" exact element={ <SubscriptionScreen /> } />
          <Route path="/organizacao" exact element={ <OrganizationScreen /> } />
          <Route path="/patrocinio" exact element={ <SponsorScreen /> } />
          <Route path="/login" exact element={ <LoginScreen /> } />
          <Route path="/painel-admin" exact element={ <RequireAuth><AdminPanelScreen /></RequireAuth> } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Router
