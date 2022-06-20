import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 0px 5vw;
  margin-top: 7vw;

  @media(max-width: 950px) {
    margin-top: 20vw;
  }
`

export const TitleOrganization = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DescriptionOrganization = styled.span`
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

export const ContainerSpeakers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
`

export const CardSpeaker = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  transition: all ease-in 0.2s;

  border-radius: 50px;
  box-shadow:  20px 20px 60px #d2d2d2,
              -20px -20px 60px #ffffff;

  img {
    border-radius: 30px;
  }

  :hover {
    transform: scale(1.05);
  }
`

export const InfoSpeaker = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  align-items: center;

  background: rgba(0,0,0,0.76);
  padding-top: 10px;
  transition: all 300ms cubic-bezier(0.645,0.045,0.355,1);
  width: 310px;
  margin-top: -105px;
  height: 95px;
  border-radius: 0px 0px 30px 30px;

  span {
    margin: -5px;
  }

  i {
    color: #fff;
    font-size: 15px;
    margin-bottom: 10px;
    font-style: italic;
  }
`

export const IconAwesome = styled.a`
  font-size: 18px;
  color: #eee;
  margin-right: 4px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-top: 10px;
  margin-left: 20px;

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
    position: absolute;
    transition: all 0.3s ease-in-out 0s;
  }
`
