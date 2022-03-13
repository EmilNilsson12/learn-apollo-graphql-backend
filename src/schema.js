const { gql } = require('apollo-server');

// This file defines the fields that are chosen to be used in the query
// There are additional fields available on the Track object
// See https://odyssey-lift-off-rest-api.herokuapp.com/docs/
// for more details

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
    module(id: ID!): Module
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    "Resolves Author from resolver chain"
    author: Author!
    thumbnail: String
    "Modules video duration in seconds"
    durationInSeconds: Int
    durationInMinutes: Int
    "Modules video duration in hours"
    durationInHours: Float
    length: Int @deprecated(reason: "use durationInSeconds")
    modulesCount: Int
    "Resolves [Module] from resolver chain"
    modules: [Module!]!
    description: String
    numberOfViews: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int
    "Resolves Track from resolver chain"
    track: Track
    content: String
    videoUrl: String
  }
`;

module.exports = typeDefs;
