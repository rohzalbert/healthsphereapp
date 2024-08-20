// // client/src/api/auth.js
// // import axios from 'axios';

// // // Base URL for the API
// // const API_URL = '/api/auth';

// // // Login function
// // export const login = async (email, password) => {
// //   try {
// //     const response = await axios.post(`${API_URL}/login`, { email, password });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Logout function
// // export const logout = async () => {
// //   try {
// //     await axios.post(`${API_URL}/logout`);
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Check authentication status
// // export const checkAuth = async () => {
// //   try {
// //     const response = await axios.get(`${API_URL}/check`);
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };




// // import axios from 'axios';

// // // Base URL for the API
// // const API_URL = '/api/auth';

// // // Login function
// // export const login = async (email, password) => {
// //   try {
// //     const response = await axios.post(`${API_URL}/login`, { email, password });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Function to make authenticated requests
// // export const makeAuthenticatedRequest = async (url, token, data = {}) => {
// //   try {
// //     const response = await axios.post(url, { ...data, token });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Check authentication status
// // export const checkAuth = async (token) => {
// //   try {
// //     const response = await makeAuthenticatedRequest(`${API_URL}/user`, token);
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };




// // //client/api/auth.js 
// // import axios from 'axios';

// // // Base URL for the API
// // const API_URL = '/api/auth';

// // // Login function
// // export const login = async (email, password) => {
// //   try {
// //     const response = await axios.post(`${API_URL}/login`, { email, password });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };

// // // Function to make authenticated requests
// // export const makeAuthenticatedRequest = async (url, token, method = 'POST', data = {}) => {
// //   try {
// //     const response = await axios({
// //       method,
// //       url,
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //       data: method === 'POST' ? data : undefined,
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };


// // // Check authentication status
// // export const checkAuth = async (token) => {
// //   try {
// //     const response = await makeAuthenticatedRequest(`${API_URL}/user`, token, 'GET');
// //     return response.data;
// //   } catch (error) {
// //     throw error.response.data;
// //   }
// // };


// import axios from 'axios';

// // Base URL for the API
// const API_URL = '/api/auth';

// // Login function
// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Function to make authenticated requests
// export const makeAuthenticatedRequest = async (url, token, method = 'POST', data = {}) => {
//   try {
//     const response = await axios({
//       method,
//       url,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: method === 'POST' ? data : undefined,
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Check authentication status
// export const checkAuth = async (token) => {
//   try {
//     const response = await makeAuthenticatedRequest(`${API_URL}/user`, token, 'GET');
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };




// client/src/api/auth.js
import axios from 'axios';

// Base URL for the API
const API_URL = '/api/auth';

// Login function
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Logout function
export const logout = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
  } catch (error) {
    throw error.response.data;
  }
};

// Check authentication status
export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/check`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
