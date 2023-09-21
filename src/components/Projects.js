import React from 'react';
import './Projects.css';
import AutodocLogo from '../images/autodoc_logo.png'; // Replace with the actual path to your logo image
import ChocLogo from '../images/choclogo_color.png';
import travelLogo from '../images/travel.png'
import gitLogo from '../images/github.png';
import LinkedLogo from '../images/linkedin.png';

const Projects = () => {
  const autodocRedir = () => {
    window.location.href = "https://autodoc1-0-2341f1c6dfd1.herokuapp.com";
  };

  const chocRedir = () => {
    window.location.href = "https://drive.google.com/file/d/15vSPAEr12ZTdOqwiXtQxcTrL5zaW5rod/view?usp=sharing";
  };

  const travelRedir = () => {
    window.location.href = "https://laya-travelblog-9623586bec2a.herokuapp.com";
  }

  const gitRedir = () => {
    window.location.href = "https://github.com/layapullela";
  };

  const linkedInRedir = () => {
    window.location.href = "https://www.linkedin.com/in/laya-pullela-a0662820b/";
  };

  return (
    <div className="center-container">
      <div className="button-wrapper">
        <button className="app-button" onClick={autodocRedir}>
          <img src={AutodocLogo} alt="Logo" className="app-logo" />
        </button>
        <div className="overlay">
          <span className="description"><strong>my autodoc webapp is a medical diagnostic validation tool with data scraped from mayo clinic.</strong></span>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="app-button" onClick={chocRedir}>
          <img src={ChocLogo} alt="Logo" className="app-logo" />
        </button>
        <div className="overlay">
          <span className="description"><strong>my research project presented at the pediatric academic societies conference in 2023.</strong></span>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="app-button" onClick={travelRedir}>
          <img src={travelLogo} alt="Logo" className="app-logo" />
        </button>
        <div className="overlay">
          <span className="description"><strong>my blog traveling through the usa national parks.</strong></span>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="app-button" onClick={gitRedir}>
          <img src={gitLogo} alt="Logo" className="app-logo" />
        </button>
        <div className="overlay">
          <span className="description"><strong>my github profile!</strong></span>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="app-button" onClick={linkedInRedir}>
          <img src={LinkedLogo} alt="Logo" className="app-logo" />
        </button>
        <div className="overlay">
          <span className="description"><strong>my linkedin profile!</strong></span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
