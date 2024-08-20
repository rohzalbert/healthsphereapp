// // server/models/Document.js
// const mongoose = require('mongoose');

// const documentSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   name: { type: String, required: true },
//   url: { type: String, required: true },
//   uploadDate: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Document', documentSchema);



// server/models/Document.js
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);
