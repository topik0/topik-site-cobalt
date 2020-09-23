import React, { Component } from "react"
import { NavbarContainer, NavbarText, NavbarChild } from "../navbar/styles"
import { links } from "../../constants/links"

class Navbar extends Component {
  render() {
    const page = this.props.page
    const theme = this.props.theme
    const nonabsolute = this.props.nonabsolute
    return (
      <NavbarContainer theme={theme} nonabsolute={nonabsolute}>
        <NavbarChild theme={theme}>
          {links.map(lnk => (
            <div>
              {page !== lnk.label ? (
                <NavbarText theme={theme} to={lnk.url}>
                  {lnk.label}
                </NavbarText>
              ) : (
                <NavbarText theme={theme} weight="700" to={lnk.url}>
                  {lnk.label}
                </NavbarText>
              )}
            </div>
          ))}
        </NavbarChild>
      </NavbarContainer>
    )
  }
}
export default Navbar
