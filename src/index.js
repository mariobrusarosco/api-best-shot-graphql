import { GraphQLServer } from 'graphql-yoga'

import { teams, players } from './mock'

const typeDefs = `
  type Query {
    team(id: ID): Team!
  }

  type Team {
    id: ID!
    name: String!
    label: String!
    players: [Player!]!
  }

  type Player {
    id: ID!
    name: String!
    age: Int!
  }

`

const resolvers = {
  Query: {
    team(parent, args, context, info) {
      const { id } = args

      return teams.find(team => team.id === id)
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('Server is up')
})
