// //client/components/sidebar 



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (err) {
        console.error('Failed to fetch user data', err);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // Remove token or any other authentication data
    localStorage.removeItem('token');
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
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
          {user && user.role === 'admin' && <li><a href="/admin">Admin Dashboard</a></li>}
        </ul>
      </nav>
      <button onClick={handleLogout} className="logout-button" style={{ display: 'block', backgroundColor: 'red', color: 'white', marginTop: '20px' }}>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
