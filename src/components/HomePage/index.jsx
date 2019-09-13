import React from 'react'
import styles from './styles.module.scss'
import { Column, Row } from '../Layout';

function HomePage({ maps }) {
    console.log(JSON.stringify(maps, null, 2))
    return (
        <Column>
            {/* Header and caption of homepage */}
            <div className={styles.homePageHeader}>
                <h1>Mapbox designer map styles.</h1>
                <p>Free to use, Handcrafted collection of stylish MapBox styles.</p>
            </div>

            {/* Content display grid */}
            <div className={styles.contentGrid}>
                <div className={styles.contentItem}></div>
                <div className={styles.contentItem}></div>
                <div className={styles.contentItem}></div>
                <div className={styles.contentItem}></div>
            </div>
        </Column>
    )
}

export default HomePage
