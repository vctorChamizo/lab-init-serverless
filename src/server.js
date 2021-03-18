const { ApolloServer } = require('apollo-server')
const {
  ApolloServer: ApolloServerLambda,
  makeExecutableSchema,
  gql
} = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, wssssorld!'
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

function createLambdaServer() {
  return new ApolloServerLambda({
    schema
  })
}

function createLocalServer() {
  return new ApolloServer({
    schema,
    introspection: true,
    playground: true
  })
}

module.exports = { createLambdaServer, createLocalServer }
