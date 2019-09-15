import React from 'react'
import styles from './styles.module.scss'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

function ViewCard({ data }) {
    return (
        <Link to={data.slug}>
            <div className={styles.viewCard}>
                <Img className={styles.cover} fluid={data.cover.childImageSharp.fluid} />
                <p className={styles.title}>{data.name}</p>
                <p className={styles.caption}>{data.author}</p>
            </div>
        </Link>
    )
}

export default ViewCard
