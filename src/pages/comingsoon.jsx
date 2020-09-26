import React from "react"
import { LargeSplash } from "../styles/404.js"
import { Paragraph } from "../styles/index.js"
import {
  BasicButton,
  ButtonText,
  Container
} from "../styles/primary.js"

export default function ComingSoon() {
  return (
    <Container
      horicenter="center"
      vertcenter="center"
      width="100%"
      direction="column"
    >
      <LargeSplash size="150px">Coming Soon</LargeSplash>
      <Paragraph align="center">
        I'm still working on this page
      </Paragraph>
      <BasicButton to="/" margin="30px">
        <ButtonText>Go Home</ButtonText>
      </BasicButton>
    </Container>
  )
}
