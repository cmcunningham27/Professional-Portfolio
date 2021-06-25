import React, { Components } from 'react';
import { Container, Row, Col } from '../components/Grid';
import MainProject from '../components/MainProject';
import API from '../utils/API';

class Projects extends Components {
    componentDidMount() {
        API.getInfo()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    render() {
       return (
            <Container fluid>
                <Row>
                    <Col size='sm-12'>
                        <h1>
                            My Projects
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col size='sm-12'>
                        <MainProject />
                    </Col>
                </Row>
                <Row>
                    <Col size='sm-12'>
                        
                    </Col>
                </Row>
            </Container>
        ) 
    }
    
};

export default Projects;