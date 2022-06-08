import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomeScreen from '../screens/HomeScreen'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <HomeScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
