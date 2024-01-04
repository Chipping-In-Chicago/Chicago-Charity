const typeDefs = `
type User {
  _id: ID!
  email: String!
  password: String!
  itemsDonating: [Item]
  location: Location
}

type Item {
  _id: ID!
  itemName: String!
  category: String!
}

type Location {
  _id: ID!
  locationName: String!
  items: [Item]
  address: String
}

type Query {
  getUsers: [User]
  getItems: [Item]
  getLocations: [Location]
}

type Mutation {
  createUser(input: UserInput): User
  createItem(input: ItemInput): Item
  createLocation(input: LocationInput): Location
}

input UserInput {
  email: String!
  password: String!
}

input ItemInput {
  itemName: String!
  category: String!
}

input LocationInput {
  locationName: String!
  address: String
}
`;
model.exports = typeDefs;