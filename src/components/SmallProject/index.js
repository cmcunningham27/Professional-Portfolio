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
let list;

const SmallProject = ({ name, link }) => {
    // sets attributes based on which project was collected at the time
    switch(name) {
        case 'Online-Offline-Budget-Trackers':
            photo = Online;
            git = 'https://safe-dawn-19198.herokuapp.com';
            info = 'Indexed DB and list of transactions';
            summary = 'An app that allows users to keep track of their budget when online and offline.';
            list =  <ul id='techList'>
                        <li class='listItem'>CSS</li>
                        <li class='listItem'>Javascript</li>
                        <li class='listItem'>HTML</li>
                        <li class='listItem'>Express.js</li>
                        <li class='listItem'>Mongoose</li>
                        <li class='listItem'>MongoDB</li>
                        <li class='listItem'>IndexedDB</li>
                        <li class='listItem'>Manifest</li>
                        <li class='listItem'>Service-worker</li>
                    </ul>
            break;
        case 'Employee-Directory_React':
            photo = Directory;
            git = 'https://cmcunningham27.github.io/Employee-Directory_React';
            info = 'Employees beginning with letter b';
            summary = 'A React app that allows its users to view all employees in a directory and search by typing in a name or sort employees by Name or Phone.';
            list =  <ul id='techList'>
                        <li class='listItem'>CSS</li>
                        <li class='listItem'>React</li>
                        <li class='listItem'>HTML</li>
                        <li class='listItem'>Bootstrap</li>
                        <li class='listItem'>Axios</li>
                    </ul>;
            break;
        case 'MySQL-Employee_Tracker':
            photo = Tracker;
            git = link;
            info = '3 tables: all employees, employees by department, and employees by manager';
            summary = 'CMS that allows Managers the ability to organize and plan their business. Managers can view and manage the departments, roles, and employees in their company';
            list =  <ul id='techList'>
                        <li class='listItem'>Node.js</li>
                        <li class='listItem'>MySQL</li>
                        <li class='listItem'>Inquirer</li>
                    </ul>;
            break;
        case 'MVC-Tech_Blog':
            photo = Blog;
            git = 'https://safe-river-08906.herokuapp.com';
            info = 'blog post for Mailbox Peak';
            summary = 'An app to publish blog posts, my thoughts and feelings.';
            list =  <ul id='techList'>
                        <li class='listItem'>CSS</li>
                        <li class='listItem'>Javascript</li>
                        <li class='listItem'>Handlebars.js</li>
                        <li class='listItem'>Express.js</li>
                        <li class='listItem'>Express-Session.js</li>
                        <li class='listItem'>MySQL2</li>
                        <li class='listItem'>Node.js</li>
                        <li class='listItem'>Bootstrap</li>
                        <li class='listItem'>Bcrypt.js</li>
                        <li class='listItem'>Sequelize</li>
                    </ul>;
            break;
        case 'Whats-the-Song-app':
            photo = Song;
            git = 'https://cmcunningham27.github.io/Whats-the-Song-app';
            info = 'Spotify Login to begin searching for songs';
            summary = 'Music application that gives you the ability to search for music by: Lyrics, Artist, Song Title, or Album.';
            list =  <ul id='techList'>
                        <li class='listItem'>CSS</li>
                        <li class='listItem'>Javascript</li>
                        <li class='listItem'>HTML</li>
                        <li class='listItem'>Spotify API</li>
                        <li class='listItem'>Musixmatch API</li>
                    </ul>;
            break;
        case 'Google-Books-Search':
            photo = Books;
            git = 'https://murmuring-beach-73094.herokuapp.com/';
            info = 'List of saved books';
            summary = 'A MERN app that allows users to search, view, save, adn delete books using the Google Books API';
            list =  <ul id='techList'>
                        <li class='listItem'>CSS</li>
                        <li class='listItem'>React</li>
                        <li class='listItem'>HTML</li>
                        <li class='listItem'>Express.js</li>
                        <li class='listItem'>Node.js</li>
                        <li class='listItem'>MongoDB</li>
                        <li class='listItem'>Axios</li>
                        <li class='listItem'>Google Books API</li>
                    </ul>;
            break;
        case 'moi-me-ries':
            photo = Moimeries;
            git = 'https://blooming-ocean-65385.herokuapp.com/';
            info = 'Login page';
            summary = 'An app to share bucket-list events both past and future.';
            list =  <ul id='techList'>
                        <li class='listItem'>CSS</li>
                        <li class='listItem'>React</li>
                        <li class='listItem'>Javascript</li>
                        <li class='listItem'>Express.js</li>
                        <li class='listItem'>Node.js</li>
                        <li class='listItem'>Handlebars.js</li>
                        <li class='listItem'>Sequelize</li>
                        <li class='listItem'>Express-Session.js</li>
                        <li class='listItem'>Express-Fileupload.js</li>
                        <li class='listItem'>Bcrypt.js</li>
                    </ul>;
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
                <hr></hr>
                {list}
            </div> 
        </div>
    )
};

export default SmallProject;