import React from 'react'

import map from 'lodash/map'

import {
  Section,
  TitlePartners,
  ContainerPartners,
  CardPartner,
  HrVerde,
} from './SectionPartners.styles'

const SectionPartners = () => {
  const partners = [
    {
      url: 'https://faculdadeam.edu.br/',
      namePicture: 'amf.png',
    },
    {
      url: 'https://fundacaoam.org.br/',
      namePicture: 'fundacao.png',
    },
    {
      url: 'https://faculdadeam.edu.br/graduacao/sistemas-de-informacao',
      namePicture: 'sistemas.jpg',
    },
    {
      url: 'https://evolutionsti.com.br/',
      namePicture: 'logo-evolution.png',
    },
    {
      url: 'https://www.fcamara.com.br/',
      namePicture: 'fcamara.png',
    },
  ]

  return (
    <Section>
      <TitlePartners>Parceiros</TitlePartners>

      <HrVerde />

      <ContainerPartners>
        {map(partners, (partner) => (
          <CardPartner
            onClick={ () => window.open(partner.url, '_blank') }
            key={ partner.url }
          >
            <img
              src={ require(`../../assets/partners/${ partner.namePicture }`) }
              alt="foto-partner"
            />
          </CardPartner>
        ))}
      </ContainerPartners>
    </Section>
  )
}

export default SectionPartners
