require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const locationsRouter = require('./routes/locations');

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000');
  });
}).catch((err) => {
  console.log('Error:', err);})

app.use('/api/locations',locationsRouter)




