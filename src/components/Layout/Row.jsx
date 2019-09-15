import React from 'react'
import styles from './styles.module.scss'

function Row({ children, expand }) {
    return (
        <div className={[expand? styles.fullWidth: '', styles.row].join(' ')}>
            {children}
        </div>
    )
}

export default Row
