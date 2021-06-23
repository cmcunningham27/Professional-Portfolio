import React from 'react';
import { Container, Row, Col } from '../Grid';
import Nav from '../Nav';

const Header = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='sm-7'>
                    <h1>Cassandra Cunningham</h1>
                </Col>
                <Col size='sm-5'>
                    <Nav />
                </Col>
            </Row>
        </Container>
    )
};

export default Header;