import styled from "styled-components"
import { Link } from "gatsby"

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
export const BasicButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #222;
  background-color: #fff;
  width: 150px;
  height: 50px;
  color: #222;
  border-radius: 12px;
  margin: ${props => (props.margin ? props.margin : "none")};
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transition: all 0.2s;
    color: #fff;
    background-color: #222;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`
export const BasicButtonExternal = styled(BasicButton).attrs({
  as: "a",
})``
export const ButtonText = styled.p`
  font-size: 20px;
`
