const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    genre: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    id: ID!
    name: String!
    username: String!
    age: Int = 18
    nationality: Nationality
  }

  type mutation {
    createUser(input: CreateUserInput!): User!
  }

  enum Nationality {
    CANADA
    BRAZIL
    USA
    INDIA
  }
`;

module.exports = { typeDefs };
