// models/BloodSugar.js
// const mongoose = require('mongoose');

// const BloodSugarSchema = new mongoose.Schema({
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
//   level: {
//     type: Number,
//     required: true,
//   },
//   notes: String,
// });

// module.exports = mongoose.model('BloodSugar', BloodSugarSchema);



// server/models/BloodSugar.js

const mongoose = require('mongoose');

const BloodSugarSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: String,
  time: String,
  level: Number,
  notes: String
});

module.exports = mongoose.model('BloodSugar', BloodSugarSchema);
