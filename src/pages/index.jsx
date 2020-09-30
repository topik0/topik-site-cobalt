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
import { description, SplashBio } from "../constants/text"
import logoSrc from "../images/favicon.svg"
import Navbar from "../components/navbar/navbar.jsx"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <MainContainer>
      <Helmet>
        <title>Hey, I'm Topik</title>
        <meta name="description" content={description}/>
      </Helmet>
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
