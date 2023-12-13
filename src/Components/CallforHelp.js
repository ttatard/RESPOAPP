import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './CSS/CallforHelp.css'; // Import your CSS file
import logo1 from './Images/Dashboard1/logo1.png';

export const CallForHelp1 = ({ onLogout }) => {
    const userRole = localStorage.getItem('userRole'); // Fetch user role from local storage
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    const isAdmin = userRole === 'admin';
    console.log("User Role:", userRole);
    return (
        <div className="call-for-help">
            <div className="div">
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="group">
                        <Link to="/directory">
                            <button className="overlap-group">
                                <div className="text-wrapper">See Directory</div>
                            </button>
                        </Link>
                    </div>
                    <p className="p">
                        The RESPO Directory provides you with an extensive directory of emergency services, including hospitals,
                        police stations, fire departments, and more. Access crucial contact details at your fingertips when you need
                        them the most.
                    </p>
                </div>
                <div className="overlap-2">
                    <div className="rectangle" />
                    <div className="group">
                        <Link to="/emergency">
                            <button className="div-wrapper">
                                <div className="text-wrapper-2">Emergency</div>
                            </button>
                        </Link>
                    </div>
                    <p className="when-seconds-matter">
                        When seconds matter the most, &#34;Emergency&#34; provides a one-tap solution to alert authorities,
                        emergency services, and your selected contacts. Instantly send out distress signals, ensuring help is on its
                        way.
                    </p>
                </div>
                <p className="CALL-FOR-HELP">
                    <span className="span">CALL FOR </span>
                    <span className="text-wrapper-3">HELP</span>
                </p>
                <p className="text-wrapper-4">
                    We want to bring an important matter to your attention. While RESPO is a platform designed to connect people
                    in need with real and immediate assistance, it has come to our notice that there have been instances of fake
                    or fraudulent requests circulating within our community. We want to emphasize the importance of staying
                    vigilant and cautious while using our platform.
                </p>
                <nav>
                <Link to="/dashboard">
                    <button className="inverted">
                        <img alt="Inverted" src={logo1} />
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
                <button className="text-wrapper-8" onClick={handleLogout}>Log-out</button>
                </nav>
                <footer>
                    <p className="text-wrapper-9">Copyright © 2023 RESPO Inc. All rights reserved</p>
                    <img className="line" alt="Line" src="line-7.svg" />
                    <div className="text-wrapper-10">Cebu City, Philippines</div>
                </footer>
            </div>
        </div>
    );
};

export default CallForHelp1;