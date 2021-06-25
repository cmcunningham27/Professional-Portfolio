import React from 'react';

const MainProject = () => {
    return (
        <div className='MainProject'>
            <h3 class='title'>MOI-ME-RIES App</h3>
            <a href='https://blooming-ocean-65385.herokuapp.com/' target='_blank' rel='noreferrer'>
                <img class='project1-img' src='./assets/images/MOI-ME-RIES_photo.png' alt='Login page for MOI-ME-RIES app.' />
            </a>
            <button class='github-btn'>
                <a href='https://github.com/cmcunningham27/moi-me-ries' target='_blank' rel='noreferrer'>
                    GitHub repository
                </a>
            </button>
        </div>
    )
};

export default MainProject;