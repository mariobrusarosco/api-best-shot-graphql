import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    tournaments: [Tournament!]
    tournament(id: ID!): Tournament
    leagues: [League!]!
  }

  type Mutation {
    updateMatch(matchId: ID!, match: MatchInput): UpdateMatchResponse!
  }

  input MatchInput {
    host: String
    visitor: String
    date: String
    tournamentId: String
    stadium: String
  }

  type UpdateMatchResponse {
    code: Int!
    success: Boolean!
    message: String!
    match: Match
  }

  type Tournament {
    _id: ID!
    label: String!
    description: String!
    flag: String!
  }

  type League {
    _id: ID!
    label: String!
    members: [Member]!
  }

  type Member {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
  }

  type Match {
    _id: ID!
    host: String!
    visitor: String!
    date: String!
    tournamentId: String!
    stadium: String!
  }
`;

export default typeDefs;
