import React from 'react';
import Online from '../../assets/images/Online-Offline-Budget-Tracker.png'
import Directory from '../../assets/images/Employee-Directory.png';
import Tracker from '../../assets/images/Employee-Tracker_photo.png';
import Blog from '../../assets/images/MVC-Tech-Blog_photo.png';
import Song from '../../assets/images/Whats-the-Song_photo.png';
let photo;
let git;

const SmallProject = ({ name, link }) => {

    switch(name) {
        case 'Online-Offline-Budget-Trackers':
            photo = Online;
            git = 'https//safe-dawn-19198.herokuapp.com';
            break;
        case 'Employee-Directory_React':
            photo = Directory;
            git = 'https://cmcunningham27.github.io/Employee-Directory_React';
            break;
        case 'MySQL-Employee_Tracker':
            photo = Tracker;
            git = '';
            break;
        case 'MVC-Tech_Blog':
            photo = Blog;
            git = 'https://safe-river-08906.herokuapp.com';
            break;
        case 'Whats-the-Song-app':
            photo = Song;
            git = 'https://cmcunningham27.github.io/Whats-the-Song-app';
            break;
        default:
            break;
    };
   
    // if(name === 'Online-Offline-Budget-Tracker') {
    //     const photo = {Online};
    //     return photo;
    // }

    return (
        <div className='smallProject'>
            <h5 className="title">
                {name}
            </h5>
            <a href={git} target='_blank' rel='noreferrer'>
                <img className="project-img" src={photo}/>
            </a>
            <button className="github-btn">
                <a href={link} target='_blank' rel='noreferrer'>
                    GitHub repository
                </a>
            </button> 
        </div>
    )
};

export default SmallProject;