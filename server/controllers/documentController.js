
// server/controllers/documentController.js
const Document = require('../models/Document');

// Upload a new document
exports.uploadDocument = async (req, res) => {
  const { userId, name, url } = req.body;
  try {
    const document = new Document({ userId, name, url });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all documents for a user
exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.params.userId });
    res.json(documents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
