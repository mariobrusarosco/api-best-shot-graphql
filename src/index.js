// Vendor
import { GraphQLServer, PubSub } from 'graphql-yoga'

// DB
// import {MongoClient, ObjectId} from 'mongodb'
// const MONGO_URL = 'mongodb+srv://mariobrusarosco:m2m1a4o0@soocerguess-nzx4u.mongodb.net/test?retryWrites=true&w=majority'

import db from './db'
// const db = MongoClient.connect(MONGO_URL).then(db => db)
// console.log({ db })


// Resolvers
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'

// Mutations
const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  context: {
    db,
    pubsub
  }
})

server.start(() => {
  console.log('Server is up')
})
