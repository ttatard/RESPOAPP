import React, { useState, useEffect } from 'react';
import './CSS/SeeDirectory.css'; // Import your CSS file
import './CSS/EmergencyTutorial1.css'; // Import your CSS file
import logo1 from './Images/Dashboard1/logo1.png';
import { Link } from "react-router-dom";

const SeeDirectory = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/department/getAllDepartments')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setDepartments(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    
    <div className="directory-container">
      <div className="emergency">
            <div className="div">
                <p className="emergency-tutorials">
                    <span className="text-wrapper">Contact </span>
                    <span className="span">Directory</span>
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

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Location</th>
              <th>Contact Information</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.DeptId}>
                <td>{department.deptName}</td>
                <td>{department.loc}</td>
                <td>{department.pNum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
                <img className="line" alt="Line" src="line-7.svg" />
                <p className="p">Copyright © 2023 RESPO Inc. All rights reserved</p>
                <div className="text-wrapper-6">Cebu City, Philippines</div>
            </div>
        </div>
    </div>
  );
};

export default SeeDirectory;