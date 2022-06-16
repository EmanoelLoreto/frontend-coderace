import React from 'react'

import logoCoderace from '../../assets/logo-coderace.png'
import { BackgroundSuspense, LogoCoderace } from './SuspenseScreen.styles'

const SuspenseScreen = () => <BackgroundSuspense><LogoCoderace src={ logoCoderace } /></BackgroundSuspense>

export default SuspenseScreen
