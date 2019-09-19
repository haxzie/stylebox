import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import { Row, Column, Expand } from '../Layout'



function MapPage({ data, Map }) {
    return (
        <div className={styles.mapsPage}>
            <div style={{ width: '100vw', height: '100vh' }}>
                <Map
                    style={data.url}
                    containerStyle={{ width: '100%', height: '100%' }}
                    onMapLoaded={map => {
                        console.log('Map loaded')
                        map.resize();
                    }}
                ></Map>
            </div>
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
        </div >
    )
}

export default MapPage
