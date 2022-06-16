import styled from 'styled-components'

export const LinkGreen = styled.a`
  color: #00B83B;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0;
  text-align: justify;
  transition: all 0.3s ease-in-out 0s;

  :hover {
    color: #54a3ff;
  }
`

export const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 5vw;
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
