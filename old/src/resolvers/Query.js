const Query = {
  team(parent, args, { db }, info) {
    const { id } = args

    return db.teams.find(team => team.id === id)
  },
  user(parent, args, { db }) {
    const { id } = args

    return db.users.find(user => user.id === id)
  }
}

export default Query
