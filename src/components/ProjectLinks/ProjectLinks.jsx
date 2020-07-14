import React, { useState } from 'react'
import { Card, Nav, Button, Collapse } from 'react-bootstrap'
import styles from './ProjectLinks.module.css'

import linkTitle from '../../functions/linkTitle'


const ProjectLinks = ({ urls }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="secondary"
            >
                {"Project Links"}
            </Button>
            <Card.Footer >
                <Collapse in={open}>
                    <div>
                        {
                            urls.map(url => {
                                return (

                                    <Nav.Item key={url} className={styles.Link}>
                                        <a target="_blank" rel="noopener noreferrer" href={url}>{linkTitle({ url })}</a>
                                    </Nav.Item>

                                )
                            })
                        }
                    </div>

                </Collapse>
            </Card.Footer >



        </>

    )
}
export default ProjectLinks