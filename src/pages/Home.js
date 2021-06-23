import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import image from '../assets/images/profile-image.jpg';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='sm-12'>
                    <img className='profileImage rounded-circle' src={image} alt='Cassandra Cunningham'/>
                </Col>
            </Row>
        </Container>
    )
};
  
export default Home;