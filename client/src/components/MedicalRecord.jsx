// client/src/components/MedicalRecord.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './MedicalRecord.css';

// const MedicalRecord = () => {
//   const [editing, setEditing] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [chronicConditions, setChronicConditions] = useState([]);
//   const [allergies, setAllergies] = useState([]);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/auth/user', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const userData = response.data.user;
//         setName(userData.name);
//         setEmail(userData.email);
//         setBloodGroup(userData.bloodGroup || '');
//         setHeight(userData.height || '');
//         setWeight(userData.weight || '');
//         setChronicConditions(userData.chronicConditions || []);
//         setAllergies(userData.allergies || []);
//       } catch (err) {
//         console.error('Failed to fetch user data', err);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleEdit = () => {
//     setEditing(true);
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         'http://localhost:5000/api/auth/user',
//         { name, email, bloodGroup, height, weight, chronicConditions, allergies },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setEditing(false);
//     } catch (err) {
//       console.error('Failed to save user data', err);
//     }
//   };

//   const handleDownload = () => {
//     // Implement file download logic here
//     console.log('Download medical history');
//   };

//   const handleAddEntry = (type) => {
//     // Implement add entry logic here
//     console.log(`Add new ${type} entry`);
//   };

//   return (
//     <div className="medical-record-container">
//       <div className="profile-header">
//         <div className="profile-info">
//           <img src="profile-placeholder.png" alt="Profile" className="profile-pic" />
//           <h2>{name}</h2>
//           <p>PIN: 8N92VN7P7LY</p>
//           {editing ? (
//             <button onClick={handleSave} className="save-button">Save</button>
//           ) : (
//             <button onClick={handleEdit} className="edit-button">Edit Profile</button>
//           )}
//           <button onClick={handleDownload} className="download-button">Download Medical History</button>
//           <button className="delete-button">Delete</button>
//         </div>
//         <div className="profile-details">
//           <div>
//             <label>Blood Group</label>
//             {editing ? (
//               <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
//                 <option value="">None</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//             ) : (
//               <p>{bloodGroup || 'None'}</p>
//             )}
//           </div>
//           <div>
//             <label>Height (cm)</label>
//             {editing ? (
//               <input
//                 type="number"
//                 value={height}
//                 onChange={(e) => setHeight(e.target.value)}
//               />
//             ) : (
//               <p>{height || '0'}</p>
//             )}
//           </div>
//           <div>
//             <label>Weight (kg)</label>
//             {editing ? (
//               <input
//                 type="number"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//               />
//             ) : (
//               <p>{weight || '0'}</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="additional-info">
//         <h3>Additional Information</h3>
//         <div className="medical-entries">
//           <div className="entry-section">
//             <h4>Chronic Conditions</h4>
//             {chronicConditions.length > 0 ? (
//               chronicConditions.map((condition, index) => <p key={index}>{condition}</p>)
//             ) : (
//               <p>No Chronic Conditions</p>
//             )}
//             <button onClick={() => handleAddEntry('chronic condition')} className="add-entry-button">Add new entry</button>
//           </div>
//           <div className="entry-section">
//             <h4>Allergies</h4>
//             {allergies.length > 0 ? (
//               allergies.map((allergy, index) => <p key={index}>{allergy}</p>)
//             ) : (
//               <p>No Allergies</p>
//             )}
//             <button onClick={() => handleAddEntry('allergy')} className="add-entry-button">Add new entry</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalRecord;




// client/src/components/MedicalRecord.jsx
// client/src/components/MedicalRecord.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MedicalRecord.css';

const MedicalRecord = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [chronicConditions, setChronicConditions] = useState([]);
  const [allergies, setAllergies] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = response.data.user;
        setName(userData.name);
        setEmail(userData.email);
        setBloodGroup(userData.bloodGroup || '');
        setHeight(userData.height || '');
        setWeight(userData.weight || '');
        setChronicConditions(userData.chronicConditions || []);
        setAllergies(userData.allergies || []);
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'http://localhost:5000/api/auth/user',
        { name, email, bloodGroup, height, weight, chronicConditions, allergies },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditing(false);
    } catch (err) {
      console.error('Failed to save user data', err);
    }
  };

  const handleDownload = () => {
    // Implement file download logic here
    console.log('Download medical history');
  };

  const handleAddEntry = (type) => {
    // Implement add entry logic here
    console.log(`Add new ${type} entry`);
  };

  return (
    <div className="medical-record-container">
      <div className="profile-header">
        <div className="profile-info">
          <img src="profile-placeholder.png" alt="Profile" className="profile-pic" />
          <h2>{name}</h2>
          <p>PIN: 8N92VN7P7LY</p>
          {editing ? (
            <button onClick={handleSave} className="save-button">Save</button>
          ) : (
            <button onClick={handleEdit} className="edit-button">Edit Profile</button>
          )}
          <button onClick={handleDownload} className="download-button">Download Medical History</button>
          <button className="delete-button">Delete</button>
        </div>
        <div className="profile-details">
          <div>
            <label>Blood Group</label>
            {editing ? (
              <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                <option value="">None</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            ) : (
              <p>{bloodGroup || 'None'}</p>
            )}
          </div>
          <div>
            <label>Height (cm)</label>
            {editing ? (
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            ) : (
              <p>{height || '0'}</p>
            )}
          </div>
          <div>
            <label>Weight (kg)</label>
            {editing ? (
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            ) : (
              <p>{weight || '0'}</p>
            )}
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h3>Additional Information</h3>
        <div className="medical-entries">
          <div className="entry-section">
            <h4>Chronic Conditions</h4>
            {chronicConditions.length > 0 ? (
              chronicConditions.map((condition, index) => <p key={index}>{condition}</p>)
            ) : (
              <p>No Chronic Conditions</p>
            )}
            <button onClick={() => handleAddEntry('chronic condition')} className="add-entry-button">Add new entry</button>
          </div>
          <div className="entry-section">
            <h4>Allergies</h4>
            {allergies.length > 0 ? (
              allergies.map((allergy, index) => <p key={index}>{allergy}</p>)
            ) : (
              <p>No Allergies</p>
            )}
            <button onClick={() => handleAddEntry('allergy')} className="add-entry-button">Add new entry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
