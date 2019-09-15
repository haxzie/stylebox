import React from 'react'
import { graphql } from 'gatsby'
import MapPage from '../../components/MapPage'

function MapsTemplate({ data }) {
    console.log(data)
    return (
       <MapPage data={data.markdownRemark.frontmatter}/>
    )
}

export default MapsTemplate

export const MapQuery = graphql`
    query MapQuery($path: String!) {
        markdownRemark(frontmatter: { slug: { eq: $path } }) {
            frontmatter {
                name
                author
                github
                url

            }
        }
    }
`;
