import React from 'react'
import Card from 'react-bootstrap/Card'
import workHistory from '../../data/work_history'
import styles from './WorkHistory.module.css'


export default function WorkHistory() {
    return (
        <div>
            {workHistory.map(job => {
                const { current, jobTitle, company, logo, date, description, keyPoints, techStack } = job
                return (
                    <Card bg={current ? 'warning' : 'clear'} className={styles.card}>
                        < Card.Body >
                            <Card.Title>{jobTitle} at {company}</Card.Title>
                            <Card.Subtitle>{date}</Card.Subtitle>
                            <Card.Text>{description}</Card.Text>
                        </ Card.Body>
                    </Card >
                )
            })};
        </div >
    )
}
