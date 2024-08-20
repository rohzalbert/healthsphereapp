// models/WorkoutPlan.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutPlanSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  focusArea: {
    type: String,
    required: true,
  },
  exercises: {
    type: [String],  // Array of exercise descriptions
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('WorkoutPlan', WorkoutPlanSchema);
