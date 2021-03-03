module.exports = {
  siteMetadata: {
    title: "Test Blog for GatsbyConf Workshop",
    description: "my blog where i write super cool stuff",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
  ],
};
