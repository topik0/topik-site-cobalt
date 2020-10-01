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
import { AboutBio, SkillsetBio, RigBio, description } from "../constants/text"
import previewLogo from "../../static/favicon-512.png"
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <AboutContainer>
      <Helmet>
        <title>About - Topik Tech</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#111" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://topik.tech/about" />
        <meta property="og:title" content="About - Topik Tech" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={previewLogo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://topik.tech/about" />
        <meta property="twitter:title" content="About - Topik Tech" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={previewLogo} />
      </Helmet>
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
