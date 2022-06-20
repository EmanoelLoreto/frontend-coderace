import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import map from 'lodash/map'

import {
  Section,
  TitleGallery,
  DescriptionGallery,
} from './SectionGallery.styles'

const SectionGallery = () => {
  const arrayPhotosGallery = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]

  return (
    <Section id="galeria">
      <TitleGallery>Galeria</TitleGallery>
      <DescriptionGallery>Fotos das nossas cinco edições</DescriptionGallery>

      <Carousel
        infiniteLoop
        showArrows
        autoPlay
        centerSlidePercentage
        dynamicHeight
        useKeyboardArrows
      >
        {map(arrayPhotosGallery, (numberPhoto) => (
          <img
            src={ require(`../../assets/gallery/${ numberPhoto }.jpg`) }
            alt="foto-coderace"
            key={ `${ numberPhoto }foto-coderace` }
          />
        ))}
      </Carousel>
    </Section>
  )
}

export default SectionGallery
