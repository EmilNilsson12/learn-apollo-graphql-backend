//TODO
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.mjs";
import { resolvers } from "./resolvers.mjs";
import { TrackAPI } from "./datasources/track-api.mjs";

// ApolloServer takes an object as argument
// called Constructor object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});
// console.log(Object.keys(server), ': server keys')

server.listen().then(({ port }) => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port: ${port}
    📭  Query at https://studio.apollographql.com/dev
    `);
});
