import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
  flex-direction: column;
  padding: 0px 5vw;
  background-color: #f6f7fd;
  scroll-margin-top: 70px;

  .carousel-slider {
    width: 40% !important;
    border-radius: 50px;
    background: #f7f7f7;
    margin-bottom: 10px;
    box-shadow:  20px 20px 60px #d2d2d2,
                -20px -20px 60px #ffffff;
  }

  .carousel-status {
    margin-right: 20px;
  }

  @media(max-width: 950px) {
    .carousel-slider {
      flex-direction: column-reverse;
      display: flex;
      width: 100% !important;

      .control-dots {
        position: initial;
      }
    }
    
    .thumbs-wrapper {
      display: none;
    }
  }
`

export const TitleGallery = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2.3rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DescriptionGallery = styled.span`
  text-align: center;
  margin: 0 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #9195a2;
`
