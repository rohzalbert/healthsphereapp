
// // server/routes/healthData.js





// const express = require('express');
// const Symptom = require('../models/Symptom');
// const Medication = require('../models/Medication');
// const Document = require('../models/Document');
// const BloodSugar = require('../models/BloodSugar');
// const BloodPressure = require('../models/BloodPressure');
// const authMiddleware = require('../middleware/authMiddleware');
// const router = express.Router();

// // Create a new symptom log
// router.post('/symptoms', authMiddleware, async (req, res) => {
//   const { date, description } = req.body;
//   try {
//     const symptom = new Symptom({ userId: req.user.id, date, description });
//     await symptom.save();
//     res.status(201).json(symptom);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all symptoms for a user
// router.get('/symptoms', authMiddleware, async (req, res) => {
//   try {
//     const symptoms = await Symptom.find({ userId: req.user.id });
//     res.json(symptoms);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Create a new medication entry
// router.post('/medications', authMiddleware, async (req, res) => {
//   const { name, dosage, frequency, startDate, endDate, reminders } = req.body;
//   try {
//     const medication = new Medication({
//       userId: req.user.id,
//       name,
//       dosage,
//       frequency,
//       startDate,
//       endDate,
//       reminders,
//     });
//     await medication.save();
//     res.status(201).json(medication);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all medications for a user
// router.get('/medications', authMiddleware, async (req, res) => {
//   try {
//     const medications = await Medication.find({ userId: req.user.id });
//     res.json(medications);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Upload a new document
// router.post('/documents', authMiddleware, async (req, res) => {
//   const { name, url } = req.body;
//   try {
//     const document = new Document({ userId: req.user.id, name, url });
//     await document.save();
//     res.status(201).json(document);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all documents for a user
// router.get('/documents', authMiddleware, async (req, res) => {
//   try {
//     const documents = await Document.find({ userId: req.user.id });
//     res.json(documents);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Add Blood Sugar Log
// router.post('/blood-sugar', authMiddleware, async (req, res) => {
//   try {
//     const newLog = new BloodSugar({
//       userId: req.user.id,
//       date: req.body.date,
//       time: req.body.time,
//       level: req.body.level,
//       notes: req.body.notes,
//     });

//     const savedLog = await newLog.save();
//     res.status(201).json(savedLog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to log blood sugar' });
//   }
// });

// // Get Blood Sugar Logs
// router.get('/blood-sugar', authMiddleware, async (req, res) => {
//   try {
//     const logs = await BloodSugar.find({ userId: req.user.id });
//     res.json(logs);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch blood sugar logs' });
//   }
// });

// // Add Blood Pressure Log
// router.post('/blood-pressure', authMiddleware, async (req, res) => {
//   try {
//     const newLog = new BloodPressure({
//       userId: req.user.id,
//       date: req.body.date,
//       time: req.body.time,
//       systolic: req.body.systolic,
//       diastolic: req.body.diastolic,
//       heartRate: req.body.heartRate,
//       notes: req.body.notes,
//     });

//     const savedLog = await newLog.save();
//     res.status(201).json(savedLog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to log blood pressure' });
//   }
// });

// // Get Blood Pressure Logs
// router.get('/blood-pressure', authMiddleware, async (req, res) => {
//   try {
//     const logs = await BloodPressure.find({ userId: req.user.id });
//     res.json(logs);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch blood pressure logs' });
//   }
// });

// // Update a blood pressure log
// router.put('/blood-pressure/:id', authMiddleware, async (req, res) => {
//   try {
//     const updatedLog = await BloodPressure.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedLog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update blood pressure log' });
//   }
// });

// // Delete a blood pressure log
// router.delete('/blood-pressure/:id', authMiddleware, async (req, res) => {
//   try {
//     await BloodPressure.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Log deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete blood pressure log' });
//   }
// });

// // Update a blood sugar log
// router.put('/blood-sugar/:id', authMiddleware, async (req, res) => {
//   try {
//     const updatedLog = await BloodSugar.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedLog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update blood sugar log' });
//   }
// });

// // Delete a blood sugar log
// router.delete('/blood-sugar/:id', authMiddleware, async (req, res) => {
//   try {
//     await BloodSugar.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Log deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete blood sugar log' });
//   }
// });


// module.exports = router;




const express = require('express');
const Symptom = require('../models/Symptom');
const Medication = require('../models/Medication');
const Document = require('../models/Document');
const BloodSugar = require('../models/BloodSugar');
const BloodPressure = require('../models/BloodPressure');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new symptom log
router.post('/symptoms', authMiddleware, async (req, res) => {
  const { date, description } = req.body;
  try {
    const symptom = new Symptom({ userId: req.user.id, date, description });
    await symptom.save();
    res.status(201).json(symptom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all symptoms for a user
router.get('/symptoms', authMiddleware, async (req, res) => {
  try {
    const symptoms = await Symptom.find({ userId: req.user.id });
    res.json(symptoms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new medication entry
router.post('/medications', authMiddleware, async (req, res) => {
  const { name, dosage, frequency, startDate, endDate, reminders } = req.body;
  try {
    const medication = new Medication({
      userId: req.user.id,
      name,
      dosage,
      frequency,
      startDate,
      endDate,
      reminders,
    });
    await medication.save();
    res.status(201).json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all medications for a user
router.get('/medications', authMiddleware, async (req, res) => {
  try {
    const medications = await Medication.find({ userId: req.user.id });
    res.json(medications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Upload a new document
router.post('/documents', authMiddleware, async (req, res) => {
  const { name, url } = req.body;
  try {
    const document = new Document({ userId: req.user.id, name, url });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all documents for a user
router.get('/documents', authMiddleware, async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.user.id });
    res.json(documents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add Blood Sugar Log
router.post('/blood-sugar', authMiddleware, async (req, res) => {
  try {
    const newLog = new BloodSugar({
      userId: req.user.id,
      date: req.body.date,
      time: req.body.time,
      level: req.body.level,
      notes: req.body.notes,
    });

    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to log blood sugar' });
  }
});

// Get Blood Sugar Logs
router.get('/blood-sugar', authMiddleware, async (req, res) => {
  try {
    const logs = await BloodSugar.find({ userId: req.user.id });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blood sugar logs' });
  }
});

// Add Blood Pressure Log
router.post('/blood-pressure', authMiddleware, async (req, res) => {
  try {
    const newLog = new BloodPressure({
      userId: req.user.id,
      date: req.body.date,
      time: req.body.time,
      systolic: req.body.systolic,
      diastolic: req.body.diastolic,
      heartRate: req.body.heartRate,
      notes: req.body.notes,
    });

    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to log blood pressure' });
  }
});

// Get Blood Pressure Logs
router.get('/blood-pressure', authMiddleware, async (req, res) => {
  try {
    const logs = await BloodPressure.find({ userId: req.user.id });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blood pressure logs' });
  }
});

// Update a blood pressure log
router.put('/blood-pressure/:id', authMiddleware, async (req, res) => {
  try {
    const updatedLog = await BloodPressure.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blood pressure log' });
  }
});

// Delete a blood pressure log
router.delete('/blood-pressure/:id', authMiddleware, async (req, res) => {
  try {
    await BloodPressure.findByIdAndDelete(req.params.id);
    res.json({ message: 'Log deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blood pressure log' });
  }
});

// Update a blood sugar log
router.put('/blood-sugar/:id', authMiddleware, async (req, res) => {
  try {
    const updatedLog = await BloodSugar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blood sugar log' });
  }
});

// Delete a blood sugar log
router.delete('/blood-sugar/:id', authMiddleware, async (req, res) => {
  try {
    await BloodSugar.findByIdAndDelete(req.params.id);
    res.json({ message: 'Log deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blood sugar log' });
  }
});

module.exports = router;
