import React from 'react'

import Icon from '@mdi/react'
import { mdiHeart } from '@mdi/js'

import {
  LinkGreen,
  FooterContainer,
  Copyright,
  Policys,
  Developed,
} from './Footer.styles'

const Footer = () => (
  <FooterContainer>
    <Copyright>
      © Copyright <b>Equipe Code Race (AMF)</b>. All Rights Reserved
    </Copyright>

    <Policys>
      <LinkGreen
        href="https://www.coderace.com.br/politica-de-privacidade.html"
        target="_blank"
      >
        Política de privacidade
      </LinkGreen>{' '}
      <b>|</b>{' '}
      <LinkGreen
        href="https://www.coderace.com.br/politica-de-cancelamento.html"
        target="_blank"
      >
        Política de cancelamento
      </LinkGreen>
    </Policys>

    <Developed>
      Feito com {' '}
      <Icon
        path={ mdiHeart }
        title="Heart"
        size={ 1 }
        horizontal
        vertical
        rotate={ 180 }
        color="red"
      />
      {' '} por
      <LinkGreen
        href="https://www.linkedin.com/in/emanoel-loreto/"
        target="_blank"
      >
        {' '}Emanoel Loreto.
      </LinkGreen>
    </Developed>
  </FooterContainer>
)

export default Footer
