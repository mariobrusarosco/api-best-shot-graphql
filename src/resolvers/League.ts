const League = {
  members: async (
    parent: any,
    args: any,
    { dataSources }: { dataSources: any }
  ) => {
    const members = await dataSources.BestShotAPI.getAllMembers();

    const leagueMembers = members
      .filter((member: any) => {
        return parent.members?.includes(member?._id);
      })
      .map((member: any) => ({
        id: member._id,
        ...member,
      }));

    return leagueMembers;
  },
};

export default League;
