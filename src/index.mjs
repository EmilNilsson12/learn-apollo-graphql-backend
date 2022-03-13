//TODO
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.mjs';
import { resolvers } from './resolvers.mjs';
import { TrackAPI } from './datasources/track-api.mjs';

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
