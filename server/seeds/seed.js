const mongoose = require('mongoose');
const { User, Item, Location } = require('../models'); 
const cleanDB = require('./cleanDB');
const charityData = require('./charityData.json');

const seedDB = async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Item', 'items');
    await cleanDB('Location', 'locations');

    const users = await User.create(charityData.users);
    const items = await Item.create(charityData.items);
    const locations = await Location.create(charityData.locations);

    for (const user of users) {
      const userData = charityData.users.find((data) => data.email === user.email);
      if (userData) {
        user.itemsDonating = items.filter((item) => userData.itemsDonating.includes(item._id));
        user.location = locations.find((location) => location._id === userData.location);
        await user.save();
      }
    }

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
