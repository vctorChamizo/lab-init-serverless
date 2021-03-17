const {
  ApolloServer,
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
      return 'Hello, worldsdsdsdsdsd!'
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const server = new ApolloServer({
  schema,
  playground: true
})

// https://khalilstemmler.com/articles/tutorials/deploying-a-serverless-graphql-api-on-netlify/

exports.handler = server.createHandler()
