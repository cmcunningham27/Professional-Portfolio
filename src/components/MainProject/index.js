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
                    <a href='https://github.com/cmcunningham27/me-moirs' target='_blank' rel='noreferrer'>
                        GitHub repository
                    </a>
                </button>
                <p>
                    Gives users an intentional platform to make a more personalized profile with information of their choice. 
                </p>
                <ul class='list-group list-group-horizontal'>
                    <li class='list-group-item'>React.js</li>
                    <li class='list-group-item'>Express.js</li>
                    <li class='list-group-item'>Node.js</li>
                    <li class='list-group-item'>Bcryptjs</li>
                    <li class='list-group-item'>Mongoose</li>
                    <li class='list-group-item'>Axios</li>
                </ul>
            </div>
        </div>
    )
};

export default MainProject;