const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `francois-vidit-2.com`,
    siteUrl: `https://elated-neumann-29baa1.netlify.com`,
    description: `2nd version of francois-vidit.com after grav`,
    headline: ``,
    image: ``,
    video: ``,
    twitter: ``,
    name: ``,
    logo: ``,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`)
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'fr',
        useLangKeyLayout: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `/src/images/`),
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        name: `data`,
        path: path.join(__dirname, `/src/data/`),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 70,
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        // prefix: "_",
        //  Disable dev debug mode, enabled by default
        debug: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `francois-vidit.com`,
        short_name: `francois-vidit`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `none`,
        display: `standalone`,
        icon: `src/images/favicon-ja.svg`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      }
    }
  ]
}