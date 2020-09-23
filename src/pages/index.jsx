import React from "react"
import { BoldTitle, Paragraph, Logo } from "../styles/index.js"
import { MainContainer, Container } from "../styles/primary.js"
import { SplashBio } from "../constants/text"
import logoSrc from "../images/favicon.svg"
import Navbar from "../components/navbar/navbar.jsx"

export default function Home() {
  return (
    <MainContainer>
      <Navbar page="Home" />
      <Container vertcenter="flex-start" width="60%">
        <Container margin="80px" vertcenter="flex-start" width="50%">
          <BoldTitle>Hey, I'm Topik!</BoldTitle>
          <Paragraph>{SplashBio}</Paragraph>
        </Container>
      </Container>
      <Container horicenter="flex-end" direction="row" width="40%" zindex="1">
        <Logo src={logoSrc} />
        <Container width="22%"></Container>
        <Container width="88%" bgcolor="#111"></Container>
      </Container>
    </MainContainer>
  )
}
