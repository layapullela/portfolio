import React from 'react';
import { useNavigate } from "react-router-dom";
import './HomePage.css';
import profilePicture from '../images/Headshot.jpeg';


function HomePage() {
  const navigate = useNavigate();
  
  // Define functions for handling button clicks
  const openResume = () => {
    navigate("/resume"); // Navigate to resume page
  };

  const navigateToProjects = () => {
    navigate("/myprojects");
  };

  return (
    <div className="home-page">
      <img className="profile-pic" src={profilePicture} alt="Laya Pullela" />
        <p></p>
        <p> hello! i'm laya pullela. welcome to my portfolio! i'm a computer science major &#128187;</p>
        <p> at ucsb &#127940; interested in natural language processing &#128214; and medical applications &#129516; of ml.</p>
        <p> on my free time, i love to run &#127939;, hike &#129406;, and bake &#128523;.</p>
      <div className="buttons">
        <button className="resume-button" onClick={openResume}>
          <strong>Resume</strong>
        </button>
        <button className="projects-button" onClick={navigateToProjects}>
          <strong>Projects</strong>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
