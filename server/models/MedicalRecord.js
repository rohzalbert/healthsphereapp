
// models/MedicalRecord.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalRecordSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hospitalLabName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);
