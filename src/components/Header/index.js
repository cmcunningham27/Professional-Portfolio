import React from 'react';
import { Container, Row, Col } from '../Grid';
import Nav from '../Nav';

const Header = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='xs-12 sm-4 md-5 lg-7'>
                    <h3 className='CMC'>
                        Cassandra Cunningham
                    </h3>
                </Col>
                <Col size='xs-12 sm-8 md-7 lg-5'>
                    <Nav />
                </Col>
            </Row>
        </Container>
    )
};

export default Header;