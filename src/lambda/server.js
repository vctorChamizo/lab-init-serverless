const { server } = require('../server.deploy')

exports.handler = server.createHandler({
  cors: {
    origin: '*'
  }
})
