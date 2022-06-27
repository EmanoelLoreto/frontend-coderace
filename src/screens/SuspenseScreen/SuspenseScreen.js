import React from 'react'

import Loader from '../../components/Loader'

import logoCoderace from '../../assets/logo-coderace.png'
import { BackgroundSuspense, LogoCoderace } from './SuspenseScreen.styles'

const SuspenseScreen = () => (
  <BackgroundSuspense>
    <LogoCoderace src={ logoCoderace } />
    <Loader />
  </BackgroundSuspense>
)

export default SuspenseScreen
