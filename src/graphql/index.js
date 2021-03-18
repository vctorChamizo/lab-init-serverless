const { makeExecutableSchema, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, world!'
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = { schema }
