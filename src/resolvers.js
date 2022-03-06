const resolvers = {
  Query: {
    tournaments: async (_, __, { dataSources }) => {
      const tournaments = await dataSources.BestShotAPI.getTournaments() 
      const mappedTournaments = tournaments.map(tournament => ({ id: tournament._id, label: tournament.label, description: tournament.description, flag: tournament.flag }))
      
      return mappedTournaments
    }
  },
};

module.exports = resolvers;
