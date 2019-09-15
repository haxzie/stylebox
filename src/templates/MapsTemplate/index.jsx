import React from 'react'
import { graphql } from 'gatsby'
import MapPage from '../../components/MapPage'
import SEO from '../../components/seo';

function MapsTemplate({ data }) {
    console.log(data)
    const pageData = data.markdownRemark.frontmatter;
    return (
        <>
        <SEO title={`${pageData.name} by ${pageData.author}`}
            description={`Stylish Mapbox designer theme ${pageData.name} by ${pageData.author} published at StyleBox`}/>
        <MapPage data={pageData}/>
        </>
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
