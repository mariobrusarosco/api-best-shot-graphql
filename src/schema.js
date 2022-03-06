const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    tournaments: [Tournament!]
  }

  type Tournament {
    id: ID!
    label: String!
    description: String
    flag: String!
  }
`;

module.exports = typeDefs;
