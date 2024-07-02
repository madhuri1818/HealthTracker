const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
router.post('/', workoutController.createWorkout);
router.get('/:userId', workoutController.getAllWorkouts);
module.exports = router;