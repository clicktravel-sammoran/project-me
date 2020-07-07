import React from 'react'
import { Card, Image, Container } from 'react-bootstrap'
import workHistory from '../../data/work_history'
import styles from './WorkHistory.module.css'
import Pills from '../Pills/Pills'

const WorkHistory = () => {
    return (
        <div>
            {workHistory.map(job => {
                const { current, jobTitle, company, logo, date, description, keyPoints, techStack, link } = job
                return (
                    <Card border={current ? 'warning' : 'clear'} className={styles.Card} key={`${company}Card`}>
                        <Container className={styles.Container}>
                            <Image src={logo} rounded className={styles.Logo} />
                            < Card.Body >
                                <Card.Title>{jobTitle} @ <a href={`https://${link}`}>{company}</a></Card.Title>
                                <Card.Subtitle>{date}</Card.Subtitle>
                                <Card.Text>{description}</Card.Text>
                                <Container className={styles.PillContainer}>
                                    {techStack ? (<section key={"techStack"}>{'Tech stack: '}< Pills pills={techStack} variant={"info"} /></section>) : null}
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
