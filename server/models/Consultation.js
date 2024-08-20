// server/models/Consultation.js
const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  healthcareProviderId: { type: mongoose.Schema.Types.ObjectId },
  type: { type: String, enum: ['chat', 'video'], required: true },
  messages: [
    {
      sender: { type: String },
      message: { type: String },
      timestamp: { type: Date, default: Date.now }
    }
  ],
  callHistory: [
    {
      callType: { type: String, enum: ['incoming', 'outgoing'] },
      callDuration: { type: Number },
      callDate: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Consultation', consultationSchema);
