import React, { useState, useEffect } from 'react';
import './CSS/SeeDirectory.css'; // Import your CSS file

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
      <h2>Directory</h2>
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
    </div>
  );
};

export default SeeDirectory;