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
import previewLogo from "../../static/favicon-512.png"
import Navbar from "../components/navbar/navbar.jsx"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <MainContainer>
      <Helmet>
        <title>Hey, I'm Topik</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#111" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://topik.tech/" />
        <meta property="og:title" content="Hey, I'm Topik" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={previewLogo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://topik.tech/" />
        <meta property="twitter:title" content="Hey, I'm Topik" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={previewLogo} />
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
