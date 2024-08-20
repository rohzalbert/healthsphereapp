// // models/BloodPressure.js
// const mongoose = require('mongoose');

// const BloodPressureSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   systolic: {
//     type: Number,
//     required: true,
//   },
//   diastolic: {
//     type: Number,
//     required: true,
//   },
//   heartRate: {
//     type: Number,
//     required: true,
//   },
//   notes: String,
// });

// module.exports = mongoose.model('BloodPressure', BloodPressureSchema);




// server/models/BloodPressure.js

const mongoose = require('mongoose');

const BloodPressureSchema = new mongoose.Schema({
  date: String,
  time: String,
  systolic: Number,
  diastolic: Number,
  heartRate: Number,
  notes: String,
  category: String, // Make sure this field is defined in the schema
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('BloodPressure', BloodPressureSchema);
