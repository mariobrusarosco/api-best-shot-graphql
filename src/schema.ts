import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    tournaments: [Tournament!]
    tournament(id: ID!): Tournament
    leagues: [League!]!
  }

  type Tournament {
    id: ID!
    label: String!
    description: String!
    flag: String!
  }

  type League {
    id: ID!
    label: String!
    members: [Member!]!
  }

  type Member {
    id: ID!
    email: String!
  }

  type Match {
    id: ID!
    host: String!
    visitor: String!
    date: String!
    tournamentId: String!
    stadium: String!
  }
`;

export default typeDefs;
