// //server/model/plan 
// const mongoose = require('mongoose');

// const workoutRecommendationSchema = new mongoose.Schema({
//   date: { type: Date, required: true },
//   movement: { type: String, required: true },
//   variation: { type: String, required: true },
//   sets: { type: Number, required: true },
//   reps: { type: Number, required: true },
//   intensity: { type: String, required: true },
//   coachComment: { type: String },
//   userComment: { type: String }
// });

// const dietRecommendationSchema = new mongoose.Schema({
//   date: { type: Date, required: true },
//   breakfast: { type: String, required: true },
//   lunch: { type: String, required: true },
//   dinner: { type: String, required: true }
// });

// const planSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   type: { type: String, enum: ['diet', 'workout'], required: true },
//   description: { type: String, required: true },
//   recommendations: {
//     type: [
//       {
//         type: mongoose.Schema.Types.Mixed,
//         validate: {
//           validator: function (v) {
//             if (this.type === 'workout') {
//               return v.every(recommendation => 
//                 recommendation.date && recommendation.movement && recommendation.variation && recommendation.sets &&
//                 recommendation.reps && recommendation.intensity
//               );
//             } else if (this.type === 'diet') {
//               return v.every(recommendation =>
//                 recommendation.date && recommendation.breakfast && recommendation.lunch && recommendation.dinner
//               );
//             }
//             return false;
//           },
//           message: props => `${props.value} is not a valid recommendation format for the plan type.`
//         }
//       }
//     ],
//     required: true
//   }
// });

// module.exports = mongoose.model('Plan', planSchema);




// server/models/Plan.js
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['diet', 'workout'], required: true },
  description: { type: String, required: true },
  recommendations: { type: String }
});

module.exports = mongoose.model('Plan', planSchema);
