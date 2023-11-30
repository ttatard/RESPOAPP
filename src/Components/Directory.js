import React, { useState, useEffect } from 'react';
import './CSS/SeeDirectory.css'; // Import your CSS file

const SeeDirectory = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/department/getAllUsers') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // Log fetched data
        setDepartments(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const uniqueLocations = Array.from(new Set(departments.map((dept) => dept.Loc))).filter(Boolean);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location === 'All' ? null : location);
  };

  const departmentsAtLocation = selectedLocation
    ? departments.filter((dept) => dept.Loc === selectedLocation)
    : departments;

  return (
    <div className="directory-container">
      <div className="locations-container">
        <h2>Locations</h2>
        <select onChange={handleLocationChange} value={selectedLocation || 'All'}>
          <option value="All">All Locations</option>
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="departments-at-location">
        <h2>
          Departments {selectedLocation ? `at ${selectedLocation}` : 'at All Locations'}
        </h2>
        <ul>
          {departmentsAtLocation.map((department) => (
            <li key={department.DeptID}>
              <strong>{department.DeptName}</strong>: {department.pNum}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeeDirectory;
