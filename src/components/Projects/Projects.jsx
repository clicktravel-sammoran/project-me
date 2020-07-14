import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import styles from './Projects.module.css'

import projects from '../../data/projects'
import TechStack from '../TechStack/TechStack'
import ProjectLinks from '../ProjectLinks/ProjectLinks'


const Projects = () => {
    return (
        <CardDeck className={styles.Deck}>
            {projects.map(project => {
                const { title, description, urls, techStack } = project
                return (
                    < Card className={styles.Card} key={title}>
                        <Card.Header >
                            <Card.Title >
                                {title}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <TechStack techStack={techStack} />
                        <ProjectLinks urls={urls} />
                    </Card>
                )
            })}
        </CardDeck >
    )

}

export default Projects