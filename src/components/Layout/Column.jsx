import React from 'react'
import styles from './styles.module.scss'

function Column({ children }) {
    return (
        <div className={styles.column}>
            { children }
        </div>
    )
}

export default Column
