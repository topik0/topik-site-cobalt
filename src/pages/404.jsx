import React from "react"
import { LargeSplash } from "../styles/404.js"
import { Paragraph } from "../styles/index.js"
import {
  BasicButton,
  ButtonText,
  Container
} from "../styles/primary.js"

export default function FourOFour() {
  return (
    <Container
      horicenter="center"
      vertcenter="center"
      width="100%"
      direction="column"
    >
      <LargeSplash size="300px">404</LargeSplash>
      <Paragraph align="center">
        The page you're looking for doesn't.. well.. exist
      </Paragraph>
      <BasicButton to="/" margin="30px">
        <ButtonText>Go Home</ButtonText>
      </BasicButton>
    </Container>
  )
}
