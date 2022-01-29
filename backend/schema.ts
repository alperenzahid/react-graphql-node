import apollo = require('apollo-server');
const { gql } = apollo;
const typeDefs = gql`
  type Location{
    name: String,
    url: String
  }
  type Character {
    id: Int
    name: String
    status: String
    species: String
    type: String!
    gender: String
    origin: Location,
    location: Location,
    image: String,
    episode: [String],
    url: String,
    created: String
  }

  type Query {
    characters(filter: String!, page: Int!): [Character!]!
  }
`;

export default typeDefs;