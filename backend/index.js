// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// const authRoutes = require('./routes/auth');
// const workoutRoutes = require('./routes/workouts');
// app.use('/api/auth', authRoutes);
// app.use('/api/workouts', workoutRoutes);
// mongoose.connect('mongodb://127.0.0.1:27017/HealthTracker', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Hey , Your MongoDB connected'))
//   .catch(err => console.error(err));
//   const PORT = 5000
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');

app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);


const atlasUri = process.env.MONGODB_URI;


mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Hey, Your MongoDB Atlas connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
