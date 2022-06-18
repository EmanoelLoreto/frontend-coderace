import React from 'react'

import map from 'lodash/map'

import Header from '../../components/Header'
import SectionFooter from '../../components/SectionFooter'
import Footer from '../../components/Footer'

import {
  Container,
  DescriptionOrganization,
  HrVerde,
  Section,
  TitleOrganization,
  ContainerSpeakers,
  CardSpeaker,
  InfoSpeaker,
  IconAwesome,
} from './OrganizationContainer.styles'

const OrganizationContainer = () => {
  const speakers = [
    {
      nome: 'Fábio Prass',
      cargo: 'Professor',
      linkedin: 'https://www.linkedin.com/in/fabio-prass-28568422/',
      pathImage: require('../../assets/speakers/fabio-prass.jpeg')
    },
    {
      nome: 'Felipe Becker',
      cargo: 'Professor',
      linkedin: 'https://www.linkedin.com/in/felipe-becker-nunes-b561a576/',
      pathImage: require('../../assets/speakers/felipe-becker.jpeg')
    },
    {
      nome: 'Samuel Vizzotto',
      cargo: 'Professor',
      cv: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4423664T0',
      pathImage: require('../../assets/speakers/samuel-vizzoto.png')
    },
    {
      nome: 'Jonas Gassen',
      cargo: 'Professor',
      cv: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4258724T2',
      pathImage: require('../../assets/speakers/jonas-gassen.png')
    },
    {
      nome: 'Fernando Puntel',
      cargo: 'Professor',
      linkedin: 'https://www.linkedin.com/in/fernandopuntel/',
      pathImage: require('../../assets/speakers/fernando-emilio.png')
    },
  ]

  return (
    <Container>
      <Header transparent={ false } />

      <Section>

        <TitleOrganization>Organização</TitleOrganization>
        <DescriptionOrganization>
          conheça nossa equipe
        </DescriptionOrganization>

        <HrVerde />

        <ContainerSpeakers>
          {map(speakers, speaker => (
            <CardSpeaker key={ speaker.nome }>
              <img
                src={ speaker.pathImage }
                alt="foto professor"
                width="310px"
                height="310px"
              />
              <InfoSpeaker>
                <span>{ speaker.nome }</span>
                <span><i>{ speaker.cargo }</i></span>

                <IconAwesome
                  icon={ speaker.linkedin ? '\f08c' : '\f2c2' }
                  href={ speaker.linkedin ? speaker.linkedin : speaker.cv }
                  target="_blank"
                />
              </InfoSpeaker>
            </CardSpeaker>
          ))}
        </ContainerSpeakers>

      </Section>

      <SectionFooter />

      <Footer />
    </Container>
  )
}

export default OrganizationContainer
