const Subscription = {
  count: {
    subscribe(parent, args, { pubsub }, info) {
      let count = 0

      setInterval(() => {
        count++

        pubsub.publish('count', { count })
      }, 2000);

      return pubsub.asyncIterator('count')
    }
  },
  guess: {
    subscribe(parent, { userId }, { db, pubsub }) {
      const user = db.users.find(user => user.id === userId)
      if(!user) throw new Error('no user')

      return pubsub.asyncIterator(userId)
    }
  }
}

export default Subscription
