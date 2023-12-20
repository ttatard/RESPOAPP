import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CSS/EmergencyTutorial1.css';
import logo1 from './Images/Dashboard1/logo1.png';

const VideoPlayer = ({ videoContent }) => {
  return (
    <div className="video-wrapper">
      {videoContent && (
        <video controls width="640" height="480">
          <source src={`data:video/mp4;base64,${videoContent}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

const EmergencyTutorialss = () => {
  const [videoData, setVideoData] = useState([]);

  const fetchTutorials = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tutorial/getAllTutorials/');
      console.log('Tutorial data:', response.data);
      setVideoData(response.data);
    } catch (error) {
      console.error('Error fetching tutorials: ', error);
    }
  };

  useEffect(() => {
    fetchTutorials();
  }, []);


  return (
    <div className="emergency">
      <div className="div">
        <p className="emergency-tutorials">
          <span className="text-wrapper">Emergency </span>
          <span className="span">Tutorials</span>
        </p>
        <Link to="/dashboard">
          <button className="inverted">
            <img alt="Inverted" src={logo1} />
          </button>
        </Link>
        <Link to="/call-for-help">
          <button className="text-wrapper-2">Call for Help</button>
        </Link>
        <Link to="/weather-update">
          <button className="text-wrapper-3">Weather Update</button>
        </Link>
        <Link to="/emergency-tutorials">
          <button className="text-wrapper-4">Emergency Tutorials</button>
        </Link>
        <button className="text-wrapper-5">Log-out</button>
        <img className="line" alt="Line" src="line-7.svg" />
        <p className="p">Copyright © 2023 RESPO Inc. All rights reserved</p>
        <div className="text-wrapper-6">Cebu City, Philippines</div>
      </div>
      
      {/* Render video player with the fetched video data */}
      <div className="video-container">
        {/* Display video tutorials */}

        {videoData.map((tutorial, index) => {
  // Only render if the tutorial is not marked as deleted
  if (!tutorial.is_deleted) {
    return (
      <div key={tutorial.videoId} className="video-item">
        <h3>{tutorial.title}</h3>
        <p>{tutorial.description}</p>
        {/* Pass video content to VideoPlayer component */}
        <VideoPlayer videoContent={tutorial.content} />
      </div>
    );
  }
  return null; // If the tutorial is marked as deleted, return null to avoid rendering
})}

      </div>
    </div>
  );
};

export default EmergencyTutorialss;