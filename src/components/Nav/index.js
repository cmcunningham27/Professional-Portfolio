import React from 'react';
import home from '../../assets/images/home.png';
import about from '../../assets/images/about-me.png';
import project from '../../assets/images/my-work.png';
import resume from '../../assets/images/resume.png';
import './style.css';

const Nav = () => {
    return (
        <ul className='list-group'>
            <li className='list-group-item'>
                <a className="icons" href="#header">
                    <img className="home" src={home} alt="House black icon" />
                    <p className="hidden">Home</p>
                </a>
            </li>
            <li className='list-group-item'>
                <a className="icons" href="#about-me">
                    <img className="aboutme" src={about} alt="Faceless and armless upper torso with question mark on stomach black icon" />
                    <p className="hidden">About Me</p>
                </a>
            </li>
            <li className='list-group-item'>
                <a className="icons" href="#projects">
                    <img className="mywork" src={project} alt="Lightbulb black icon" />
                    <p className="hidden">Projects</p>
                </a>
            </li>
            <li className='list-group-item'>
                <a className="icons"href="#contact">
                    <img className="contact" src={resume} alt="Contact book with faceless and armless upper torso black icon" />
                    <p className="hidden">Contact</p>
                </a>
            </li>
        </ul>
    )
};

export default Nav;