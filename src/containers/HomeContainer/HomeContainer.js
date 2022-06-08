import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import Header from '../../components/Header/Header'

import primeiroLugar from '../../assets/primeiro-lugar.png'
import logoCoderace from '../../assets/logo-coderace.png'

import map from 'lodash/map'

import {
  Container,
  SectionHome,
  ContainerTitles,
  TitleCodeRace,
  GreenSpan,
  LinkProtocolo,
  SectionAbout,
  ContainerAbout,
  TitleAbout,
  TextAbout,
  FrameVideo,
  SectionAward,
  TitleAward,
  DescriptionAward,
  HrVerde,
  CardAward,
  HrCard,
  MoneyPrize,
  FirstPlaceAward,
  CardSubscription,
  TitleSubscription,
  UlRules,
  LiRules,
  SectionGallery,
  TitleGallery,
  DescriptionGallery,
  SectionPartners,
  TitlePartners,
  ContainerPartners,
  CardPartner,
  SectionFAQ,
  TitleFAQ,
  ContainerFAQ,
  SectionContact,
  TitleContact,
  DescriptionContact,
  ContainerFormContact,
  InputContact,
  inputNome,
  inputEmail,
  inputAssunto,
  inputMensagem,
  InputMessage,
  ButtonSendContact,
  SectionFooter,
  ContainerFooterAboutAndContact,
  ContainerFooterAbout,
  TextAboutFooter,
  ContainerFooterContact,
  TitleFooterContact,
  AndressContact,
  LinkGreen,
  Footer,
  Copyright,
  Policys,
  Developed,
  IconAwesome,
  IconsContacts,
} from './HomeContainer.styles'
import Dropdown from '../../components/Dropdown/Dropdown'

const HomeContainer = () => {
  const arrayPhotosGallery = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]

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

  const questionsFAQ = [
    {
      question: 'Qual linguagem de programação pode ser usada?',
      answer:
        'A linguagem de programação fica por conta da equipe. Não restringimos nenhuma linguagem. É de livre escolha.',
    },
    {
      question: 'Os integrantes precisam ser da mesma instituição?',
      answer: `Não. Os integrantes podem ser de instituições diferentes,
        diferentes idades e diferentes níveis de conhecimento. Podem estar graduando ou ser graduado.
      `,
    },
    {
      question: 'Quantos integrantes pode ter a equipe?',
      answer:
        'A equipe pode ser composta por no mínimo 1 (um) integrante e no máximo 5 (cinco) integrantes.',
    },
  ]

  return (
    <Container>
      <Header />
      <SectionHome>
        <ContainerTitles>
          <TitleCodeRace>
            CODE <GreenSpan>RACE</GreenSpan>
          </TitleCodeRace>
          <TitleCodeRace>CAMPEONATO DE PROGRAMAÇÃO</TitleCodeRace>

          <LinkProtocolo
            href="http://coderace.com.br/desafio_cr_2021.pdf"
            target="_blank"
          >
            Acesse o protocolo do desafio da edição de 2022 aqui!
          </LinkProtocolo>
        </ContainerTitles>
      </SectionHome>

      <SectionAbout>
        <ContainerAbout>
          <TitleAbout>Sobre o Code Race</TitleAbout>
          <TextAbout>
            Somos um campeonato de programação que acontece anualmente na
            Antonio Meneghetti Faculdade - AMF. Sempre carregando o objetivo de
            <b>gerar uma interação entre profissionais da área da tecnologia</b> e,
            através desta, dar maior visibilidade aos mesmos no mundo da TI.
            Participam do evento desde estudantes até grandes profissionais do
            mercado de TI, todos com vontade de aprender mais e desenvolver-se
            na área.
          </TextAbout>
          <TextAbout>
            Vem aí a mais nova edição Code Race. Neste ano o evento será on-line
            e contará com diversas novidades. Começando com um novo formato de
            evento (vamos resgatar as raízes), a composição dos times,
            inscrições gratuítas (em breve), premiações. Tudo para tornar o
            desafio ainda mais empolgante. Dia 26/11/2021 #coderace #amf #siamf
            #savethedate.
          </TextAbout>
        </ContainerAbout>
        <FrameVideo
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uen3jvi-WWc"
          title="CODE RACE VI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </SectionAbout>

      <SectionAward>
        <TitleAward>Premiações</TitleAward>
        <DescriptionAward>
          Premiações para VII edição do Code Race
        </DescriptionAward>

        <HrVerde />

        <CardAward>
          <img
            id="primeiro-lugar"
            src={ primeiroLugar }
            alt="Icon"
            height="90%"
            width="70%"
          />

          <HrCard />

          <FirstPlaceAward>1º LUGAR</FirstPlaceAward>
          <MoneyPrize>R$ 4.000,00</MoneyPrize>
        </CardAward>

        <TitleAward>Inscrições abertas</TitleAward>
        <DescriptionAward>
          Confira o <GreenSpan>regulamento</GreenSpan> do Code Race
        </DescriptionAward>

        <HrVerde />

        <CardSubscription>
          <DescriptionAward>INSCRIÇÃO</DescriptionAward>
          <TitleSubscription>GRATUITA</TitleSubscription>

          <HrCard />

          <UlRules>
            <LiRules>Prazo da Inscrição: a definir</LiRules>
            <LiRules>Formato da Equipe: individual ou dupla</LiRules>
            <LiRules>
              Não será permitida a inscrição de uma mesma pessoa em mais de uma
              equipe
            </LiRules>
          </UlRules>
        </CardSubscription>
      </SectionAward>

      <SectionGallery>
        <TitleGallery>Galeria</TitleGallery>
        <DescriptionGallery>Fotos das nossas cinco edições</DescriptionGallery>

        <Carousel
          infiniteLoop
          showArrows
          autoPlay
          centerSlidePercentage
          dynamicHeight
          width="40%"
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
      </SectionGallery>

      <SectionPartners>
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
      </SectionPartners>

      <SectionFAQ>
        <TitleFAQ>F.A.Q</TitleFAQ>

        <HrVerde />

        <ContainerFAQ>
          {map(questionsFAQ, (questionFAQ) => (
            <div key={ questionFAQ.question }>
              <Dropdown
                question={ questionFAQ.question }
                answer={ questionFAQ.answer }
              />
              <HrCard />
            </div>
          ))}
        </ContainerFAQ>
      </SectionFAQ>

      <SectionContact>
        <TitleContact>Contato</TitleContact>
        <DescriptionContact>Entre em contato conosco.</DescriptionContact>

        <HrVerde />

        <ContainerFormContact>
          <InputContact
            id="nome"
            type="text"
            placeholder="Seu nome"
            required
            style={ inputNome }
          />
          <InputContact
            id="email"
            type="email"
            placeholder="Seu email"
            required
            style={ inputEmail }
          />
          <InputContact
            id="assunto"
            type="text"
            placeholder="Assunto"
            required
            style={ inputAssunto }
          />
          <InputMessage
            id="mensagem"
            type="textarea"
            placeholder="Mensagem"
            required
            style={ inputMensagem }
          />
          <ButtonSendContact>Enviar mensagem</ButtonSendContact>
        </ContainerFormContact>
      </SectionContact>

      <SectionFooter>
        <ContainerFooterAboutAndContact>
          <ContainerFooterAbout>
            <img
              id="logo-coderace"
              src={ logoCoderace }
              height="40px"
              width="150px"
              alt="Icon"
            />
            <TextAboutFooter>
              O Code Race foi fundado em 2013 por três alunos da Antonio
              Meneghetti Faculdade e desde então acontece anualmente na própria
              instituição. Como objetivo traz a inclusão de alunos do curso de
              Sistema de Informação no mundo dos negócios oferecendo a
              possibilidade de se testarem nas diversas áreas da organização que
              o evento abrange.
            </TextAboutFooter>
            <TextAboutFooter>
              Desde sua primeira edição o Code Race conta com o apoio da Antonio
              Meneghetti Faculdade e da Fundação Antonio Meneghetti que
              disponibiliza recursos para a realização do campeonato. Para saber
              mais acesse{' '}
              <LinkGreen href="www.faculdadeam.edu.br" target="_blank">
                www.faculdadeam.edu.br
              </LinkGreen>{' '}
              e{' '}
              <LinkGreen href="www.fundacaoam.org.br" target="_blank">
                www.fundacaoam.org.br
              </LinkGreen>
              .
            </TextAboutFooter>
          </ContainerFooterAbout>
          <ContainerFooterContact>
            <TitleFooterContact>Contato</TitleFooterContact>

            <HrVerde />

            <AndressContact>Estrada Recanto Maestro, nº 338</AndressContact>
            <AndressContact>Restinga Sêca-RS</AndressContact>
            <AndressContact>97200-000, Brasil</AndressContact>
            <AndressContact>
              <b>Email:</b> contato@coderace.com.br
            </AndressContact>

            <IconsContacts>
              <IconAwesome
                icon="\f09a"
                href="https://www.facebook.com/coderaceamf/"
                target="_blank"
              />
              <IconAwesome
                icon="\f16d"
                href="https://www.instagram.com/code.race/"
                target="_blank"
              />
              <IconAwesome
                icon="\f0e0"
                href="mailto:contato@coderace.com.br?subject=Duvida"
                target="_blank"
              />
            </IconsContacts>
          </ContainerFooterContact>
        </ContainerFooterAboutAndContact>
      </SectionFooter>

      <Footer>
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
          |{' '}
          <LinkGreen
            href="https://www.coderace.com.br/politica-de-cancelamento.html"
            target="_blank"
          >
            Política de cancelamento
          </LinkGreen>
        </Policys>

        <Developed>
          Developed by{' '}
          <LinkGreen
            href="https://www.linkedin.com/in/emanoel-loreto/"
            target="_blank"
          >
            Emanoel Loreto
          </LinkGreen>
        </Developed>
      </Footer>
    </Container>
  )
}

export default HomeContainer
