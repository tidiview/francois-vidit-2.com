const path = require(`path`)

// SANITY: In your gatsby-config.js file
require('dotenv').config()
const {
  api: { projectId, dataset }
} = requireConfig('./studio/sanity.json')

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
    /* {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'fr',
        useLangKeyLayout: true
      }
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `/src/images/`),
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    `gatsby-transformer-remark`,/* 
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        name: `data`,
        path: path.join(__dirname, `/src/data/`),
      },
    }, */
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
        debug: false,
      },
    },/* 
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
    }, */
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

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig (path) {
  try {
    return require('./studio/sanity.json')
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || ''
      }
    }
  }
}