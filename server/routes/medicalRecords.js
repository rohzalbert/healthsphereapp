//server/routes/medicalrecords 

const express = require('express');
const multer = require('multer');
const path = require('path');
const MedicalRecord = require('../models/MedicalRecord');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Ensure uploads directory exists
const fs = require('fs');
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// Endpoint to handle file uploads and save record to the database
router.post('/', authMiddleware, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { recordType, dateOfRecord, hospitalLabName, recordDescription } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;

    const newRecord = new MedicalRecord({
      type: recordType,
      date: dateOfRecord,
      hospitalLabName,
      description: recordDescription,
      fileUrl,
      user: req.user.id,
    });

    await newRecord.save();

    res.status(201).json({ message: 'Medical record added successfully', record: newRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get all medical records for the logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const records = await MedicalRecord.find({ user: req.user.id });
    res.status(200).json({ records });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
