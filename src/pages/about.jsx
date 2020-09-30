import React from "react"
import { RigText } from "../constants/text"
import Navbar from "../components/navbar/navbar.jsx"
import {
  AboutContainer,
  ParentCardContainer,
  CardContainer,
  CardTitle,
  CardBody,
} from "../styles/about.js"
import { AboutBio, SkillsetBio, RigBio } from "../constants/text"

export default function About() {
  return (
    <AboutContainer>
      <Navbar nonabsolute theme="dark" page="About Me" />
        <ParentCardContainer>
          <CardContainer>
            <CardTitle>About Me</CardTitle>
            <CardBody>{AboutBio}</CardBody>
          </CardContainer>
        </ParentCardContainer>
        <ParentCardContainer>
          <CardContainer>
            <CardTitle>Skillset</CardTitle>
            {SkillsetBio.map(skill => (
              <CardBody>{skill}</CardBody>
            ))}
          </CardContainer>
        </ParentCardContainer>
        <ParentCardContainer>
          <CardContainer>
            <CardTitle>My Rig</CardTitle>
            <CardBody>{RigText}</CardBody>
            {RigBio.map(rig => (
              <CardBody>{rig}</CardBody>
            ))}
          </CardContainer>
        </ParentCardContainer>
    </AboutContainer>
  )
}
