import { GraphQLServer } from 'graphql-yoga'

import { teams, players, users, guesses, tournaments } from './mock'

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

  input CreateTeamInput {
    name: String!
    label: String!
  }

  type Player {
    id: ID!
    name: String!
    age: Int!
  }

  type Guess {
    id: ID!
    team_a: Int!
    team_b: Int!
  }

  input CreateGuessInput {
    userId: ID!
    tournamentId: ID!
    team_a: Int!
    team_b: Int!
  }

  input DeleteGuessInput {
    userId: ID!
    guessId: ID!
  }

  type Mutation {
    createTeam(data: CreateTeamInput): Team!
    createGuess(data: CreateGuessInput): Guess!
    removeGuess(data: DeleteGuessInput): Guess!
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
    createTeam(parent, { data }, context, info) {
      const newTeam = {
        id: Math.random()
          .toString(16)
          .slice(2),
        ...data
      }
      teams.push(newTeam)
      return newTeam
    },
    createGuess(parent, { data }) {
      const { userId } = data
      const user = users.find(user => user.id === userId)
      const newGuess = {
        id: Math.random()
          .toString(16)
          .slice(2),
        ...data
      }
      user.guesses.push(newGuess)
      return newGuess
    },
    removeGuess(parent, { data }) {
      const { userId, guessId } = data
      const userIndex = users.findIndex(user => user.id === userId)
      const user = users[userIndex]
      const guessIndex = user.guesses.findIndex(guess => guess.guess_id === guessId)
      const guess = user.guesses[guessIndex]
      const deletedGuess = user.guesses.splice(guessIndex, 1)

      console.log(user.guesses, guessIndex)

      return guess
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
