const mongoose = require('mongoose');
require('dotenv').config();

function connectToDB() {
  if (!process.env.MONGO_URI) {
    console.error('Mongo URI is missing in .env file');
    process.exit(1);
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB', err);
      process.exit(1);
    });
}

module.exports = connectToDB;

// In the code snippet above, we have created a function called connectToDB that connects to the MongoDB database using the MONGO_URI from the .env file. We have also exported the function so that it can be used in other files.
