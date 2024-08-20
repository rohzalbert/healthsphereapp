
// // //client/src/app.js
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './components/Home';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import Dashboard from './components/Dashboard';
// // import Profile from './components/Profile';
// // import SymptomLog from './components/HealthData/SymptomLog';
// // import MedicationTracker from './components/HealthData/MedicationTracker';
// // import DocumentUploader from './components/HealthData/DocumentUploader';
// // import DietPlan from './components/HealthData/DietPlan';
// // import WorkoutPlan from './components/HealthData/WorkoutPlan';
// // import MedicalRecord from './components/MedicalRecord';
// // import PrivateRoute from './components/PrivateRoute';
// // import { AuthProvider } from './context/AuthContext';
// // import { HealthDataProvider } from './context/HealthDataContext'; // Import HealthDataProvider
// // import ErrorBoundary from './components/ErrorBoundary';


// // const App = () => {
// //   return (
// //     <ErrorBoundary>
// //       <AuthProvider>
// //         <HealthDataProvider> {/* Wrap with HealthDataProvider */}
// //             <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/register" element={<Register />} />
// //             <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
// //             <Route path="/profile" element={
// //               <PrivateRoute>
// //                 <Profile />
// //               </PrivateRoute>
// //             } />
// //             <Route path="/symptom-log" element={
// //               <PrivateRoute>
// //                 <SymptomLog />
// //               </PrivateRoute>
// //             } />
// //             <Route path="/medication-tracker" element={
// //               <PrivateRoute>
// //                 <MedicationTracker />
// //               </PrivateRoute>
// //             } />
// //             <Route path="/document-uploader" element={
// //               <PrivateRoute>
// //                 <DocumentUploader />
// //               </PrivateRoute>
// //             } />
// //             <Route path="/diet-plan" element={
// //               <PrivateRoute>
// //                 <DietPlan />
// //               </PrivateRoute>
// //             } />
// //             <Route path="/workout-plan" element={
// //               <PrivateRoute>
// //                 <WorkoutPlan />
// //               </PrivateRoute>
// //             } />
// //             <Route path="/medical-record" element={
// //               <PrivateRoute>
// //                 <MedicalRecord />
// //               </PrivateRoute>
// //             } />
// //             <Route path="*" element={<h2>404 Not Found</h2>} />
// //           </Routes>
// //        </HealthDataProvider>
// //       </AuthProvider>
// //     </ErrorBoundary>
// //   );
// // };

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import Profile from './components/Profile';
// import SymptomLog from './components/HealthData/SymptomLog';
// import MedicationTracker from './components/HealthData/MedicationTracker';
// import DocumentUploader from './components/HealthData/DocumentUploader';
// import DietPlan from './components/HealthData/DietPlan';
// import WorkoutPlan from './components/HealthData/WorkoutPlan';
// import MedicalRecord from './components/MedicalRecord';
// import PrivateRoute from './components/PrivateRoute';
// import { AuthProvider } from './context/AuthContext';
// import { HealthDataProvider } from './context/HealthDataContext';
// import ErrorBoundary from './components/ErrorBoundary';

// const App = () => {
//   return (
//     <ErrorBoundary>
//       <AuthProvider>
//         <HealthDataProvider>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//               <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
//               <Route path="/symptom-log" element={<PrivateRoute><SymptomLog /></PrivateRoute>} />
//               <Route path="/medication-tracker" element={<PrivateRoute><MedicationTracker /></PrivateRoute>} />
//               <Route path="/document-uploader" element={<PrivateRoute><DocumentUploader /></PrivateRoute>} />
//               <Route path="/diet-plan" element={<PrivateRoute><DietPlan /></PrivateRoute>} />
//               <Route path="/workout-plan" element={<PrivateRoute><WorkoutPlan /></PrivateRoute>} />
//               <Route path="/medical-record" element={<PrivateRoute><MedicalRecord /></PrivateRoute>} />
//               <Route path="*" element={<h2>404 Not Found</h2>} />
//             </Routes>
//         </HealthDataProvider>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// };

// export default App;



// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'; // Import Register component
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import SymptomLog from './components/HealthData/SymptomLog';
import MedicationTracker from './components/HealthData/MedicationTracker';
import DocumentUploader from './components/HealthData/DocumentUploader';
import DietPlan from './components/HealthData/DietPlan';
import WorkoutPlan from './components/HealthData/WorkoutPlan';
import MedicalRecord from './components/MedicalRecord'; // Import MedicalRecord component
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { HealthDataProvider } from './context/HealthDataContext'; // Import HealthDataProvider
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <HealthDataProvider>
      {/* <Router> */}
        {/* <div className="App"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            <Route path="/symptom-log" element={<PrivateRoute element={<SymptomLog />} />} />
            <Route path="/medication-tracker" element={<PrivateRoute element={<MedicationTracker />} />} />
            <Route path="/document-uploader" element={<PrivateRoute element={<DocumentUploader />} />} />
            <Route path="/diet-plan" element={<PrivateRoute element={<DietPlan />} />} />
            <Route path="/workout-plan" element={<PrivateRoute element={<WorkoutPlan />} />} />
            <Route path="/medical-record" element={<PrivateRoute element={<MedicalRecord />} />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </HealthDataProvider>
        {/* </div> */}
      {/* </Router> */}
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
