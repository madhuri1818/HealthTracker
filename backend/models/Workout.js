const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  exercise: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  // intensity: { type: String, enum: ['Low', 'Moderate', 'High'] }, 
  distance: { type: Number }, 
  heartRate: { type: Number },
  weight: { type: Number }
});
module.exports = mongoose.model('Workout', workoutSchema);
