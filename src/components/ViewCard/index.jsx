import React from 'react'
import styles from './styles.module.scss'
import Img from 'gatsby-image'

function ViewCard({ data }) {
    return (
        <div className={styles.viewCard}>
            <Img className={styles.cover} fluid={data.cover.childImageSharp.fluid} />
            <p className={styles.title}>{data.name}</p>
            <p className={styles.caption}>{data.author}</p>
        </div>
    )   
}

export default ViewCard
