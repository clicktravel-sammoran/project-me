import React, { useState } from 'react'
import { Card, Button, Collapse } from 'react-bootstrap'
import Pills from '../Pills/Pills'


const TechStack = ({ techStack }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="info"
            >
                {"Tech stack"}
            </Button>
            <Card.Footer >
                <Collapse in={open}>
                    <div>
                        <Pills pills={techStack} variant={"info"} />
                    </div>
                </Collapse>
            </Card.Footer>
        </>
    )

}

export default TechStack