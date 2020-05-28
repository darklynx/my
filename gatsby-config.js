require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Lynx @ wobla.ru - another realm`,
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
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
