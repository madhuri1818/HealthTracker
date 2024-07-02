const Workout = require('../models/Workout');
exports.createWorkout = async (req, res) => {
  try {
    const { userId,date, exercise, duration, calories,distance,heartRate,weight } = req.body;
    const workout = new Workout({
      userId,
      date,
      exercise,
      duration,
      calories,
      // intensity, 
  distance, 
  heartRate,
  weight
    });
    await workout.save();
    res.json ({ message: 'Workout created successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAllWorkouts = async(req,res) => {
  const { userId } = req.params
  try{
  const workouts = await Workout.find({ userId});
  console.log(workouts)
  res.json(workouts)
    }
  catch (error){
 console.log(error)
  }
}
