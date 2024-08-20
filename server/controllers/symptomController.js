// // server/controllers/symptomController.js
// const Symptom = require('../models/Symptom');

// // Create a new symptom log
// exports.createSymptom = async (req, res) => {
//   const { userId, date, description } = req.body;
//   try {
//     const symptom = new Symptom({ userId, date, description });
//     await symptom.save();
//     res.status(201).json(symptom);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all symptoms for a user
// exports.getSymptoms = async (req, res) => {
//   try {
//     const symptoms = await Symptom.find({ userId: req.params.userId });
//     res.json(symptoms);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };



// server/controllers/symptomController.js
const Symptom = require('../models/Symptom');

// Create a new symptom log
exports.createSymptom = async (req, res) => {
  const { userId, date, description } = req.body;
  try {
    const symptom = new Symptom({ userId, date, description });
    await symptom.save();
    res.status(201).json(symptom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all symptoms for a user
exports.getSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find({ userId: req.params.userId });
    res.json(symptoms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
