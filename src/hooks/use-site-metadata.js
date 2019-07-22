import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            headline
            image
            video
            twitter
            name
            logo
          }
        }
      }
    `
  )
  return site.siteMetadata
}