import React from 'react';
import home from '../../assets/images/home.png';
import about from '../../assets/images/about-me.png';
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
        </ul>
    )
};

export default Nav;