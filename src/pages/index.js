import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import HomePage from "../components/HomePage"

const IndexPage = ({ data }) => (
  <Layout>
    <HomePage maps={data.allMarkdownRemark.nodes}></HomePage>
  </Layout>
)

export default IndexPage
export const contentQuery = graphql`
query contentQuery {
  allMarkdownRemark(
     sort: { fields: [frontmatter___date], order: DESC }
  ) {
    totalCount
    	nodes {
      frontmatter {
        slug
        name
        author
        github
        title
        url
        date(formatString: "DD-MM-YYYY")
        cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  srcSet
                  tracedSVG
                }
              }
            }
      }
    }
  }
}

`