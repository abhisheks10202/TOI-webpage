import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import R2Timage from '../../assets/image_overlay/R2T.jpg';
import RADimage from '../../assets/image_overlay/RAD.jpg';

import './overlayCards.styles.scss';

const OverlayCards = () => {
    return(
      <div>
        <Card className="bg-dark text-white Ocard">
          <Card.Img src={R2Timage} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='title'>REACH TO TEACH</Card.Title>
            <Card.Text>
            It’s high time that the suppressed talents get uplifted, education be skill-enriched and young crops get nurtured, aligned with their regular curriculum.
            TOI attempts to promote holistic development and provide formative skill-development modules and opportunities.
            Our fellows encourage the kids to:<br/>
            ● Focus on their interest domain.<br/>
            ● Experience hands-on and seek to provide them with the right exposure.<br/>
            ● Create a sustainable global impact.
            <Nav.Link className="blink">Join the movement...</Nav.Link>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white Ocard">
          <Card.Img src={RADimage} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='title'>RAISE A DREAM</Card.Title>
            <Card.Text>
              Join hands and help TOI to Raise a Dream of impoverished talented children by providing them the access to your platform/network and with continuous assistance from our fellows. Help TOI raise a million dreams.
              ● Mentor a dream.
              ● Help the talented to showcase their skills.
              ● Transit them with your platform, connect dreams with reality.
              ● Refine the talent with your guidance and support.
              ● Complete your social responsibility.
              ❖ TOI will be pleased to associate with NGO’s, corporates, artists, institutions,academies, start-ups, professionals, businesses and others.  
            <Nav.Link className="blink">Join the movement...</Nav.Link>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
    </div>
        );
}

export default OverlayCards;