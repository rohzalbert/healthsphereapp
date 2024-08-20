// // // client/src/api/consultations.js
// // import axios from 'axios';

// // // Base URL for the API
// // const API_URL = '/api/consultations';

// // // Start a consultation
// // export const startConsultation = async (details) => {
// //   try {
// //     const response = await axios.post(`${API_URL}/start`, details);
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Get consultation history
// // export const getConsultations = async () => {
// //   try {
// //     const response = await axios.get(`${API_URL}/history`);
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Send message in consultation
// // export const sendMessage = async (consultationId, message) => {
// //   try {
// //     const response = await axios.post(`${API_URL}/send-message`, { consultationId, message });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };



// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || '/api/consultations';

// // Start a consultation
// export const startConsultation = async (details) => {
//   try {
//     const response = await axios.post(`${API_URL}/start`, details);
//     return response.data;
//   } catch (error) {
//     console.error('Start consultation error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };

// // Get consultation history
// export const getConsultations = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/history`);
//     return response.data;
//   } catch (error) {
//     console.error('Get consultations error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };

// // Send message in consultation
// export const sendMessage = async (consultationId, message) => {
//   try {
//     const response = await axios.post(`${API_URL}/send-message`, { consultationId, message });
//     return response.data;
//   } catch (error) {
//     console.error('Send message error:', error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };




// client/src/api/consultations.js
import axios from 'axios';

// Base URL for the API
const API_URL = '/api/consultations';

// Start a consultation
export const startConsultation = async (details) => {
  try {
    const response = await axios.post(`${API_URL}/start`, details);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get consultation history
export const getConsultations = async () => {
  try {
    const response = await axios.get(`${API_URL}/history`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Send message in consultation
export const sendMessage = async (consultationId, message) => {
  try {
    const response = await axios.post(`${API_URL}/send-message`, { consultationId, message });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
