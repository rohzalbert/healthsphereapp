
// client/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import './Dashboard.css';
import BloodSugarLog from './BloodSugarLog';
import BloodPressureLog from './BloodPressureLog';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const getGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if no token is found
          return;
        }
        console.log('Token found:', token);
        const response = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('User data fetched successfully:', response.data);
        setUser(response.data.user);
        // Fetch medical records
        const recordsResponse = await axios.get('http://localhost:5000/api/medical-records', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMedicalRecords(recordsResponse.data.records);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
        setError('Failed to fetch user data');
        navigate('/login'); 
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>No user data available</p>;
  }

  const handleAddRecord = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFileUpload = async (formData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/medical-records', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      setMedicalRecords((prevRecords) => [...prevRecords, response.data.record]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear the token
    navigate('/login');  // Redirect to the login page
  };

  const filteredRecords = medicalRecords.filter((record) =>
    record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.hospitalLabName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      {showModal && <Modal handleClose={handleCloseModal} onFileUpload={handleFileUpload} />}
      <aside className="sidebar">
        <h3 className="logo">HealthSphere</h3>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/medical-record">Medical Record</a></li>
            <li><a href="/health-issues">Health Issues</a></li>
            <li><a href="/medications">Medications</a></li>
            <li><a href="/clinicians">Clinicians</a></li>
            <li><a href="/chat">Chat</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>{getGreeting()}, {user.name}!</h1>
          <button className="add-record-button" onClick={handleAddRecord}>Add New Record</button>
        </header>
        <section className="info-section">
          <div className="card">
            <h2>Ongoing Medication</h2>
            <div className="card-content">
              <img src="no-data.png" alt="Medications" />
              <p>No Medications Have Been Added</p>
            </div>
          </div>
          <div className="card">
            <h2>Latest Vitals</h2>
            <div className="card-content">
              <img src="no-data.png" alt="Vitals" />
              <p>This user has not logged any entries yet.</p>
            </div>
          </div>
          <div className="card">
            <h2>Upcoming Appointments</h2>
            <div className="card-content">
              <img src="no-data.png" alt="Appointments" />
              <p>No Appointments Found</p>
            </div>
          </div>
        </section>
        <section className="charts-section">
          <h2>Charts</h2>
          <div className="charts">
            <div className="chart">
              <h3>Blood Pressure</h3>
              <BloodPressureLog />
            </div>
          </div>
          <div className="charts">
            <div className="chart">
              <h3>Blood Sugar</h3>
              <BloodSugarLog />
            </div>
          </div>
        </section>
        <section className="additional-info">
          <h3>Plans</h3>
          <div className="medical-entries">
            <div className="entry-section">
              <h4>Daily Workout plan</h4>
              <p>No Workout Plan Saved</p>
            </div>
            <div className="entry-section">
              <h4>Daily Meal Plan</h4>
              <p>No Meal Plan Saved</p>
            </div>
          </div>
        </section>
        <section className="medical-records">
          <h3>Medical Records</h3>
          <div className="search-filter-container">
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="records-table">
            <thead>
              <tr>
                <th>Record Type</th>
                <th>Date of Record</th>
                <th>Hospital/Lab Name</th>
                <th>Description</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => (
                  <tr key={index}>
                    <td>{record.type}</td>
                    <td>{new Date(record.date).toLocaleDateString()}</td>
                    <td>{record.hospitalLabName}</td>
                    <td>{record.description}</td>
                    <td><a href={`http://localhost:5000${record.fileUrl}`} target="_blank" rel="noopener noreferrer">View File</a></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No medical records available</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
