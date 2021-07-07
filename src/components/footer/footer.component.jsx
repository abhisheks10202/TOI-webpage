import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

import SocialFlow from '../socialIcons/socialIcons.component';

import logo from "../../assets/logo.png";

import './footer.styles.scss';

const FooterContainer = () => {
    return(
        <div className='footer'>
        <CardDeck className="deck">
            <Card className='footer-card'>
                <Card.Img className='logo' variant="top" src={logo} />
            </Card>
            <Card className='footer-card'>
                <Card.Body>
                <Card.Title className="footer-links"><span>| </span> USEFUL LINKS</Card.Title>
                <Card.Text className="footer-text">
                    <p>Blogs <hr/></p>
                    <p>Contact Us <hr/></p>
                    <p>Privacy Policy <hr/></p>
                    <p>Terms and Conditions <hr/></p>
                    <p>Disclaimer <hr/></p>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='footer-card'>
                <Card.Body>
                <Card.Title  className="footer-links"><span>| </span>FOLLOW US</Card.Title>
                <Card.Text className="footer-text">
                Follow us on our social media profile in order to keep updated
                </Card.Text>
                <SocialFlow/>
                </Card.Body>
            </Card>
            <Card className='footer-card'>
                <Card.Body>
                <Card.Title  className="footer-links"><span>| </span>OUR NEWSLETTER</Card.Title>
                <Card.Text className="footer-text">
                Stay up to date on TOI stories, TOI's monthly newsletter,
                along with the junction points where you can join us on 
                the road we are taking.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <div className="rights">All Rights Reserved by ©Think Of It Foundation 2020</div>
        </div>
    );
}

export default FooterContainer;