import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../components/Grid';
import MainProject from '../components/MainProject';
import API from '../utils/API';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        API.getInfo()
            .then((res) => setRepos({ 
                starredRepos: res.data.map((e, i) => ({
                    key: i,
                    name: e.name,
                    link: e.svn_url,
                }))
            }))
            .catch((err) => console.log(err));
    }, []);

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
};

export default Projects;