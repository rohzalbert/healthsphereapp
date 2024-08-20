



// // // client/src/components/HealthData/MedicationTracker.js
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../../context/AuthContext';

// // const MedicationTracker = () => {
// //   const { token } = useAuth(); // Get token from AuthContext
// //   const [medication, setMedication] = useState('');
// //   const [dose, setDose] = useState('');
// //   const [reminders, setReminders] = useState([{ time: '', note: '' }]);

// //   const handleReminderChange = (index, field, value) => {
// //     const newReminders = [...reminders];
// //     newReminders[index][field] = value;
// //     setReminders(newReminders);
// //   };

// //   const addReminder = () => {
// //     setReminders([...reminders, { time: '', note: '' }]);
// //   };

// //   const removeReminder = (index) => {
// //     setReminders(reminders.filter((_, i) => i !== index));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('/api/health-data/medications', {
// //         medication,
// //         dosage: dose,
// //         reminders,
// //       }, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setMedication('');
// //       setDose('');
// //       setReminders([{ time: '', note: '' }]);
// //       alert('Medication tracked successfully!');
// //     } catch (error) {
// //       console.error('Error tracking medication:', error);
// //     }
// //   };

// //   return (
// //     <div className="medication-tracker">
// //       <h2>Track Medication</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>Medication:</label>
// //         <input
// //           type="text"
// //           value={medication}
// //           onChange={(e) => setMedication(e.target.value)}
// //           required
// //         />
// //         <label>Dose:</label>
// //         <input
// //           type="text"
// //           value={dose}
// //           onChange={(e) => setDose(e.target.value)}
// //           required
// //         />
// //         <h3>Reminders:</h3>
// //         {reminders.map((reminder, index) => (
// //           <div key={index} className="reminder">
// //             <label>Time:</label>
// //             <input
// //               type="text"
// //               value={reminder.time}
// //               onChange={(e) => handleReminderChange(index, 'time', e.target.value)}
// //               required
// //             />
// //             <label>Note:</label>
// //             <input
// //               type="text"
// //               value={reminder.note}
// //               onChange={(e) => handleReminderChange(index, 'note', e.target.value)}
// //             />
// //             <button type="button" onClick={() => removeReminder(index)}>Remove</button>
// //           </div>
// //         ))}
// //         <button type="button" onClick={addReminder}>Add Reminder</button>
// //         <button type="submit">Track Medication</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default MedicationTracker;




// // client/src/components/HealthData/MedicationTracker.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const MedicationTracker = () => {
//   const [medication, setMedication] = useState('');
//   const [dose, setDose] = useState('');
//   const [schedule, setSchedule] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('/api/health-data/medications', { medication, dose, schedule }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMedication('');
//       setDose('');
//       setSchedule('');
//       alert('Medication tracked successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="medication-tracker">
//       <h2>Track Medication</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Medication:
//           <input
//             type="text"
//             value={medication}
//             onChange={(e) => setMedication(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Dose:
//           <input
//             type="text"
//             value={dose}
//             onChange={(e) => setDose(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Schedule:
//           <input
//             type="text"
//             value={schedule}
//             onChange={(e) => setSchedule(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Track Medication</button>
//       </form>
//     </div>
//   );
// };

// export default MedicationTracker;




// client/src/components/HealthData/MedicationTracker.js
import React, { useState } from 'react';
import axios from 'axios';

const MedicationTracker = () => {
  const [medication, setMedication] = useState('');
  const [dose, setDose] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/health-data/medications', { medication, dose, schedule }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMedication('');
      setDose('');
      setSchedule('');
      alert('Medication tracked successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="medication-tracker">
      <h2>Track Medication</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Medication:
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            required
          />
        </label>
        <label>
          Dose:
          <input
            type="text"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            required
          />
        </label>
        <label>
          Schedule:
          <input
            type="text"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            required
          />
        </label>
        <button type="submit">Track Medication</button>
      </form>
    </div>
  );
};

export default MedicationTracker;
