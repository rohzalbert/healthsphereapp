
//client/src/index 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { HealthDataProvider } from './context/HealthDataContext';
import './App.css'; 
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HealthDataProvider>
      <AuthProvider>
          <App />
      </AuthProvider>
    </HealthDataProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// client/src/index.js
// client/src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { AuthProvider } from './context/AuthContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//       <AuthProvider>
//         <App />
//     </AuthProvider>
//   </BrowserRouter>


// );

