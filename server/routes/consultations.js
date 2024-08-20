// server/routes/consultations.js
const express = require('express');
const Consultation = require('../models/Consultation');
const router = express.Router();

// Create a new consultation
router.post('/', async (req, res) => {
  const { userId, healthcareProviderId, type } = req.body;
  try {
    const consultation = new Consultation({ userId, healthcareProviderId, type });
    await consultation.save();
    res.status(201).json(consultation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all consultations for a user
router.get('/:userId', async (req, res) => {
  try {
    const consultations = await Consultation.find({ userId: req.params.userId });
    res.json(consultations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
