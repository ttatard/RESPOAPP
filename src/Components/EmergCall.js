import React from "react";
import './CSS/EmergCall.css';
import map from './Images/Dashboard1/map.png';
import phone from './Images/Dashboard1/phone.png';
import person from './Images/Dashboard1/person.png';
import ambulance from './Images/Dashboard1/ambulance.gif';
import logo from './Images/Dashboard1/logo1.png';
import { Link, useNavigate } from "react-router-dom";


export const EmergCall = () => {
    return (
        <div className="emerg-call">
            <div className="div">
                <div className="overlap">
                    <p className="text-wrapper">RESPO is on the way!</p>
                    <img className="giphy" alt="Giphy" src={ambulance}/>
                </div>
                <div className="overlap-group">
                    <img className="icon-map-marker" alt="Icon map marker" src={map}/>
                    <div className="text-wrapper-2">Help is near</div>
                </div>
                <div className="overlap-2">
                    <img className="icon-phone" alt="Icon phone" src={phone} />
                    <div className="text-wrapper-3">Call incoming</div>
                </div>
                <div className="overlap-group-2">
                    <div className="rectangle" />
                    <img className="icon-person" alt="Icon person" src={person} />
                    <div className="text-wrapper-4">Help ongoing</div>
                </div>

                <Link to="/dashboard">
                    <button className="inverted">
                        <img alt="Inverted" src={logo} />
                    </button>
                </Link>
                <Link to="/call-for-help">
                    <button className="text-wrapper-5">Call for Help</button>
                </Link>
                <Link to="/weather-update">
                    <button className="text-wrapper-6">Weather Update</button>
                </Link>
                <Link to="/emergency-tutorials">
                    <button className="text-wrapper-7">Emergency Tutorials</button>
                </Link>
                <button className="text-wrapper-8">Log-out</button>
                <div className="overlap-3">
                    <img className="line" alt="Line" src="line-7.svg" />
                    <p className="p">Copyright © 2023 RESPO Inc. All rights reserved</p>
                    <div className="text-wrapper-9">Cebu City, Philippines</div>
                </div>
                <p className="EMERGENCY-CALL">
                    <span className="span">EMERGENCY </span>
                    <span className="text-wrapper-10">CALL</span>
                </p>
            </div>
        </div>
    );
};
export default EmergCall;