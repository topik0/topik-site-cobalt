module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "./static/favicon.png",
      },
    },
  ],
  siteMetadata: {
    title: "Topik Tech",
    titleTemplate: "%s - Topik Tech",
    description:
      "I'm a developer and tech enthusiast with a strong passion for technology. I have experience with frontend work with personal projects and client work.",
    url: "https://www.topik.tech",
    image: "./static/favicon.png",
  },
}
