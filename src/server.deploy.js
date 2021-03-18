const { ApolloServer } = require('apollo-server-lambda')

const { schema } = require('./graphql/index')

const server = new ApolloServer({
  schema
})

module.exports = { server }
