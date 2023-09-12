import React from 'react';
import './Resume.css';
import companyALogo from '../images/alignment_logo.png';  // Replace with the actual path to your Company A logo
import companyBLogo from '../images/choclogo.jpeg';  // Replace with the actual path to your Company B logo
import bionicLogo from '../images/bionic_vision.png';
import ucsbLogo from '../images/ucsb.png';

const ResumePage = () => (
  <div className="resume-container">
    <div className="resume-content">
      <div className="header">
        <h1>Laya Pullela</h1>
        <p>lpullela@ucsb.edu | layapullela.me</p>
      </div>

      <div className="section">
        <h2>summary</h2>
        <ul>
            <li>junior @ ucsb studying computer science</li>
            <li>searching for a challenging summer internship in software</li>
            <li>interested specifically in machine learning, nlp, and signal processing</li>
        </ul>
      </div>

      <div className="section">
        <h2>experience</h2>
        <div className="sub-section">
          <h3><img src={companyALogo} alt="Company A Logo" />alignment healthcare: machine learning (nlp) intern</h3>
          <p>june 2023 - september 2023</p>
          <ul>
            <li>launched a beta machine learning application with a user interface to extract relevant information from incoming medical faxes to alleviate manual data entry demands.</li>
            <li>achieved a model accuracy of 85% in entity recognition, and almost 100% in matching patients to the database.</li>
            <li>created a fine-tuned llm feature using qlora on biomedlm and meta's llama2 to assign icd10 codes to patients, beating existing recommendation engine by over 3x.</li>
          </ul>
        </div>
        <div className="sub-section">
          <h3><img src={companyBLogo} alt="Company B Logo" /> children's hospital orange county: lead data science intern</h3>
          <p>june 2022 - september 2023</p>
          <ul>
            <li>in 2022, created a supervised machine learning learning model for pediatric diagnostic prediction using over 13k samples of vital sign and demographic data in pediatric patients (mimic-3 database).</li>
            <li>presented the above project at pediatric academic societies conference in bioinformatics representing choc.</li>
            <li>selected as lead researcher to mentor 5 undergraduate interns, handpicked from a pool of 50+ candidates, for a ml project on pediatric anxiety diagnosis.</li>
            <li>engineered the project's core algorithm, utilizing an unsupervised learning approach to uncover patterns and correlations within 6 key socioeconomic and demographic features.</li>
          </ul>
        </div>
        <div className="sub-section">
          <h3><img src={bionicLogo} alt="Company B Logo" /> bionic vision lab: undergraduate research assistant</h3>
          <p>september 2022 - current</p>
          <ul>
            <li>developed a new temporal function for the pulse2percept python library (available on github) with three additional parameters to accurately predict the brightness of visual percepts in prosthetic retinal device users.</li>
            <li>designed and implemented optimization methods for these functions which reduced error between predicted and actual precepts by over 15x.</li>
          </ul>
        </div>
        <div className="sub-section">
          <h3><img src={ucsbLogo} alt="Company B Logo" /> ucsb: undergraduate learning assistant</h3>
          <p>march 2023 - current</p>
          <ul>
            <li>starting my second year, was selected by the cs department as a paid learning assistant for the advanced course in c++.</li>
            <li>dedicated 10 hours per week to hold office hours, grade exams, and answer students' questions on piazza.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>education</h2>
        <div className="sub-section">
          <h3>uc santa barbara</h3>
          <p>b.s. in computer science, 2025</p>
        </div>
      </div>

      <div className="section">
        <h2>skills</h2>
        <ul>
          <li>programming languages: python, c++, javascript, matlab</li>
          <li>frameworks: torch, tensorflow, node.js, react</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ResumePage;
