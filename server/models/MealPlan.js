// models/MealPlan.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealPlanSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  meals: {
    breakfast: {
      type: String,
      required: true,
    },
    lunch: {
      type: String,
      required: true,
    },
    dinner: {
      type: String,
      required: true,
    },
    snacks: {
      type: String,
      default: '',
    },
  },
  done: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('MealPlan', MealPlanSchema);
