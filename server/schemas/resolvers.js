const { User, Item, Location } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        return await User.find().populate("itemsDonating").populate("location");
      } catch (error) {
        console.error("Error in getUsers resolver:", error);
        throw error;
      }
    },
    getItems: async () => {
      try {
        return await Item.find().sort({ category: -1 });
      } catch (error) {
        console.error("Error in getItems resolver:", error);
        throw error;
      }
    },
    getLocations: async () => {
      try {
        return await Location.find().populate("items");
      } catch (error) {
        console.error("Error in getLocations resolver:", error);
        throw error;
      }
    },
  },
  Mutation: {
    createUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    createItem: async (_, { input }) => {
      try {
        return await Item.create(input);
      } catch (error) {
        console.error("Error in createItem resolver:", error);
        throw error;
      }
    },
    createLocation: async (_, { input }) => {
      try {
        return await Location.create(input);
      } catch (error) {
        console.error("Error in createLocation resolver:", error);
        throw error;
      }
    },
    // updateItemCount: async (parent, {_id, newCount}, context) => {
    //   const item = Item.findById(_id)
    //   item.itemCount = newCount;
    //   return item;
    // }
    updateItemCount: async (_, { _id, itemCount }, context) => {
      try {
        const item = Item.findById({ _id: _id });
        if (!item) {
          throw new Error("Item not found");
        }
        item.itemCount = itemCount;
        // await Item.findOneAndUpdate({ _id: _id }, { $set: item });
        return item;
      } catch (error) {
        throw new Error(error)
      }
    },
    loginUser: async (parent, { email, password }) => {
      console.log('at resolver', email);
      console.log('at resolver', password);

      const user = await User.findOne({ email });
      console.log('at resolver user found', user);

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log('at resolver password match?', correctPw);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
