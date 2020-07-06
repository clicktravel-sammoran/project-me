import React from 'react'
import { Card, Image, Container } from 'react-bootstrap'
import workHistory from '../../data/work_history'
import styles from './WorkHistory.module.css'
import Pills from '../Pills/Pills.jsx'

const WorkHistory = () => {
    return (
        <div>
            {workHistory.map(job => {
                const { current, jobTitle, company, logo, date, description, keyPoints, techStack } = job
                return (
                    <Card border={current ? 'warning' : 'clear'} className={styles.Card} key={company}>
                        <Container className={styles.Container}>
                            <Image src={logo} rounded className={styles.Logo} />
                            < Card.Body >
                                <Card.Title>{jobTitle} at {company}</Card.Title>
                                <Card.Subtitle>{date}</Card.Subtitle>
                                <Card.Text>{description}</Card.Text>
                                <Container className={styles.PillContainer}>
                                    {techStack ? (<section key={"techStack"}>{'TechStack: '}< Pills pills={techStack} variant={"info"} /></section>) : null}
                                    {keyPoints ? (<section key={"keyPoints"}>{'Tags: '}<Pills pills={keyPoints} variant={"success"} /></section>) : null}
                                </Container>
                            </ Card.Body>
                        </Container>
                    </Card >
                )
            })};
        </div >
    )
}

export default WorkHistory
