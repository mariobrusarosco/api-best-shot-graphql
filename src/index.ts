import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const BestShotAPI = require("./datasources/best-shot-api");

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      BestShotAPI: new BestShotAPI(),
    };
  },
  context: {
    test: "Lorem ipsum",
  },
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }: { url: string }) => {
    console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://api-dev-best-shot.herokuapp.com/
  `);
  });
