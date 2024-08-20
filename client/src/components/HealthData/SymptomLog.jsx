

// // // client/src/components/HealthData/SymptomLog.js
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../../context/AuthContext';

// // const SymptomLog = () => {
// //   const { token } = useAuth(); // Get token from AuthContext
// //   const [symptom, setSymptom] = useState('');
// //   const [severity, setSeverity] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('/api/health-data/symptoms', {
// //         symptom,
// //         severity,
// //       }, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setSymptom('');
// //       setSeverity('');
// //       alert('Symptom logged successfully!');
// //     } catch (error) {
// //       console.error('Error logging symptom:', error);
// //     }
// //   };

// //   return (
// //     <div className="symptom-log">
// //       <h2>Log Symptom</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>Symptom:</label>
// //         <input
// //           type="text"
// //           value={symptom}
// //           onChange={(e) => setSymptom(e.target.value)}
// //           required
// //         />
// //         <label>Severity:</label>
// //         <input
// //           type="text"
// //           value={severity}
// //           onChange={(e) => setSeverity(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Log Symptom</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SymptomLog;



// // client/src/components/HealthData/SymptomLog.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const SymptomLog = () => {
//   const [symptom, setSymptom] = useState('');
//   const [severity, setSeverity] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('/api/health-data/symptoms', { symptom, severity }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setSymptom('');
//       setSeverity('');
//       alert('Symptom logged successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="symptom-log">
//       <h2>Log Symptom</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Symptom:
//           <input
//             type="text"
//             value={symptom}
//             onChange={(e) => setSymptom(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Severity:
//           <input
//             type="text"
//             value={severity}
//             onChange={(e) => setSeverity(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Log Symptom</button>
//       </form>
//     </div>
//   );
// };

// export default SymptomLog;






// client/src/components/HealthData/SymptomLog.js
import React, { useState } from 'react';
import axios from 'axios';

const SymptomLog = () => {
  const [symptom, setSymptom] = useState('');
  const [severity, setSeverity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/health-data/symptoms', { symptom, severity }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSymptom('');
      setSeverity('');
      alert('Symptom logged successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="symptom-log">
      <h2>Log Symptom</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Symptom:
          <input
            type="text"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            required
          />
        </label>
        <label>
          Severity:
          <input
            type="text"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log Symptom</button>
      </form>
    </div>
  );
};

export default SymptomLog;
