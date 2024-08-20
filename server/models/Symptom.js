// // server/models/Symptom.js
// const mongoose = require('mongoose');

// const symptomSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   date: { type: Date, required: true },
//   description: { type: String, required: true }
// });

// module.exports = mongoose.model('Symptom', symptomSchema);



// server/models/Symptom.js
const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Symptom', symptomSchema);
