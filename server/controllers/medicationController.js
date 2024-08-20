// // server/controllers/medicationController.js
// const Medication = require('../models/Medication');

// // Create a new medication entry
// exports.createMedication = async (req, res) => {
//   const { userId, name, dosage, frequency, startDate, endDate, reminders } = req.body;
//   try {
//     const medication = new Medication({ userId, name, dosage, frequency, startDate, endDate, reminders });
//     await medication.save();
//     res.status(201).json(medication);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all medications for a user
// exports.getMedications = async (req, res) => {
//   try {
//     const medications = await Medication.find({ userId: req.params.userId });
//     res.json(medications);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


// server/controllers/medicationController.js
const Medication = require('../models/Medication');

// Create a new medication entry
exports.createMedication = async (req, res) => {
  const { userId, name, dosage, frequency, startDate, endDate, reminders } = req.body;
  try {
    const medication = new Medication({ userId, name, dosage, frequency, startDate, endDate, reminders });
    await medication.save();
    res.status(201).json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all medications for a user
exports.getMedications = async (req, res) => {
  try {
    const medications = await Medication.find({ userId: req.params.userId });
    res.json(medications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
