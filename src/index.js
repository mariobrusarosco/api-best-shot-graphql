const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const BestShotAPI = require('./datasources/best-shot-api');

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      BestShotAPI: new BestShotAPI(),
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://api-dev-best-shot.herokuapp.com/
  `);
});
