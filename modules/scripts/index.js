const { gql, PubSub } = require('apollo-server')
const pubsub = new PubSub()
const MESSAGE = 'MESSAGE';

/**
 * Define Schema
 */
const typeDefs = gql`
  extend type Query {
    message: String
  }

  type Subscription {
    message: String
  }

  extend type Mutation {
    sayHi: Boolean
  }
` 

const resolvers = {
  Query: {
    message: () => 'hi'
  },

  Subscription: {
    message: {
      subscribe: () => pubsub.asyncIterator([MESSAGE]),
    }
  },

  Mutation: {
    sayHi: (_, args, ctx) => pubsub.publish(MESSAGE, {message: 'people are talking'})
  }

}

module.exports = {
  typeDefs,
  resolvers
}