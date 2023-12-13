import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDownloadLink, PDFViewer, Document, Page, Text } from '@react-pdf/renderer';


const VideoPlayer = ({ videoId }) => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/tutorial/getTutorial/${videoId}`, {
          responseType: 'blob', // Set response type to blob
        });

        const blob = new Blob([response.data], { type: 'video/mp4' });
        const videoURL = URL.createObjectURL(blob);
        setVideoUrl(videoURL);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [videoId]);

  

  return (
    <div>
      {videoUrl && (
        <video controls width="320" height="240">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]);
  const [newDirectory, setNewDirectory] = useState({
    DeptName: '',
    Loc: '',
    pNum: '',
    isDeleted: false,
  });
  
  const [newTutorial, setNewTutorial] = useState({ // Define newTutorial state
    title: '',
    description: '',
    videoFile: null,
  });

  const [videoData, setVideoData] = useState([]); // Define videoData state

  // Define fetchTutorials function
  const fetchTutorials = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tutorial/getAllTutorials');
      setVideoData(response.data);
    } catch (error) {
      console.error('Error fetching tutorials: ', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user/getAllUsers');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  const fetchDirectory = async () => {
    try {
      const response = await axios.get('http://localhost:8080/department/getAllDepartments');
      console.log('Directory Data:', response.data); // Log the response to check its structure
      setData(response.data);
    } catch (error) {
      console.error('Error fetching directory: ', error);
    }
  };
  

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to make this account inactive?");
    if (confirmDelete) {
      try {
        // Perform the delete operation via API
        const response = await axios.delete(`http://localhost:8080/user/deleteUser/${userId}`);
        console.log('User deleted: ', response.data);
        fetchUsers(); // Refresh user data after deletion
      } catch (error) {
        console.error('Error deleting user: ', error);
      }
    }
  };

  const handleSubmitDirectory = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/department/insertDepartment', newDirectory);
      console.log('New directory added: ', response.data);
      setNewDirectory({
        DeptName: '',
        Loc: '',
        pNum: '',
        isDeleted: false,
      });
      fetchDirectory(); // Refresh directory data after adding
    } catch (error) {
      console.error('Error adding directory: ', error);
    }
  };

  useEffect(() => {
    if (selectedOption === 'Users') {
      fetchUsers();
    } else if (selectedOption === 'Directory') {
      fetchDirectory();
    }
  }, [selectedOption]);

  const handleDeleteDirectory = async (DeptId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this directory?");
    if (confirmDelete) {
      try {
        // Perform the delete operation via API
        const response = await axios.delete(`http://localhost:8080/department/deleteDepartment/${DeptId}`);
        console.log('Directory deleted: ', response.data);
        fetchDirectory(); // Refresh directory data after deletion
      } catch (error) {
        console.error('Error deleting directory: ', error);
      }
    }
  };

  const handleSubmitTutorial = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', newTutorial.videoFile);
    formData.append('title', newTutorial.title);
    formData.append('description', newTutorial.description);

    try {
      await axios.post('http://localhost:8080/tutorial/insertTutorial', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setNewTutorial({
        title: '',
        description: '',
        videoFile: null,
      });
      fetchTutorials(); // Refresh tutorial data after adding
    } catch (error) {
      console.error('Error adding tutorial: ', error);
    }
  };

  useEffect(() => {
    if (selectedOption === 'Tutorials') {
      fetchTutorials();
    }
  }, [selectedOption]);


  const ExportPDF = ({ data }) => {
    const [pdfContent, setPdfContent] = useState([]);
  
    useEffect(() => {
      const content = data.map((item, index) => (
        <Text key={index}>
          {Object.values(item).join(' | ')}
        </Text>
      ));
      setPdfContent(content);
    }, [data]);
    return (
      <div>
        <PDFDownloadLink document={
          <Document>
            <Page>
              {pdfContent}
            </Page>
          </Document>
        } fileName="exported_data.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Export to PDF')}
        </PDFDownloadLink>
      </div>
    );
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Select an option</option>
        <option value="Users">Users</option>
        <option value="Directory">Directory</option>
        <option value="Tutorials">Tutorials</option>
      </select>
      <button onClick={selectedOption === 'Users' ? fetchUsers : fetchDirectory}>Show Data</button>

      {selectedOption === 'Users' && (
        <div>
          <h2>User Management</h2>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Is Deleted</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.eMail}</td>
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.gender}</td>
                  <td>{user.pNum}</td>
                  <td>{user.isDeleted ? 'Deleted' : 'Active'}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.userId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.length > 0 && <ExportPDF data={data} />}
        </div>

        
      )}

    {selectedOption === 'Directory' && (
        <div>
          <h2>Directory Management</h2>
          <table>
            <thead>
              <tr>
                <th>Department ID</th>
                <th>Department Name</th>
                <th>Location</th>
                <th>Contact Information</th>
                <th>Is Deleted</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map((directory) => (
                <tr key={directory.deptId}>
                  <td>{directory.deptId}</td> 
                  <td>{directory.deptName}</td>
                  <td>{directory.loc}</td>
                  <td>{directory.pNum}</td>
                  <td>{directory.isDeleted ? 'Deleted' : 'Active'}</td>
                  <td>
                  <button onClick={() => handleDeleteDirectory(directory.deptId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <form onSubmit={handleSubmitDirectory}>
            {/* Form to add new directory */}
            <input
              type="text"
              placeholder="Department Name"
              value={newDirectory.deptName}
              onChange={(e) => setNewDirectory({ ...newDirectory, deptName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              value={newDirectory.loc}
              onChange={(e) => setNewDirectory({ ...newDirectory, loc: e.target.value })}
            />
            <input
              type="text"
              placeholder="Contact Information"
              value={newDirectory.pNum}
              onChange={(e) => setNewDirectory({ ...newDirectory, pNum: e.target.value })}
            />
            <button type="submit">Add Directory</button>
          </form>
          {data.length > 0 && <ExportPDF data={data} />}
        </div>
      )}

{selectedOption === 'Tutorials' && (
        <div>
          <h2>Video Tutorials</h2>
          <form onSubmit={handleSubmitTutorial}>
            {/* Form to add new tutorial */}
            <input
              type="text"
              placeholder="Title"
              value={newTutorial.title}
              onChange={(e) => setNewTutorial({ ...newTutorial, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newTutorial.description}
              onChange={(e) => setNewTutorial({ ...newTutorial, description: e.target.value })}
            />
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setNewTutorial({ ...newTutorial, videoFile: e.target.files[0] })}
            />
            <button type="submit">Add Tutorial</button>
          </form>

          {/* Display video tutorials */}
          {videoData.map((tutorial) => (
            <div key={tutorial.videoId}>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              {/* Render VideoPlayer component for each tutorial */}
              <VideoPlayer videoId={tutorial.videoId} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
