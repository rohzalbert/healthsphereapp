
// client/src/context/HealthDataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Import useAuth from AuthContext

const HealthDataContext = createContext();

const HealthDataProvider = ({ children }) => {
  const { token } = useAuth() || {}; // Get token from AuthContext with a fallback

  const [healthData, setHealthData] = useState({
    symptoms: [],
    medications: [],
    documents: [],
    dietPlan: '',
    workoutPlan: '',
  });

  useEffect(() => {
    const fetchHealthData = async () => {
      if (!token) {
        return; // If there's no token, don't attempt to fetch data
      }
  
      try {
        console.log('Fetching health data with token:', token);

        const [symptomsRes, medicationsRes, documentsRes, dietPlanRes, workoutPlanRes] = await Promise.all([
          axios.get('http://localhost:5000/api/health-data/symptoms', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('http://localhost:5000/api/health-data/medications', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('http://localhost:5000/api/health-data/documents', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('http://localhost:5000/api/health-data/diet-plan', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('http://localhost:5000/api/health-data/workout-plan', { headers: { Authorization: `Bearer ${token}` } }),
        ]);
  
        setHealthData({
          symptoms: symptomsRes.data,
          medications: medicationsRes.data,
          documents: documentsRes.data,
          dietPlan: dietPlanRes.data,
          workoutPlan: workoutPlanRes.data,
        });
      } catch (error) {
        console.error("Error fetching health data:", error);
      }
    };
  
    fetchHealthData();
  }, [token]);   

  const updateHealthData = async (newData) => {
    if (!token) return; // Do nothing if token is not available

    try {
      await axios.put('/api/health-data', newData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHealthData(prevData => ({ ...prevData, ...newData }));
    } catch (error) {
      console.error('Error updating health data:', error);
    }
  };

  return (
    <HealthDataContext.Provider value={{ healthData, updateHealthData }}>
      {children}
    </HealthDataContext.Provider>
  );
};

export { HealthDataProvider, HealthDataContext };




