const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
const TrackAPI = require('./datasources/track-api.js');

// ApolloServer takes an object as argument
// called Constructor object
async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        trackAPI: new TrackAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });

  console.log(`
  🚀  Server is running!
  🔉  Listening on port: ${port}
  📭  Query at ${url}
  `);
}

startApolloServer(typeDefs, resolvers);
