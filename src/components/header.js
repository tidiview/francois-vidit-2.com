import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { styled } from "styletron-react"

const HeaderDiv = styled("header", { 
    backgroundColor: 'white',
    paddingBlockStart: '21.44px',
    paddingBlockEnd: '21.44px'
  });
  HeaderDiv.displayName = "HeaderDiv";

const HeaderH1 = styled("header", { 
  marginBlockStart: 0
});
HeaderH1.displayName = "HeaderH1";

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={
      data => (
        <HeaderDiv>
          <Link to="/">
            <HeaderH1>{data.site.siteMetadata.title}</HeaderH1>
          </Link>
          <nav>
            <Link to="/profile/">Profile</Link> 
          </nav>
        </HeaderDiv>
      )
    }
  />
)