const { User, Item, Location } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        return await User.find().populate('itemsDonating');
      } catch (error) {
        console.error('Error in getUsers resolver:', error);
        throw error;
      }
    },
    getItems: async () => {
      try {
        return await Item.find().sort({ category: -1});
      } catch (error) {
        console.error('Error in getItems resolver:', error);
        throw error;
      }
    },
    getLocations: async () => {
      try {
        return await Location.find().populate('items');
      } catch (error) {
        console.error('Error in getLocations resolver:', error);
        throw error;
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        return await User.create(input);
      } catch (error) {
        console.error('Error in createUser resolver:', error);
        throw error;
      }
    },
    createItem: async (_, { input }) => {
      try {
        return await Item.create(input);
      } catch (error) {
        console.error('Error in createItem resolver:', error);
        throw error;
      }
    },
    createLocation: async (_, { input }) => {
      try {
        return await Location.create(input);
      } catch (error) {
        console.error('Error in createLocation resolver:', error);
        throw error;
      }
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;