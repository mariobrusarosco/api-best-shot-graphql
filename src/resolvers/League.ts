const League = {
  members: async (
    parent: any,
    args: any,
    { dataSources }: { dataSources: any }
  ) => {
    const leagueMembers = parent.members;
    const allMembers = await dataSources.bestShotAPI.getAllMembers();
    // const filteredMembers = allMembers.reduce((prevMember: any, acc: any) => {
    //   return leagueMembers.includes(prevMember._id)
    //     ? [...acc, { ...prevMember, id: prevMember._id }]
    //     : acc;
    // }, []);

    const filteredMembers = allMembers.reduce((acc: any, member: any) => {
      const isMember = leagueMembers.includes(member._id);
      return isMember ? [...acc, { ...member, id: member._id }] : acc;
    }, []);

    console.log({ filteredMembers });

    return filteredMembers;
  },
};

export default League;
