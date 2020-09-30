import React from "react"
import { LargeSplash } from "../styles/404.js"
import { Paragraph } from "../styles/index.js"
import {
  BasicButton,
  ButtonText,
  Container
} from "../styles/primary.js"
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
