const resolvers = {
  Query: {
    tournaments: (_, __, { dataSources }) => {
      return dataSources.BestShotAPI.getTournaments()
    }
  },
};

module.exports = resolvers;
