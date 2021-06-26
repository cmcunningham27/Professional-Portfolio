import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../assets/images/home.png';
import about from '../../assets/images/about-me.png';
import project from '../../assets/images/my-work.png';
import resume from '../../assets/images/resume.png';
import contact from '../../assets/images/contact.png';
import Resume from '../../assets/resume/CMC_Resume.pdf';
import './style.css';

const Nav = () => {
    return (
        <div>
            <NavLink className='icons navbar-item' activeClassName='is-active' to='/Professional-Portfolio' exact>
                <img className='home' src={home} alt='House black icon' />
                {/* <p className="hidden">Home</p> */}
            </NavLink>
            <NavLink className='icons navbar-item' activeClassName='is-active' to='/Professional-Portfolio/about' exact>
                <img className='aboutme' src={about} alt='Faceless and armless upper torso with question mark on stomach black icon' />
                {/* <p className="hidden">About Me</p> */}
            </NavLink>
            <NavLink className='icons navbar-item' activeClassName='is-active' to='/Professional-Portfolio/projects' exact>
                <img className='mywork' src={project} alt='Lightbulb black icon' />
                {/* <p className="hidden">Projects</p>*/}
            </NavLink> 
            <NavLink className='icons' to={Resume} target='_blank' rel='noreferrer'>
                <img className='resume' src={resume} alt='Sheet of paper with women torso and lines below, and a magnifiying glass containing a check mark black icon' />
                {/* <p className="hidden">Resume</p> */}
            </NavLink>
            <NavLink className='icons navbar-item' activeClassName='is-active' to='/Professional-Portfolio/contact' exact>
                <img className='contact' src={contact} alt='Contact book with faceless and armless upper torso black icon' />
                {/* <p className="hidden">Contact</p> */}
            </NavLink>
        </div>
    )
};

export default Nav;