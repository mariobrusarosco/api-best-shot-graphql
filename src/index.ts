import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import BestShotAPI from "./datasources/best-shot-api";

interface ContextValue {
  dataSources: {
    bestShotAPI: BestShotAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const main = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          bestShotAPI: new BestShotAPI(),
        },
      };
    },
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at ${url}`);
};

main();
