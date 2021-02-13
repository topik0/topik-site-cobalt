import React from "react"
import { LargeSplash } from "../styles/404.js"
import { Paragraph } from "../styles/index.js"
import {
  BasicButton,
  ButtonText,
  Container
} from "../styles/primary.js"
import previewLogo from "../../static/favicon-512.png"
import { Helmet } from "react-helmet"

export default function FourOFour() {
  return (
    <Container
      horicenter="center"
      vertcenter="center"
      width="100%"
      direction="column"
    >
      <Helmet>
        <title>404 - Page not found</title>
        <meta type="description" content="The page you are looking for doesn't exist"/>
        <meta name="theme-color" content="#111" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://topik.tech/" />
        <meta property="og:title" content="404 - Topik Tech" />
        <meta property="og:description" content="The page you are looking for doesn't exist" />
        <meta property="og:image" content={previewLogo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://topik.tech/" />
        <meta property="twitter:title" content="404 - Topik Tech" />
        <meta property="twitter:description" content="The page you are looking for doesn't exist" />
        <meta property="twitter:image" content={previewLogo} />
      </Helmet>
      <LargeSplash>404</LargeSplash>
      <Paragraph align="center">
        The page you're looking for doesn't.. well.. exist
      </Paragraph>
      <BasicButton to="/" margin="30px">
        <ButtonText>Go Home</ButtonText>
      </BasicButton>
    </Container>
  )
}
