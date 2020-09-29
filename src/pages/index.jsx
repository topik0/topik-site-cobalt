import React from "react"
import {
  BoldTitle,
  Paragraph,
  Logo,
  LeftContainer,
  RightContainer,
  TextContainer,
  ColorContainer,
  WhiteContainer,
} from "../styles/index.js"
import { MainContainer } from "../styles/primary.js"
import { SplashBio } from "../constants/text"
import logoSrc from "../images/favicon.svg"
import Navbar from "../components/navbar/navbar.jsx"

export default function Home() {
  return (
    <MainContainer>
      <Navbar page="Home" />
      <LeftContainer>
        <TextContainer>
          <Logo secondary src={logoSrc} />
          <BoldTitle>Hey, I'm Topik!</BoldTitle>
          <Paragraph>{SplashBio}</Paragraph>
        </TextContainer>
      </LeftContainer>
      <RightContainer>
        <Logo src={logoSrc} />
        <WhiteContainer />
        <ColorContainer />
      </RightContainer>
    </MainContainer>
  )
}
