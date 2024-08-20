// // server/models/Medication.js
// const mongoose = require('mongoose');

// const medicationSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   name: { type: String, required: true },
//   dosage: { type: String, required: true },
//   frequency: { type: String, required: true },
//   startDate: { type: Date, required: true },
//   endDate: { type: Date, required: true },
//   reminders: [
//     {
//       time: String,
//       note: String
//     }
//   ]
// });

// module.exports = mongoose.model('Medication', medicationSchema);


// server/models/Medication.js
const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reminders: [
    {
      time: String,
      note: String
    }
  ]
});

module.exports = mongoose.model('Medication', medicationSchema);
