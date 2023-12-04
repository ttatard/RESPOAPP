import React from "react";
import './CSS/WeatherUpdate1.css'; // Import your CSS file
import line1 from './Images/Dashboard1/line1.png';
import logo1 from './Images/Dashboard1/logo1.png';

export const WeatherUpdate1 = () => {
    return (
        <div className="weather-update">
            <div className="div">
                <p className="WEATHER-UPDATE">
                    <span className="text-wrapper">WEATHER </span>
                    <span className="span">UPDATE</span>
                </p>
                <button className="inverted">
                        <img alt="Inverted" src={logo1} />
                    </button>
                <button className="text-wrapper-2">Call for Help</button>
                <button className="text-wrapper-3" to="/weather-update">
                    Weather Update
                </button>
                <button className="text-wrapper-4">Emergency Tutorials</button>
                <button className="text-wrapper-5">Log-out</button>
                <img className="line" alt="Line" src={line1} />
                <p className="p">Copyright © 2023 RESPO Inc. All rights reserved</p>
                <div className="text-wrapper-6">Cebu City, Philippines</div>
            </div>
        </div>
    );
};

export default WeatherUpdate1;