import React from "react"
import { Paragraph } from "../styles/index.js"
import {
  BasicButton,
  ButtonText,
  Container,
  MediumSplash,
} from "../styles/primary.js"
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
      </Helmet>
      <MediumSplash>Coming Soon</MediumSplash>
      <Paragraph align="center">I'm still working on this page</Paragraph>
      <BasicButton to="/" margin="30px">
        <ButtonText>Go Home</ButtonText>
      </BasicButton>
    </Container>
  )
}
