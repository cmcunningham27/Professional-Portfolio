import React from 'react';

const SmallProject = ({ name, link }) => {
    return (
        <div className='smallProject'>
            <h5 class="title">
                {name}
            </h5>
            <a href='' target='_blank' rel='noreferrer'>
                <img class="project-img"/>
            </a>
            <button class="github-btn">
                <a href={link} target='_blank' rel='noreferrer'>
                    GitHub repository
                </a>
            </button> 
        </div>
    )
};

export default SmallProject;