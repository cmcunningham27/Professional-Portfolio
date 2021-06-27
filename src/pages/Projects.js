import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../components/Grid';
import MainProject from '../components/MainProject';
import SmallProject from '../components/SmallProject';
import API from '../utils/API';

const Projects = () => {
    //sets default state to an empty array
    const [repos, setRepos] = useState([]);

    //upon page mounting, collects data of my starred repos
    useEffect(() => {
        API.getInfo()
            .then((res) => setRepos( 
                res.data.map((e, i) => ({
                    key: i,
                    name: e.name,
                    link: e.svn_url,
                }))
            ))
            .catch((err) => console.log(err));
    }, []);
    
    return (
        <Container fluid>
            <Row>
                <Col size='sm-12'>
                    <h1 className='projectTitle m-4 text-light'>
                        My Projects
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col size='sm-12'>
                    <div className='d-flex flex-row justify-content-center'>
                        <MainProject />   
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size='sm-12'>
                    <div className='d-flex flex-row flex-wrap justify-content-center'>
                        {/* goes through starred repos array and creates a card for each */}
                        {repos.length ? (repos.map((repo) => {
                            return (
                                <SmallProject 
                                    key={repo.key} 
                                    name={repo.name}
                                    link={repo.link}
                                />  
                            )
                        })) : <p>Loading...</p>}
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Projects;