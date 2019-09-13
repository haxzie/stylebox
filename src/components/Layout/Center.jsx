import React from 'react'
import styles from './styles.module.scss'

function Center({ children }) {
    return (
        <div className={styles.center}>
            {children}
        </div>
    )
}

export default Center
