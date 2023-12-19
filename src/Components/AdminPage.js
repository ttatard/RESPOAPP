import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminPage() {
  const [selectedOption, setSelectedOption] = useState('Directory');
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    deptName: '',
    loc: '',
    pNum: ''
  });

  const [userData, setUserData] = useState([]);

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

  const EmergencyTutorials = () => {
    const [emergencyData, setEmergencyData] = useState([]);
    const [emergencyFormData, setEmergencyFormData] = useState({
      title: '',
      desc: '',
      file: null,
      videoUrl: '', // New property for video URL
    });

    const fetchEmergencyData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/tutorial/getAllTutorials');
        setEmergencyData(response.data);
      } catch (error) {
        console.error('Error fetching emergency tutorials:', error);
      }
    };

    const handleEmergencySubmit = async (e) => {
      e.preventDefault();
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('file', emergencyFormData.file);
        formDataToSend.append('title', emergencyFormData.title);
        formDataToSend.append('desc', emergencyFormData.desc);
    
        await axios.post('http://localhost:8080/tutorial/insertTutorial', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        fetchEmergencyData();
        setEmergencyFormData({
          title: '',
          desc: '',
          file: null,
        });
      } catch (error) {
        console.error('Error creating emergency tutorial:', error);
      }
    };
    
    const handleEmergencyInputChange = (e) => {
      const { name, value } = e.target;
      setEmergencyFormData({ ...emergencyFormData, [name]: value });
    };
    
    const handleEmergencyFileChange = (e) => {
      setEmergencyFormData({ ...emergencyFormData, file: e.target.files[0] });
    };
    

    // Similar functions for update and delete for emergency tutorials
    const handleEmergencyUpdate = async (videoId, updatedData) => {
      try {
      } catch (error) {
        console.error('Error updating emergency tutorial:', error);
      }
    };
  
    const handleEmergencyDelete = async (videoId) => {
      try {
      } catch (error) {
        console.error('Error deleting emergency tutorial:', error);
      }
    };

    useEffect(() => {
      if (selectedOption === 'Emergency Tutorials') {
        fetchEmergencyData();
      }
    }, [selectedOption]);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/getAllUsers');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const handleDeleteUser = async (userId) => {
      try {
        const response = await axios.delete(`http://localhost:8080/user/deleteUser/${userId}`);
        console.log(response.data);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
      fetchUsers(); // Fetch user data when the component mounts
    }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div>
        <label>Select an option:</label>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="Users">Users</option>
          <option value="Directory">Directory</option>
          <option value="Emergency Tutorials">Emergency Tutorials</option>
        </select>
      </div>
      
      {selectedOption === 'Users' && (
        <>
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                {/* Add other relevant columns */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.userId}>
                  {/* Display user information */}
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.eMail}</td>
                  {/* Add other relevant fields */}
                  <td>
                    {/* Buttons for updating and deleting users */}
                    <button onClick={() => handleDeleteUser(user.userId)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

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

    {selectedOption === 'Emergency Tutorials' && (
        <EmergencyTutorials />
      )}


</div>
  );
}
}
export default AdminPage;