const mongoose = require('mongoose');
const { User, Item, Location } = require('./models');

const cleanDB = async () => {
  try {
    await User.deleteMany({});
    await Item.deleteMany({});
    await Location.deleteMany({});
    console.log('Database cleaned successfully.');
  } catch (error) {
    console.error('Error cleaning database:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

cleanDB();
