import React from 'react';
import './style.css';
import Moimeries from '../../assets/images/MOI-ME-RIES_photo.png'

const MainProject = () => {
    return (
        <div className='MainProject d-flex flex-column justify-content-center align-items-center'>
            <a href='https://blooming-ocean-65385.herokuapp.com/' target='_blank' rel='noreferrer'>
                <img className='project1-img' src={Moimeries} alt='Login page for MOI-ME-RIES app.' />
            </a>
            <div className='content'>
                <h3 className='title'>MOI-ME-RIES App</h3>
                <button className='github-btn btn'>
                    <a href='https://github.com/cmcunningham27/moi-me-ries' target='_blank' rel='noreferrer'>
                        GitHub repository
                    </a>
                </button>
            </div>
        </div>
    )
};

export default MainProject;