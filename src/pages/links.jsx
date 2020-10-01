import React from "react"
import { ButtonText, BasicButtonExternal } from "../styles/primary.js"
import Navbar from "../components/navbar/navbar.jsx"
import { LinksContainer, LinksSubcontainer } from "../styles/links.js"
import { externals } from "../constants/links"
import { BoldTitle } from "../styles/index.js"
import { linksdesc } from "../constants/text"
import { description } from "../constants/text"
import previewLogo from "../../static/favicon-512.png"
import { Helmet } from "react-helmet"

export default function Links() {
  return (
    <LinksContainer>
      <Helmet>
        <title>Links - Topik Tech</title>
        <meta name="description" content={linksdesc} />
        <meta name="theme-color" content="#111" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://topik.tech/links" />
        <meta property="og:title" content="Links - Topik Tech" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={previewLogo} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://topik.tech/" />
        <meta property="twitter:title" content="Links - Topik Tech" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={previewLogo} />
      </Helmet>
      <Navbar nonabsolute theme="dark" page="Projects" />
      <LinksSubcontainer>
        <BoldTitle>Links</BoldTitle>
        {externals.map(ext => (
          <BasicButtonExternal margin="10px" href={ext.url}>
            <ButtonText>{ext.label}</ButtonText>
          </BasicButtonExternal>
        ))}
      </LinksSubcontainer>
    </LinksContainer>
  )
}
