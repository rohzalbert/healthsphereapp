// // // components/BloodSugarLog.jsx

// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import axios from 'axios';
// import './BloodSugarLog.css';

// const BloodSugarLog = () => {
//   const [logs, setLogs] = useState([]);
//   const [form, setForm] = useState({
//     date: '',
//     time: '',
//     level: '',
//     notes: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [visibleLogs, setVisibleLogs] = useState(4);

//   useEffect(() => {
//     const fetchLogs = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/health-data/blood-sugar', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setLogs(response.data.reverse()); // Show recent logs at the top
//       } catch (error) {
//         console.error('Failed to fetch blood sugar logs:', error);
//       }
//     };
//     fetchLogs();
//   }, []);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     try {
//       if (isEditing) {
//         const updatedLog = { ...logs[editingIndex], ...form };
//         const response = await axios.put(
//           `http://localhost:5000/api/health-data/blood-sugar/${updatedLog._id}`,
//           updatedLog,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         const updatedLogs = [...logs];
//         updatedLogs[editingIndex] = response.data;
//         setLogs(updatedLogs.reverse()); // Keep the most recent logs at the top
//         setIsEditing(false);
//         setEditingIndex(null);
//       } else {
//         const response = await axios.post(
//           'http://localhost:5000/api/health-data/blood-sugar',
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setLogs([response.data, ...logs]); // Add the new log at the top
//       }
//       setForm({
//         date: '',
//         time: '',
//         level: '',
//         notes: '',
//       });
//     } catch (error) {
//       console.error('Failed to log blood sugar:', error);
//     }
//   };

//   const handleEdit = (index) => {
//     setForm(logs[index]);
//     setIsEditing(true);
//     setEditingIndex(index);
//   };

//   const handleDelete = async (index) => {
//     const token = localStorage.getItem('token');
//     const logToDelete = logs[index];

//     try {
//       await axios.delete(
//         `http://localhost:5000/api/health-data/blood-sugar/${logToDelete._id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       const updatedLogs = logs.filter((_, i) => i !== index);
//       setLogs(updatedLogs.reverse()); // Keep the most recent logs at the top
//     } catch (error) {
//       console.error('Failed to delete blood sugar log:', error);
//     }
//   };

//   const handleSeeMore = () => {
//     setVisibleLogs(logs.length); // Show all logs
//   };

//   const handleSeeLess = () => {
//     setVisibleLogs(4); // Show only the initial number of logs
//   };

//   return (
//     <div className="blood-sugar-log">
//       <form className="log-form" onSubmit={handleSubmit}>
//         <input type="date" name="date" value={form.date} onChange={handleChange} required />
//         <input type="time" name="time" value={form.time} onChange={handleChange} required />
//         <input type="number" name="level" value={form.level} onChange={handleChange} placeholder="Blood Sugar Level" required />
//         <input type="text" name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" />
//         <button type="submit">{isEditing ? 'Update' : 'Log'}</button>
//       </form>
//       <table className="log-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Level</th>
//             <th>Notes</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logs.slice(0, visibleLogs).map((log, index) => (
//             <tr key={index}>
//               <td>{new Date(log.date).toLocaleDateString()}</td>
//               <td>{log.time}</td>
//               <td>{log.level}</td>
//               <td>{log.notes}</td>
//               <td>
//                 <FaEdit onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//                 <FaTrash onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {logs.length > visibleLogs ? (
//         <button className="see-more-button" onClick={handleSeeMore}>See More</button>
//       ) : logs.length > 4 && (
//         <button className="see-more-button" onClick={handleSeeLess}>See Less</button>
//       )}
//     </div>
//   );
// };

// export default BloodSugarLog;






import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import './BloodSugarLog.css';

const BloodSugarLog = () => {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({
    date: '',
    time: '',
    level: '',
    notes: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [visibleLogs, setVisibleLogs] = useState(4);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/health-data/blood-sugar', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLogs(response.data.reverse()); // Show recent logs at the top
      } catch (error) {
        console.error('Failed to fetch blood sugar logs:', error);
      }
    };
    fetchLogs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure that negative numbers are not allowed for level input
    if (name === 'level' && value < 0) {
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      if (isEditing) {
        const updatedLog = { ...logs[editingIndex], ...form };
        const response = await axios.put(
          `http://localhost:5000/api/health-data/blood-sugar/${updatedLog._id}`,
          updatedLog,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const updatedLogs = [...logs];
        updatedLogs[editingIndex] = response.data;
        setLogs(updatedLogs); // Maintain the current order of logs
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        const response = await axios.post(
          'http://localhost:5000/api/health-data/blood-sugar',
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLogs([response.data, ...logs.reverse()]); // Add the new log at the top and reverse the order
      }
      setForm({
        date: '',
        time: '',
        level: '',
        notes: '',
      });
    } catch (error) {
      console.error('Failed to log blood sugar:', error);
    }
  };

  const handleEdit = (index) => {
    setForm(logs[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const token = localStorage.getItem('token');
    const logToDelete = logs[index];

    try {
      await axios.delete(
        `http://localhost:5000/api/health-data/blood-sugar/${logToDelete._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedLogs = logs.filter((_, i) => i !== index);
      setLogs(updatedLogs.reverse()); // Keep the most recent logs at the top
    } catch (error) {
      console.error('Failed to delete blood sugar log:', error);
    }
  };

  const handleSeeMore = () => {
    setVisibleLogs(logs.length); // Show all logs
  };

  const handleSeeLess = () => {
    setVisibleLogs(4); // Show only the initial number of logs
  };

  return (
    <div className="blood-sugar-log">
      <form className="log-form" onSubmit={handleSubmit}>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="time" name="time" value={form.time} onChange={handleChange} required />
        <input type="number" name="level" value={form.level} onChange={handleChange} placeholder="Blood Sugar Level" required />
        <input type="text" name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" />
        <button type="submit">{isEditing ? 'Update' : 'Log'}</button>
      </form>
      <table className="log-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Level</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {logs.slice(0, visibleLogs).map((log, index) => (
            <tr key={index}>
              <td>{new Date(log.date).toLocaleDateString()}</td>
              <td>{log.time}</td>
              <td>{log.level}</td>
              <td>{log.notes}</td>
              <td>
                <FaEdit onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                <FaTrash onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {logs.length > visibleLogs ? (
        <button className="see-more-button" onClick={handleSeeMore}>See More</button>
      ) : logs.length > 4 && (
        <button className="see-more-button" onClick={handleSeeLess}>See Less</button>
      )}
    </div>
  );
};

export default BloodSugarLog;
