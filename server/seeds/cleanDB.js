const mongoose = require('mongoose');
const models = require('../models');
const db = require('../config/connection');

const cleanDB = async (modelName, collectionName) => {
  try {
    await db;

    const model = models[modelName];

    if (model) {
      console.log(`Model ${modelName} found.`);
      await mongoose.connection.dropDatabase();

      console.log(`Database dropped successfully.`);
    } else {
      console.error(`Model ${modelName} not found.`);
    }
  } catch (err) {
    console.error(`Error cleaning database:`, err.message);
    throw err;
  } finally {
    mongoose.connection.close();
  }
};

module.exports = cleanDB;
