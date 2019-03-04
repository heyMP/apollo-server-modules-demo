const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
  modules: [
    require('./modules/scripts')
  ]
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀  Server ready at ${url} & ${subscriptionsUrl}`);
})