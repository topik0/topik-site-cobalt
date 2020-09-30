import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Noto Serif KR", serif;
  width: 100%;
  height: 100vh;
  color: #222;
  flex-flow: wrap;
`
export const ParentCardContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 800px;
  max-width: 600px;
  @media (orientation: portrait) {
    min-height: 400px;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 900px) and (orientation: landscape) {
    min-height: 0;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 60px;
  @media (orientation: portrait) {
    margin: 30px;
  }
`
export const CardTitle = styled.p`
  font-size: 59px;
  font-weight: 800;
  margin-bottom: 25px;
`
export const CardBody = styled.p`
  font-size: 23px;
  line-height: 1.4;
`
