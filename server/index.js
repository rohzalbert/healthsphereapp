// server/index

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Initialize Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Get the port and MongoDB URI from environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from HealthSphere server!');
});

// Import and use route handlers
const authRoutes = require('./routes/auth');
const healthDataRoutes = require('./routes/healthData');
const consultationsRoutes = require('./routes/consultations');
const plansRoutes = require('./routes/plans');
const medicalRecordsRoutes = require('./routes/medicalRecords');
const uploadRoutes = require('./routes/upload'); // Add the upload route

app.use('/api/auth', authRoutes);
app.use('/api/health-data', healthDataRoutes);
app.use('/api/consultations', consultationsRoutes);
app.use('/api/plans', plansRoutes);
app.use('/api/medical-records', medicalRecordsRoutes);
app.use('/api/upload', uploadRoutes); // Use the upload route

// Serve static files for uploaded medical records
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
