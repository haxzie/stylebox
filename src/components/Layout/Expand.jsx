import React from 'react'
import styles from './styles.module.scss'

function Expand({ children }) {
    return (
        <div className={styles.expand}>
            { children }
        </div>
    )
}

export default Expand
