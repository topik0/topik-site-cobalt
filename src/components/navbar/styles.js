import styled from "styled-components"
import { Link } from "gatsby"

export const NavbarContainer = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  position: ${props => (props.nonabsolute ? "static" : "absolute")};
  background-color: ${props => (props.theme === "dark" ? "#111" : "#fff")};
`
export const NavbarChild = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: ${props => (props.theme === "dark" ? "#111" : "#fff")};
  margin-left: 80px;
  min-width: 500px;
`
export const NavbarText = styled(Link)`
  font-size: 17px;
  color: ${props => (props.theme === "dark" ? "#fff" : "#222")};
  text-decoration: none;
  margin-right: 25px;
  font-weight: ${props => (props.weight ? props.weight : "500")};
  &:hover {
    color: ${props => (props.theme === "dark" ? "#e6e6e6" : "#3c3c3c")};
  }
`
