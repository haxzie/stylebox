import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
// import ReactMapboxGl from "react-mapbox-gl"
import { Row, Column, Expand } from '../Layout'


// hack to get the mapbox module out of webpack bundling
let ReactMapboxGl = {}
if (typeof window !== `undefined`) {
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

function MapPage({ data }) {

    const Map = ReactMapboxGl.Map({
        accessToken: "pk.eyJ1IjoiaGF4emllIiwiYSI6ImNqZ2c2NWp3OTBxenAzM3FzeThydmZ0YncifQ.584ugILuKFfDPTxqyiO_0g"
    });

    return (
        <div className={styles.mapsPage}>
            <Map
                style={data.url}
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}
            ></Map>
            <div className={styles.bottomBar}>
                <Row expand={true}>
                    <Expand>
                        <Column>
                            <p className={styles.title}>{data.name}</p>
                            <p className={styles.caption}>by <a href={`https://gihtub.com/${data.github}`} target="_blank" rel="noopener">{data.author}</a></p>
                        </Column>
                    </Expand>
                    <a href={`https://studio.mapbox.com/${data.url.slice(9, data.url.length)}`} target="_blank" rel="noopener">
                        <i className={['material-icons', styles.openIcon].join(' ')}>open_in_new</i>
                    </a>
                </Row>
            </div>
            <Link to="/">
                <i className={["material-icons", styles.backButton].join(' ')}>arrow_back</i>
            </Link>
            <i className={["material-icons", styles.copyButton].join(' ')}>link</i>
        </div>
    )
}

export default MapPage
