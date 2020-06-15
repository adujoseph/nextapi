const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Searches {
        _id: ID!
        address: String!
       creator: User!   
    }
    type User {
        _id : ID!
        username: String!
        email: String!
        searches: [Searches!]!
    }

    input SearchInputData {
        address: String!
        email: String!
    }

    input UserInputData {
        username: String!
        email: String!
    }
    type RootQuery {
        hello: String!
    }
    type RootMutation {
        createUser(userInput: UserInputData): User!
        createSearch(searchInput: SearchInputData): Searches!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)