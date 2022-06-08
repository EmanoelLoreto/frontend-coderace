/* eslint-disable global-require */
import styled from 'styled-components'
import backgroundHome from '../../assets/background-home.jpg'
import backgroundAbout from '../../assets/background-about.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ backgroundHome });
  background-attachment: fixed;
  height: 100vh;

  :before {
    content: "";
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  z-index: 1;
`

export const TitleCodeRace = styled.h1`
  font-family: "Raleway", sans-serif;
  color: #fff;
  font-size: 56px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 5px 0px;
`

export const GreenSpan = styled.span`
  color: #00B83B;
`

export const LinkProtocolo = styled.a`
  font-family: "Raleway", sans-serif;
  color: red;
  font-weight: 400;
  font-size: 2rem;
  text-decoration: none;
  margin-top: 10vh;
`

export const SectionAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ backgroundAbout });
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  padding: 0px 5vw;
`

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 2vw;
`

export const TitleAbout = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`

export const TextAbout = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: #fff;
  margin-bottom: 0px;
`

export const FrameVideo = styled.iframe`
  flex: 1;
`

export const SectionAward = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 0px 5vw;
`

export const TitleAward = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DescriptionAward = styled.span`
  text-align: center;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #9195a2;
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid #00B83B;
`

export const CardAward = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 10px 25px 0 rgb(6 12 34 / 10%);
  padding: 1vw;
  margin: 3vw;
`

export const HrCard = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
`

export const FirstPlaceAward = styled.b`
  color: #6c757d;
  margin: 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.7;
`

export const MoneyPrize = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin: 0;
`

export const CardSubscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 10px 25px 0 rgb(6 12 34 / 10%);
  padding: 1vw;
  margin: 3vw;
`

export const TitleSubscription = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2.6rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  margin: 10px 0px;
`

export const UlRules = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0 4vw;
`

export const LiRules = styled.li`
  margin: 8px 0;
  font-size: 1.2rem;

  :before {
    font-family: FontAwesome;
    float: left;
    margin-left: -1.5em;
    content: "\f00c";
    color: #d91f26;
    transform: scale(1, 1);
    position: absolute;
    margin-top: 2px;
    color: #00B83B;
  }
`

export const SectionGallery = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
  flex-direction: column;
  padding: 0px 5vw;
  background-color: #f6f7fd;
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

export const SectionPartners = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 0px 5vw;
`

export const TitlePartners = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const ContainerPartners = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  margin-bottom: 2vw;
`

export const CardPartner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 15vw;
  min-height: 35vh;
  box-shadow: 0 10px 25px 0 rgb(6 12 34 / 10%);
  cursor: pointer;
  margin: 10px;

  img {
    transition: all 0.3s ease-in-out 0s;
    width: inherit;
    cursor: pointer;
  }

  :hover {
    img {
      width: 16vw;
    }
  }
`

export const SectionFAQ = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f6f7fd;
  padding: 0px 5vw;
`

export const TitleFAQ = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const ContainerFAQ = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vw 0;
`

export const SectionContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 0px 5vw;
`

export const TitleContact = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DescriptionContact = styled.span`
  text-align: center;
  margin: 0 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #9195a2;
`

export const ContainerFormContact = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 60vw;
  margin: 10px 0 2vw;
`

export const InputContact = styled.input`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const InputMessage = styled.textarea`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  resize: none;
  width: auto;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const inputNome = {
  gridArea: '1 / 1 / 2 / 2',
}

export const inputEmail = {
  gridArea: '1 / 2 / 2 / 3',
}

export const inputAssunto = {
  gridArea: '2 / 1 / 3 / 3',
}

export const inputMensagem = {
  gridArea: '3 / 1 / 5 / 3',
}

export const ButtonSendContact = styled.button`
  grid-area: 5 / 1 / 6 / 3;
  background: #00B83B;
  padding: 10px 40px;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 50px;
  justify-self: center;
  transition: background .15s ease-in-out, box-shadow .15s ease-in-out;
  height: 3.5vw;
  margin-top: 5px;

  :hover {
    background: #54a3ff;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const SectionFooter = styled(SectionGallery)`
  background: #000;
  padding: 60px 120px 60px 120px;
`

export const ContainerFooterAboutAndContact = styled.div`
  display: flex;
`

export const ContainerFooterAbout = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextAboutFooter = styled(TextAbout)`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0;
  color: #eee;
  text-align: justify;
`

export const ContainerFooterContact = styled(ContainerFooterAbout)`
  padding: 0px 70px;

  & > :nth-child(3) {
    margin-top: 20px;
  }
`

export const TitleFooterContact = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
`

export const AndressContact = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #eee;
  font-size: 0.9rem;
  text-align: left;
  padding: 0;
  margin: 0 0 5px 0;
  white-space: nowrap;
`

export const IconsContacts = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconAwesome = styled.a`
  font-size: 18px;
  background: #0f0f0f;
  color: #eee;
  margin-right: 4px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-top: 10px;
  margin-right: 15px;

  :hover {
    :before {
      color: #54a3ff;
    }  
  }

  :before {
    font-family: FontAwesome;
    content: "${ ({ icon }) => icon }";
    transform: scale(1, 1);
    color: #fff;
    background: #0f0f0f;
    margin-top: 5px;
    margin-left: -7px;
    position: absolute;
    transition: all 0.3s ease-in-out 0s;
  }
`

export const LinkGreen = styled(LinkProtocolo)`
  color: #00B83B;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0;
  text-align: justify;
`

export const Footer = styled(SectionGallery)`
  background: #141414;
`

export const Copyright = styled.h2`
  font-size: 1rem;
  color: #ddd;
  text-align: center;
  margin: 25px 0 20px 0;
`

export const Policys = styled.h3`
  color: #fff;
  margin: 5px 0 0 0;
`

export const Developed = styled.h5`
  color: #fff;
  margin: 0 0 30px 0;
`
