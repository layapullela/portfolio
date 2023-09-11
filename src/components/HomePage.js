import React from 'react';
import './HomePage.css';
import profilePicture from '../images/Headshot.jpeg';

function HomePage() {
  return (
    <div className="home-page">
      <img className="profile-pic" src={profilePicture} alt="Laya Pullela" />
      <div className="buttons">
        <button className="resume-button" onClick={() => { /* Add your code to open resume */ }}>
          <strong>Resume</strong>
        </button>
        <button className="projects-button" onClick={() => { /* Add your code to navigate to projects */ }}>
          <strong>Projects</strong>
        </button>
      </div>
      <p>Hi folks, this is typing animation using CSS</p>
    </div>
  );
  
}

export default HomePage;
