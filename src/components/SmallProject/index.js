import React from 'react';
import Online from '../../assets/images/Online-Offline-Budget-Tracker.png'
import Directory from '../../assets/images/Employee-Directory.png';
import Tracker from '../../assets/images/Employee-Tracker_photo.png';
import Blog from '../../assets/images/MVC-Tech-Blog_photo.png';
import Song from '../../assets/images/Whats-the-Song_photo.png';
let photo;
let git;
let info;

const SmallProject = ({ name, link }) => {

    switch(name) {
        case 'Online-Offline-Budget-Trackers':
            photo = Online;
            git = 'https//safe-dawn-19198.herokuapp.com';
            info = 'Indexed DB and list of transactions';
            break;
        case 'Employee-Directory_React':
            photo = Directory;
            git = 'https://cmcunningham27.github.io/Employee-Directory_React';
            info = 'Employees beginning with letter b';
            break;
        case 'MySQL-Employee_Tracker':
            photo = Tracker;
            git = '';
            info = '3 tables: all employees, employees by department, and employees by manager';
            break;
        case 'MVC-Tech_Blog':
            photo = Blog;
            git = 'https://safe-river-08906.herokuapp.com';
            info = 'blog post for Mailbox Peak';
            break;
        case 'Whats-the-Song-app':
            photo = Song;
            git = 'https://cmcunningham27.github.io/Whats-the-Song-app';
            info = 'Spotify Login to begin searching for songs';
            break;
        default:
            break;
    };

    return (
        <div className='smallProject'>
            <h5 className="title">
                {name}
            </h5>
            <a href={git} target='_blank' rel='noreferrer'>
                <img className="project-img" src={photo} alt={info}/>
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