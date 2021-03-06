import React, { useCallback, useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'
import SectionAbout from '../../components/SectionAbout'
import SectionAward from '../../components/SectionAward'
import SectionGallery from '../../components/SectionGallery'
import SectionPartners from '../../components/SectionPartners'
import SectionFAQ from '../../components/SectionFAQ'
import SectionContact from '../../components/SectionContact'
import SectionFooter from '../../components/SectionFooter'
import Footer from '../../components/Footer'

import {
  Container,
  SectionHome,
  ContainerTitles,
  TitleCodeRace,
  SubTitleCodeRace,
  GreenSpan,
  LinkProtocolo,
} from './HomeContainer.styles'

const HomeContainer = () => {
  const [heightBackgroundImage, setHeightBackgroundImage] = useState('')

  const setDimensions = useCallback(
    () => {
      setHeightBackgroundImage(
        document.getElementById('section-home')
          ? document.getElementById('section-home').getBoundingClientRect().height
          : ''
      )
    },
    [document, window],
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        setDimensions()
      }, true)
    }

    setTimeout(() => {
      setDimensions()
    }, 300)

    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container>
      <Header />
      <SectionHome height={ heightBackgroundImage } id="section-home">
        <ContainerTitles>
          <TitleCodeRace>
            CODE <GreenSpan>RACE</GreenSpan>
          </TitleCodeRace>
          <SubTitleCodeRace>CAMPEONATO DE PROGRAMAÇÃO</SubTitleCodeRace>

          <LinkProtocolo
            href="http://coderace.com.br/desafio_cr_2021.pdf"
            target="_blank"
          >
            Acesse o protocolo do desafio da edição de 2022 aqui!
          </LinkProtocolo>
        </ContainerTitles>
      </SectionHome>

      <SectionAbout />

      <SectionAward />

      <SectionGallery />

      <SectionPartners />

      <SectionFAQ />

      <SectionContact />

      <SectionFooter />

      <Footer />
    </Container>
  )
}

export default HomeContainer
