// // server/controllers/planController.js
// const Plan = require('../models/Plan');

// // Create a new plan
// exports.createPlan = async (req, res) => {
//   const { userId, type, description, recommendations } = req.body;
//   try {
//     const plan = new Plan({ userId, type, description, recommendations });
//     await plan.save();
//     res.status(201).json(plan);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all plans for a user
// exports.getPlans = async (req, res) => {
//   try {
//     const plans = await Plan.find({ userId: req.params.userId });
//     res.json(plans);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };





// server/controllers/planController.js
const Plan = require('../models/Plan');

// Create a new plan
exports.createPlan = async (req, res) => {
  const { userId, type, description, recommendations } = req.body;
  try {
    const plan = new Plan({ userId, type, description, recommendations });
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all plans for a user
exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ userId: req.params.userId });
    res.json(plans);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
