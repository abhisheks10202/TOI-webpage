import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

import enroll from '../../assets/Eimages/enroll.png'
import evaluate from '../../assets/Eimages/evaluate.png'
import engage from '../../assets/Eimages/engage.png'
import elevate from '../../assets/Eimages/elevate.png'

import './FourEs.styles.scss';

const Econtainer = () => {
    return(
        <div>
        <h1 className="E-title">The Four E's</h1><br/>
        <CardGroup>
            <Card className="Ecard">
                <Card.Img variant="top" src={enroll} />
                <Card.Body>
                <Card.Title className="E-card-title">ENROLL</Card.Title>
                <Card.Text>
                Register yourself to be the greatest change-maker who 
                contributes towards social responsibility.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="Ecard">
                <Card.Img variant="top" src={evaluate} />
                <Card.Body>
                <Card.Title className="E-card-title">EVALUATE</Card.Title>
                <Card.Text>
                Think of the current issues that are blockers to the 
                objectives and hurdles to the overall development.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="Ecard">
                <Card.Img variant="top" src={engage} />
                <Card.Body>
                <Card.Title className="E-card-title">ENGAGE</Card.Title>
                <Card.Text>
                Youth is the best solution for the problems.
                Engage yourself to think through it and eliminate the hurdles assessed
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="Ecard">
                <Card.Img variant="top" src={elevate} />
                <Card.Body>
                <Card.Title className="E-card-title">ELEVATE</Card.Title>
                <Card.Text>
                When you are into it, know how to act and handle it.
                Just feel the drive, be a touchstone to drive others!
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    );
}

export default Econtainer;