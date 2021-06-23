import React from 'react';
import home from '../../assets/images/home.png';
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
        </ul>
    )
};

export default Nav;