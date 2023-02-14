export const Mutation = {
  updateMatch: async (
    _: any,
    { matchId, match }: any,
    { dataSources }: { dataSources: any }
  ) => {
    try {
      const updatedMatch = await dataSources.bestShotAPI.updateMatch(
        matchId,
        match
      );

      console.log({ matchId, match, updatedMatch });

      return {
        code: 200,
        success: true,
        message: "Match updated",
        match: updatedMatch,
      };
    } catch (error: any) {
      return {
        code: error.extensions.response.status,
        success: false,
        message: error.extensions.response.body,
        match: null,
      };
    }
  },
};
