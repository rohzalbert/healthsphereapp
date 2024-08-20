


// // // client/src/components/HealthData/DocumentUploader.js
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../../context/AuthContext';

// // const DocumentUploader = () => {
// //   const { token } = useAuth(); // Get token from AuthContext
// //   const [recordType, setRecordType] = useState('');
// //   const [dateOfRecord, setDateOfRecord] = useState('');
// //   const [hospitalName, setHospitalName] = useState('');
// //   const [recordDescription, setRecordDescription] = useState('');
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('recordType', recordType);
// //     formData.append('dateOfRecord', dateOfRecord);
// //     formData.append('hospitalName', hospitalName);
// //     formData.append('recordDescription', recordDescription);
// //     formData.append('file', file);

// //     try {
// //       await axios.post('/api/health-data/documents', formData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       alert('Document uploaded successfully');
// //     } catch (error) {
// //       console.error('Error uploading document:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Upload New Medical Record</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>Record Type</label>
// //         <select value={recordType} onChange={(e) => setRecordType(e.target.value)}>
// //           <option value="Lab Report">Lab Report</option>
// //           <option value="Prescription">Prescription</option>
// //           <option value="Consultation">Consultation</option>
// //         </select>

// //         <label>Date of Record</label>
// //         <input type="date" value={dateOfRecord} onChange={(e) => setDateOfRecord(e.target.value)} />

// //         <label>Hospital Name</label>
// //         <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />

// //         <label>Record Description</label>
// //         <textarea value={recordDescription} onChange={(e) => setRecordDescription(e.target.value)}></textarea>

// //         <label>Upload File</label>
// //         <input type="file" onChange={handleFileChange} />

// //         <button type="submit">Save</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default DocumentUploader;




// // // client/src/components/HealthData/DocumentUploader.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const DocumentUploader = () => {
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('file', file);

// //     try {
// //       const token = localStorage.getItem('token');
// //       await axios.post('/api/health-data/documents', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       setFile(null);
// //       alert('Document uploaded successfully');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div className="document-uploader">
// //       <h2>Upload Document</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="file"
// //           onChange={handleFileChange}
// //           required
// //         />
// //         <button type="submit">Upload Document</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default DocumentUploader;




// import React, { useState } from 'react';
// import { uploadDocument } from '../../api/healthData';

// const DocumentUploader = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError('Please select a file to upload');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await uploadDocument(file, token);
//       setFile(null);
//       alert('Document uploaded successfully');
//     } catch (error) {
//       setError('Failed to upload document');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="document-uploader">
//       <h2>Upload Document</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} required />
//         <button type="submit">Upload Document</button>
//       </form>
//     </div>
//   );
// };

// export default DocumentUploader;




// client/src/components/HealthData/DocumentUploader.js
import React, { useState } from 'react';
import axios from 'axios';

const DocumentUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/health-data/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setFile(null);
      alert('Document uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="document-uploader">
      <h2>Upload Document</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Upload Document</button>
      </form>
    </div>
  );
};

export default DocumentUploader;
