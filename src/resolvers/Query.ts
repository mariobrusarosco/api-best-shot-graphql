const Query = {
  tournaments: async (
    _: any,
    __: any,
    { dataSources }: { dataSources: any }
  ) => {
    const tournaments = await dataSources.BestShotAPI.getTournaments();

    const mappedTournaments = tournaments.map((tournament: any) => ({
      id: tournament._id,
      ...tournament,
    }));

    return mappedTournaments;
  },
  tournament: async (
    _: any,
    args: any,
    { dataSources }: { dataSources: any }
  ) => {
    const tournaments = await dataSources.BestShotAPI.getTournaments();

    const tournament = tournaments.find(
      (tournament: any) => tournament?.id === args?.ID
    );

    return (
      tournament ?? {
        label: "",
        description: "",
        flag: "",
      }
    );
  },
  leagues: async (_: any, args: any, { dataSources }: { dataSources: any }) => {
    const leagues = await dataSources.BestShotAPI.getAllLeagues();

    const mapppedleagues = leagues.map((league: any) => ({
      id: league._id,
      ...league,
    }));

    return mapppedleagues;
  },
};

export default Query;
