// // // client/src/api/healthData.js
// // import axios from 'axios';

// // // Base URL for the API
// // const API_URL = '/api/health-data';

// // // Log symptoms
// // export const logSymptom = async (symptom, severity) => {
// //   try {
// //     const response = await axios.post(`${API_URL}/symptoms`, { symptom, severity });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Track medication
// // export const trackMedication = async (medication, dose, schedule) => {
// //   try {
// //     const response = await axios.post(`${API_URL}/medications`, { medication, dose, schedule });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Upload document
// // export const uploadDocument = async (file) => {
// //   try {
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     const response = await axios.post(`${API_URL}/documents`, formData, {
// //       headers: { 'Content-Type': 'multipart/form-data' },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Get diet plan
// // export const getDietPlan = async () => {
// //   try {
// //     const response = await axios.get(`${API_URL}/diet-plan`);
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Get workout plan
// // export const getWorkoutPlan = async () => {
// //   try {
// //     const response = await axios.get(`${API_URL}/workout-plan`);
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };



// // // // client/src/api/healthData.js
// // // import axios from 'axios';

// // // const API_URL = 'http://localhost:5000/api/health-data';

// // // export const getHealthData = async () => {
// // //   const token = localStorage.getItem('token');
// // //   const response = await axios.get(API_URL, {
// // //     headers: { Authorization: `Bearer ${token}` },
// // //   });
// // //   return response.data;
// // // };





// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || '/api/health-data';

// // Log symptoms
// export const logSymptom = async (symptom, severity) => {
//   try {
//     const response = await axios.post(`${API_URL}/symptoms`, { symptom, severity });
//     return response.data;
//   } catch (error) {
//     console.error('Log symptom error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };

// // Track medication
// export const trackMedication = async (medication, dose, schedule) => {
//   try {
//     const response = await axios.post(`${API_URL}/medications`, { medication, dose, schedule });
//     return response.data;
//   } catch (error) {
//     console.error('Track medication error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };

// // Upload document
// export const uploadDocument = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append('file', file);
//     const response = await axios.post(`${API_URL}/documents`, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Upload document error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };

// // Get diet plan
// export const getDietPlan = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/diet-plan`);
//     return response.data;
//   } catch (error) {
//     console.error('Get diet plan error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };

// // Get workout plan
// export const getWorkoutPlan = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/workout-plan`);
//     return response.data;
//   } catch (error) {
//     console.error('Get workout plan error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };




// // client/src/api/healthData.js
// import axios from 'axios';

// // Base URL for the API
// const API_URL = '/api/health-data';

// // Log symptoms
// export const logSymptom = async (symptom, severity) => {
//   try {
//     const response = await axios.post(`${API_URL}/symptoms`, { symptom, severity });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Track medication
// export const trackMedication = async (medication, dose, schedule) => {
//   try {
//     const response = await axios.post(`${API_URL}/medications`, { medication, dose, schedule });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Upload document
// export const uploadDocument = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append('file', file);
//     const response = await axios.post(`${API_URL}/documents`, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Get diet plan
// export const getDietPlan = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/diet-plan`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Get workout plan
// export const getWorkoutPlan = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/workout-plan`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };



// client/src/api/healthData.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/health-data';

export const getHealthData = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

