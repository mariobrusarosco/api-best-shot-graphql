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


  type Mutation {
    createTeam(name: String!, label: String!): Team!
  }
`

const resolvers = {
  Query: {
    team(parent, args, context, info) {
      const { id } = args

      return teams.find(team => team.id === id)
    }
  },
  Mutation: {
    createTeam(parent, args, context, info) {
      const newTeam = {
        id: Math.random()
          .toString(16)
          .slice(2),
        ...args
      }
      teams.push(newTeam)
      return newTeam
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
