import React from 'react';
import { Container, Row, Col } from '../components/Grid';

const About = () => {
    return (
            <Container fluid>
                <Row>
                    <Col size='sm-12'>
                        <h1 className='aboutTitle text-light'>
                            Experience
                        </h1>
                        
                    </Col>
                </Row>
                <Row>
                    <Col size='sm-12'>
                        <p className='About text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5'}}>
                            Recent Full-Stack Web Development Graduate seeking a future career as a Full-Stack or Back-End Web Developer that leverages my skills in Mathematics. I have developed skills in Node.js, Express.js, HTML, CSS, Javascript, jQuery, Mongoose, Axios, Bootstrap, MySQL, Handlebars.js, Rest API’s, Git, Sequelize.js, React.js, and responsive web design. Known as a driven problem-solver passionate about developing apps that create meaningful connections. Excited to continue learning and bring my attention to detail, with a quality-driven team to grow and become a valuable asset. 
                        </p>
                    </Col>
                </Row>
            </Container> 
    )
};

export default About;