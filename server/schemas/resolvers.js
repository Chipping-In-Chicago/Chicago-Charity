const { User, Item, Location } = require('../models');

const resolvers = {
  Query: {
    getUsers: async () => await User.find().populate('itemsDonating').populate('location'),
    getItems: async () => await Item.find(),
    getLocations: async () => await Location.find().populate('items'),
  },
  Mutation: {
    createUser: async (_, { input }) => await User.create(input),
    createItem: async (_, { input }) => await Item.create(input),
    createLocation: async (_, { input }) => await Location.create(input),
  },
};

module.exports = resolvers;
