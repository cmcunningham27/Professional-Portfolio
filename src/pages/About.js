import React from 'react';
import { Container, Row, Col } from '../components/Grid';

const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='sm-12'>
                    <h1>
                        Experience
                    </h1>
                    <p>
                    As a recent Full Stack Web Developing graduate from University of Washington, I am excited to work collaboratively with a like-minded team. My passion is in providing an end product that is pleasing to the eye, adaptable, clean, responsive, and easily navigated by the user. I am highly skilled in troubleshooting when complications arise, organizing and creating legible code, HTML/CSS and Javascript languages, and making sure products are responsive for all device screen sizes. Working with a group of creators has proven beneficial when it comes to the time needed to finish a product, adaptability and flexibility in coding as each individual has their own techniques, and communication as it pertains to solving an error together from another team member's or my own code.
                    </p>
                </Col>
            </Row>
        </Container>
    )
};

export default About;