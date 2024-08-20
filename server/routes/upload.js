
// routes/upload.js


const express = require('express');
const multer = require('multer');
const path = require('path');
const MedicalRecord = require('../models/MedicalRecord'); 

const router = express.Router();

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Save files in the 'uploads' directory
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Rename file to avoid conflicts
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Initialize upload variable
const upload = multer({ storage });

// Route to handle file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { recordType, dateOfRecord, hospitalName, recordDescription } = req.body;
    const file = req.file;

    const newRecord = new MedicalRecord({
      recordType,
      dateOfRecord,
      hospitalName,
      recordDescription,
      fileUrl: `/uploads/${file.filename}`, // Save the file path in the DB
    });

    await newRecord.save();

    res.status(201).json({ message: 'Record saved successfully', fileUrl: newRecord.fileUrl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save record' });
  }
});

module.exports = router;



