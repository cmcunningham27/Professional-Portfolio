import React from 'react';
import './style.css';
import Memoirs from '../../assets/images/ME-MOIRS_photo.png'

const MainProject = () => {
    return (
        <div className='MainProject d-flex flex-column'>
            <a href='https://protected-basin-89410.herokuapp.com/' target='_blank' rel='noreferrer'>
                <img className='project1-img' src={Memoirs} alt='Login page for ME-MOIRS app.' />
            </a>
            <div className='content'>
                <h3 className='title'>ME-MOIRS App</h3>
                <button className='github-btn btn'>
                    <a href='https://github.com/harben31/project3' target='_blank' rel='noreferrer'>
                        GitHub repository
                    </a>
                </button>
            </div>
        </div>
    )
};

export default MainProject;