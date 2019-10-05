const Mutation = {
  createTeam(parent, { data }, { db }, info) {
    const newTeam = {
      id: Math.random()
        .toString(16)
        .slice(2),
      ...data
    }
    db.teams.push(newTeam)
    return newTeam
  },
  createGuess(parent, { data }, { db, pubsub }) {
    const { userId } = data
    const user = db.users.find(user => user.id === userId)
    const newGuess = {
      id: Math.random()
        .toString(16)
        .slice(2),
      ...data
    }
    user.guesses.push(newGuess)

    pubsub.publish('guess', {
      guess: { mutationType: 'CREATED', data: newGuess }
    })

    return newGuess
  },
  removeGuess(parent, { data }, { db }) {
    const { userId, guessId } = data
    const userIndex = db.users.findIndex(user => user.id === userId)
    const user = db.users[userIndex]
    const guessIndex = user.guesses.findIndex(guess => guess.id === guessId)
    const guess = user.guesses[guessIndex]
    const deletedGuess = user.guesses.splice(guessIndex, 1)

    return guess
  }
}

export default Mutation
