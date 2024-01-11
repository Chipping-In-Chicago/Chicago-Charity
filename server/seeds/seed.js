const db = require('../config/connection');
const { User, Item, Location } = require('../models');
const cleanDB = require('./cleanDB');
const charityData = require('./charityData.json');

db.once('open', async () => {

  try {
    await cleanDB('User', 'users');
    await cleanDB('Item', 'items');
    // await cleanDB('Location', 'locations');

    await User.create(charityData.users);
    await Item.create(charityData.items);
    // await Location.create(charityData.locations);

    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
})

