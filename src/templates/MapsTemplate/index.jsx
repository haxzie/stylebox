import React from 'react'
import { graphql } from 'gatsby'
import MapPage from '../../components/MapPage'
import SEO from '../../components/seo';
// import ReactMapboxGl from "react-mapbox-gl"


// hack to get the mapbox module out of webpack bundling
let mapboxgl
let ReactMapboxGl = {}
if (typeof window !== `undefined`) {
    mapboxgl = require('mapbox-gl')
    ReactMapboxGl = require('react-mapbox-gl')
} else {
    ReactMapboxGl.Map = () => {
        return class Mock extends React.Component {
            constructor() {
                super()
            }
            render() {
                return <div />
            }
        }
    }
}


function MapsTemplate({ data }) {
    console.log(data)
    const pageData = data.markdownRemark.frontmatter;
    const Map = ReactMapboxGl.Map({
        accessToken: "pk.eyJ1IjoiaGF4emllIiwiYSI6ImNqZ2c2NWp3OTBxenAzM3FzeThydmZ0YncifQ.584ugILuKFfDPTxqyiO_0g"
    });
    return (
        <>
        <SEO title={`${pageData.name} by ${pageData.author}`}
            description={`Stylish Mapbox designer theme ${pageData.name} by ${pageData.author} published at StyleBox`}/>
        <MapPage data={pageData} Map={Map}/>
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
