import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
  const [selectedOption, setSelectedOption] = useState('Directory');
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    deptName: '',
    loc: '',
    pNum: ''
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/department/getAllDepartments`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/department/insertDepartment`, formData);
      console.log(response.data);
      fetchData();
      setFormData({
        deptName: '',
        loc: '',
        pNum: ''
      });
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/department/deleteDepartment/${id}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:8080/department/updateDepartment?DeptId=${id}`, updatedData);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div>
        <label>Select an option:</label>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="Directory">Directory</option>
          {/* Add other options here */}
        </select>
      </div>

      {selectedOption === 'Directory' && (
        <>
          <h2>Directory</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="deptName"
              placeholder="Enter Department Name"
              value={formData.deptName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="loc"
              placeholder="Enter Location"
              value={formData.loc}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="pNum"
              placeholder="Enter Contact Information"
              value={formData.pNum}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>

          <table>
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Location</th>
                <th>Contact Information</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.DeptId}>
                  <td>
                    <input
                      type="text"
                      value={item.deptName}
                      onChange={(e) => handleUpdate(item.DeptId, { ...item, deptName: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.loc}
                      onChange={(e) => handleUpdate(item.DeptId, { ...item, loc: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.pNum}
                      onChange={(e) => handleUpdate(item.DeptId, { ...item, pNum: e.target.value })}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.DeptId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Add other sections for different options */}
    </div>
  );
}

export default AdminPage;
