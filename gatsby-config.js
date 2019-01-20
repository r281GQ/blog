module.exports = {
  siteMetadata: {
    siteUrl: `unexpectedtoken.io`,
    pathPrefix: '',
    siteTitle: 'unexpectedtoken',
    siteLogo: `logo.png`,
    siteDescription: 'Thoughts on web engineering.',
    siteTitleAlt:
      'Some articles from the realm of react, redux, graphql, reasonml and much more.',
    userTwitter: 'https://twitter.com/endre_vegh',
    userGitHub: 'https://github.com/r281GQ',
    userLinkedIn: 'https://www.linkedin.com/in/endre-vegh-b4539114b/',
    siteFBAppID: '',
    author: 'Endre Vegh',
    aboutPicture: `src/images/profile.png`,
    ownRepo: 'https://github.com/r281GQ/blog',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik`, `Roboto`, `Muli\:300`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts/md`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
