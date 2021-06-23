import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/images/home.png';
// import about from '../../assets/images/about-me.png';
// import project from '../../assets/images/my-work.png';
// import resume from '../../assets/images/resume.png';
// import contact from '../../assets/images/contact.png';
import './style.css';

const Nav = () => {
    return (
        <div>
            <Link className="icons" to="/Professional-Portfolio">
                <img className="home" src={home} alt="House black icon" />
                {/* <p className="hidden">Home</p> */}
            </Link>
            {/* <a className="icons" href="#about-me">
                <img className="aboutme" src={about} alt="Faceless and armless upper torso with question mark on stomach black icon" />
                {/* <p className="hidden">About Me</p> */}
            {/* </a>
            <a className="icons" href="#projects">
                <img className="mywork" src={project} alt="Lightbulb black icon" />
                {/* <p className="hidden">Projects</p> */}
            {/* </a> */}
            {/* <a className="icons" href="./assets/resume/CMC_Resume.pdf" target="_blank">
                <img className="resume" src={resume} alt="Sheet of paper with women torso and lines below, and a magnifiying glass containing a check mark black icon" />
                {/* <p className="hidden">Resume</p> */}
            {/* </a> */} */}
            {/* <a className="icons"href="#contact">
                <img className="contact" src={contact} alt="Contact book with faceless and armless upper torso black icon" />
                {/* <p className="hidden">Contact</p> */}
            {/* </a> */} */} */} */}
        </div>
    )
};

export default Nav;