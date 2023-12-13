import React from "react";
import { Link } from "react-router-dom";
import './CSS/EmergencyTutorial1.css'; // Import your CSS file
import logo1 from './Images/Dashboard1/logo1.png';

export const EmergencyTutorialss = () => {
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
        </div>
    );
};

export default EmergencyTutorialss;