import styled from "styled-components"
import { FullHeightContainer } from "./primary"

export const BoldTitle = styled.p`
  font-weight: 900;
  font-size: ${props => (props.size ? props.size : "60px")};
  margin-bottom: 20px;
  @media only screen and (min-device-width: 480px) and (max-device-width: 900px) and (orientation: landscape) {
    font-size: 40px;
  }
`
export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 26px;
  line-height: 1.3;
  width: 70%;
  text-align: ${props => (props.align ? props.align : "left")};
  @media (orientation: portrait) {
    font-size: 20px;
    width: 100%;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 900px) and (orientation: landscape) {
    font-size: 15px;
    width: 100%;
  }
`
export const Logo = styled.img`
  @media (orientation: landscape) {
    visibility: ${props => (props.secondary ? "hidden" : "visible")};
  }
  display: block;
  width: 50%;
  height: 50%;
  position: absolute;
  filter: drop-shadow(0 0 25px rgba(17, 17, 17, 0.5));
  user-select: none;
  @media (orientation: portrait) {
    position: static;
    width: 35%;
    height: auto;
    margin-bottom: 20px;
  }
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  @media (orientation: portrait) {
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 80px;
  @media (orientation: portrait) {
    justify-content: flex-start;
    margin: 0;
    width: 85%;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 900px) and (orientation: landscape) {
    width: 70%;
  }
`
export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 40%;
  z-index: 1;
  @media (orientation: portrait) {
    visibility: hidden;
    position: absolute;
  }
`
export const ColorContainer = styled(FullHeightContainer)`
  width: 88%;
  background-color: #111;
`
export const WhiteContainer = styled(FullHeightContainer)`
  width: 22%;
`
