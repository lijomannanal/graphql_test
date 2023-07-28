import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefs = `type Contact {
        firstName: String
        lastName: String
    }
    type Friend {
        id: ID
        firstName: String
        lastName: String
        language: String
        email: String
        gender: String,
        contacts: [Contact]
    }

    type Email {
        email: String
    }

    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }



    input ContactInput {
        firstName: String
        lastName: String
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        language: String
        email: String
        gender: String 
        age: Int
        contacts: [ContactInput]
    }



    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }

    type Query {
        getOneFriend(id: ID): Friend
        getAliens(id: ID): [Alien]
    }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers});

export default schema;