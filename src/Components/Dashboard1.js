import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Dashboard.css'; // Import your CSS file
import circle from './Images/Dashboard1/circle.png';
import line1 from './Images/Dashboard1/line1.png';
import logo1 from './Images/Dashboard1/logo1.png';
import picture1 from './Images/Dashboard1/picture1.png';
import picture2 from './Images/Dashboard1/picture2.png';
import picture3 from './Images/Dashboard1/picture3.png';
import zart from './Images/Dashboard1/zart.png';


export const Dashboard1 = ({ onLogout }) => {
    const navigate = useNavigate();
    const userRole = localStorage.getItem('userRole'); // Fetch user role from local storage

    const handleLogout = () => {
        onLogout();
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    const isAdmin = userRole === 'admin';
    console.log("User Role:", userRole);

    return (
        <div className="home">
            <div className="div">
                <div className="overlap">
                    <p className="text-wrapper">Scroll down to see more.</p>
                    <div className="text-wrapper-2">Welcome!</div>
                    <p className="all-you-need-in">
                        <span className="span">
                        All you need <br />
                        in{" "}
                        </span>
                        <span className="text-wrapper-3">RESPO</span>
                    </p>
                    <p className="in-we-aim-to">
                        <span className="span">In 2026, we aim to become </span>
                        <span className="text-wrapper-3">Cebu&#39;s top service provider</span>
                        <span className="span"> with our </span>
                        <span className="text-wrapper-3">cutting-edge emergency response app</span>
                        <span className="span">. Our goal is to help ensure the </span>
                        <span className="text-wrapper-3">safety and well-being</span>
                        <span className="span">
                            {" "}
                            of every resident and visitor in Cebu by providing a reliable and efficient platform that connects people
                            in need with the assistance they require in times of crisis.
                        </span>
                    </p>
                    <div className="overlap-group">
                        <img className="zart" alt="Zart" src={zart} />
                        <img className="line" alt="Line" src={line1} />
                    </div>
                </div>
                <p className="your-lifeline-during">
                    Your lifeline during critical moments. Our mission is simple yet essential: to streamline communication to
                    emergency services authorities, ensuring that help is just a call away when you need it most. We understand
                    that in emergencies, every second counts. With our service, you can connect with the right assistance swiftly
                    and efficiently, putting your safety and peace of mind as our top priority. Join us in making your community
                    safer and more responsive in times of need. When you&#39;re facing a crisis, &#34;Call for Help&#34; is your
                    trusted partner for immediate support.
                </p>
                <p className="p">
                    Your go-to source for all things weather-related! We are here to keep you informed, prepared, and in the know
                    about the latest weather conditions, forecasts, and meteorological insights. With our real-time updates and
                    expert analysis, you can stay ahead of the weather and make informed decisions for your daily activities.
                </p>
                <p className="our-step-by-step">
                    Our step-by-step guides and expert insights will walk you through the procedures, providing you with the
                    confidence and know-how to handle emergencies with a level head. We believe that knowledge is the key to
                    resilience, and our tutorials are your key to being well-prepared. Join us on this journey to a safer, more
                    secure future, where you have the power to protect yourself and your community. Knowledge is empowerment, and
                    we&#39;re here to help you every step of the way.
                </p>
                <p className="CALL-FOR-HELP">
                    <span className="span">CALL FOR </span>
                    <span className="text-wrapper-3">HELP</span>
                </p>
                <p className="weather-update">
    <span style={{ color: 'black' }} className="span">WEATHER&nbsp;</span>
    <span className="span"> update</span>
</p>

                <p className="emergency-tutorials">
                    <span className="span">emergency</span>
                    <span className="text-wrapper-3"> tutorials</span>
                </p>
                <img className="img" alt="Line" src={line1} />
                <img className="line-2" alt="Line" src={line1} />
                <img className="line-3" alt="Line" src={line1} />
                <img className="head-support-and" alt="Head support and" src={picture3} />
                <img className="aspot-weather" alt="Aspot weather" src={picture2}/>
                <div className="group">
                    <Link to="/call-for-help">
                    <button className="overlap-group-2">
                        <div className="rectangle" />
                        <p className="text-wrapper-4">Get started on Call for Help</p>
                        <img className="ellipse" alt="Ellipse" src={circle} />
                        <div className="text-wrapper-5">+</div>
                    </button>
                    </Link>
                </div>
                <p className="text-wrapper-6">Copyright © 2023 RESPO Inc. All rights reserved</p>
                <div className="text-wrapper-7">Cebu City, Philippines</div>
                <div className="overlap-wrapper">
                    <Link to="/weather-update">
                    <button className="overlap-2">
                        <div className="rectangle-2" />
                        <p className="text-wrapper-8">Get started on Weather Update</p>
                        <img className="ellipse-2" alt="Ellipse" src={circle} />
                        <div className="text-wrapper-9">+</div>
                    </button>
                    </Link>
                </div>
                <div className="overlap-group-wrapper">
                    <Link to="/emergency-tutorials">
                    <button className="overlap-3">
                        <div className="rectangle-3" />
                        <div className="text-wrapper-10">Get started on Tutorials</div>
                        <img className="ellipse-3" alt="Ellipse" src={circle} />
                        <div className="text-wrapper-11">+</div>
                    </button>
                    </Link>
                </div>
                <img className="learning-lead-image" alt="Learning lead image" src={picture1} />
                <Link to="/dashboard">
                    <button className="inverted">
                        <img alt="Inverted" src={logo1} />
                    </button>
                </Link>
                <nav>
                    <Link to="/call-for-help">
                            <button className="text-wrapper-12">Call for Help</button>
                    </Link>
                    <Link to="/weather-update">
                        <button className="text-wrapper-13">Weather Update</button>
                    </Link>
                    <Link to="/emergency-tutorials">
                        <button className="text-wrapper-14">Emergency Tutorials</button>
                    </Link>

                    {isAdmin && (
                    <Link to="/adminpage">
                        <button className="text-wrapper-15">Admin Page</button>
                    </Link>
                    )}
                    </nav>
                <button className="text-wrapper-16" onClick={handleLogout}>Log-out</button>
            </div>
        </div>
    );
};

export default Dashboard1;