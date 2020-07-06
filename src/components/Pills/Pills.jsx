import { Badge } from 'react-bootstrap'
import styles from './Pills.module.css'
import React from 'react'

export default function Pills({ pills, variant }) {
    return (pills.map(pill => {
        return <Badge pill variant={variant} className={styles.Pill} key={pill} > {pill}</Badge>
    }))
}