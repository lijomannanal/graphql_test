import { buildSchema } from 'graphql';

const schema = buildSchema(`   

    type Contact {
        firstName: String
        lastName: String
    }
    type Friend {
        id: ID
        firstName: String
        lastName: String
        email: String
        gender: String,
        contact: [Contact]
    }

    type Email {
        email: String
    }



    input ContactInput {
        firstName: String
        lastName: String
    }

    input FriendInput {
        firstName: String
        lastName: String
        email: String
        gender: String 
        age: Int
        contact: [ContactInput]
    }



    type Mutation {
        createFriend(input: FriendInput): Friend
    }

    type Query {
        getFriend(id: ID): Friend
    }

`);

export default schema;