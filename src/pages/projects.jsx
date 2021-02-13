import React from "react"
import { Paragraph } from "../styles/index.js"
import {
  BasicButton,
  ButtonText,
  Container,
  MediumSplash,
} from "../styles/primary.js"
import previewLogo from "../../static/favicon-512.png"
import { Helmet } from "react-helmet"

export default function Projects() {
  return (
    <Container
      horicenter="center"
      vertcenter="center"
      width="100%"
      direction="column"
    >
      <Helmet>
        <title>Coming Soon</title>
        <meta name="theme-color" content="#111" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://topik.tech/projects" />
        <meta property="og:title" content="My Projects - Topik Tech" />
        <meta property="og:image" content={previewLogo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://topik.tech/projects" />
        <meta property="twitter:title" content="My Projects - Topik Tech" />
        <meta property="twitter:image" content={previewLogo} />
      </Helmet>
      <MediumSplash>Coming Soon</MediumSplash>
      <Paragraph align="center">I'm still working on this page</Paragraph>
      <BasicButton to="/" margin="30px">
        <ButtonText>Go Home</ButtonText>
      </BasicButton>
    </Container>
  )
}
