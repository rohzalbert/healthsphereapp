
//client/src/components/modal 

import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ handleClose, onFileUpload }) => {
  const [recordType, setRecordType] = useState('');
  const [dateOfRecord, setDateOfRecord] = useState('');
  const [hospitalLabName, setHospitalLabName] = useState('');
  const [recordDescription, setRecordDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('recordType', recordType);
    formData.append('dateOfRecord', dateOfRecord);
    formData.append('hospitalLabName', hospitalLabName);
    formData.append('recordDescription', recordDescription);
    formData.append('file', file);

    await onFileUpload(formData);
    handleClose(); // Close modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Record</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Record Type:
            <select value={recordType} onChange={(e) => setRecordType(e.target.value)} required>
              <option value="">Select Record Type</option>
              <option value="Prescription">Prescription</option>
              <option value="Lab Report">Lab Report</option>
              <option value="Vitals">Vitals</option>
              <option value="New Appointment">New Appointment</option>
              <option value="Doctor Report">Doctor Report</option>
            </select>
          </label>
          <label>
            Date of Record:
            <input
              type="date"
              value={dateOfRecord}
              onChange={(e) => setDateOfRecord(e.target.value)}
              required
            />
          </label>
          <label>
            Hospital/Lab Name:
            <input
              type="text"
              value={hospitalLabName}
              onChange={(e) => setHospitalLabName(e.target.value)}
              required
            />
          </label>
          <label>
            Record Description:
            <textarea
              value={recordDescription}
              onChange={(e) => setRecordDescription(e.target.value)}
              required
            />
          </label>
          <label>
            Upload File:
            <input
              type="file"
              accept=".pdf,.jpeg,.png"
              onChange={handleFileChange}
              required
            />
          </label>
          <div className="modal-buttons">
            <button type="submit" className="confirm-button">Save</button>
            <button type="button" className="close-button" onClick={handleClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
