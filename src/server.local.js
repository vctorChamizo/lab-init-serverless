const { ApolloServer } = require('apollo-server')

const { schema } = require('./graphql/index')

const server = new ApolloServer({
  schema,
  playground: true
})

server.listen(3000, () => {
  console.log(`GraphQL Server running at http://localhost:3000`)
})
