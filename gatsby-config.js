require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: `/my`,
  siteMetadata: {
    siteTitle: `DarkLynx`,
    siteTitleAlt: `Lynx @ wobla.ru - another realm`,
    siteHeadline: `Lynx @ wobla.ru - another realm`,
    siteUrl: `https://darklynx.github.io`,
    siteDescription: `Вместо мыслей - личный блог Линкса с wobla.ru, aka Lynx IdleLynx DarkLynx`,
    siteLanguage: `ru`,
    siteImage: `/favicon-512x512.png`,
    author: `@darklynx`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `DD.MM.YYYY HH:mm`,
        navigation: [
          {
            title: `Блог`,
            slug: `/blog`,
          },
          {
            title: `О блоге`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/darklynx`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lyubitelevs`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lynx @ wobla.ru - another realm`,
        short_name: `DarkLynx`,
        description: `Вместо мыслей - личный блог Линкса с wobla.ru, aka Lynx IdleLynx DarkLynx`,
        start_url: `/my`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
