import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import ContactCard from '../components/ContactCard';

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='sm-12'>
                    <h1 className='contactTitle text-light'>
                        Contacts
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col size='sm-12'>
                    <ContactCard />
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;