import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import image from '../assets/images/profile-image.jfif';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='sm-12'>
                    <img className='profileImage rounded-circle' src={image} alt='Cassandra Cunningham'/>
                    <h1 className='jobTitle text-light'>
                        Full-Stack Web Developer
                    </h1>
                    <h5 className='quote text-light'>
                        "Providing meaningful connections around the world"
                    </h5>
                </Col>
            </Row>
        </Container>
    )
};
  
export default Home;