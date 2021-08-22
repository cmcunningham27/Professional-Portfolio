//imports all dependencies and files needed
import React from 'react';
import Online from '../../assets/images/Online-Offline-Budget-Tracker.png'
import Directory from '../../assets/images/Employee-Directory.png';
import Tracker from '../../assets/images/Employee-Tracker_photo.png';
import Blog from '../../assets/images/MVC-Tech-Blog_photo.png';
import Song from '../../assets/images/Whats-the-Song_photo.png';
import Books from '../../assets/images/Google-Books-Search.png';
import Moimeries from '../../assets/images/MOI-ME-RIES_photo.png';
import './style.css';
let photo;
let git;
let info;
let summary;

const SmallProject = ({ name, link }) => {
    // sets attributes based on which project was collected at the time
    switch(name) {
        case 'Online-Offline-Budget-Trackers':
            photo = Online;
            git = 'https://safe-dawn-19198.herokuapp.com';
            info = 'Indexed DB and list of transactions';
            summary = 'An App that allows users to keep track of their budget when online and offline.';
            break;
        case 'Employee-Directory_React':
            photo = Directory;
            git = 'https://cmcunningham27.github.io/Employee-Directory_React';
            info = 'Employees beginning with letter b';
            summary = 'A React app that allows its users to view all employees in a directory and search by typing in a name or sort employees by Name or Phone.';
            break;
        case 'MySQL-Employee_Tracker':
            photo = Tracker;
            git = link;
            info = '3 tables: all employees, employees by department, and employees by manager';
            summary = 'CMS that allows Managers the ability to organize and plan their business. Managers can view and manage the departments, roles, and employees in their company';
            break;
        case 'MVC-Tech_Blog':
            photo = Blog;
            git = 'https://safe-river-08906.herokuapp.com';
            info = 'blog post for Mailbox Peak';
            summary = 'An app to publish blog posts, my thoughts and feelings.';
            break;
        case 'Whats-the-Song-app':
            photo = Song;
            git = 'https://cmcunningham27.github.io/Whats-the-Song-app';
            info = 'Spotify Login to begin searching for songs';
            summary = 'Music application that gives you the ability to search for music by: Lyrics, Artist, Song Title, or Album.';
            break;
        case 'Google-Books-Search':
            photo = Books;
            git = 'https://murmuring-beach-73094.herokuapp.com/';
            info = 'List of saved books';
            break;
        case 'moi-me-ries':
            photo = Moimeries;
            git = 'https://blooming-ocean-65385.herokuapp.com/';
            info = 'Login page';
            summary = 'An app to share bucket-list events both past and future.';
            break;
        default:
            break;
    };

    return (
        <div className='smallProject d-flex flex-column align-items-center'>
            <a href={git} target='_blank' rel='noreferrer'>
                <img className="project-img" src={photo} alt={info}/>
            </a>
            <div className='content mt-auto'>
                <h5 className="title">
                    {name}
                </h5>
                <button className="github-btn btn">
                    <a href={link} target='_blank' rel='noreferrer'>
                        GitHub repository
                    </a>
                </button>
                <p>
                    {summary}
                </p>
            </div> 
        </div>
    )
};

export default SmallProject;