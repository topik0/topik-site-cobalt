import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  font-family: "Noto Serif KR", serif;
  width: 100%;
  height: 100vh;
  color: #222;
`
export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  align-items: ${props => (props.vertcenter ? props.vertcenter : "center")};
  justify-content: ${props => (props.horicenter ? props.horicenter : "center")};
  width: ${props => (props.width ? props.width : "50%")};
  background-color: ${props => (props.bgcolor ? props.bgcolor : "#fff")};
  margin: ${props => (props.margin ? props.margin : "0")};
  position: ${props => (props.position ? props.position : "static")};
  z-index: ${props => (props.zindex ? props.zindex : "auto")};
`
