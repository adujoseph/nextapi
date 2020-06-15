const { buildSchema } = require('graphql');
const User = require('../models/User');
const Search = require('../models/Search');
const { query } = require('express');

module.exports = buildSchema(`
    type searches {
        id:ID!
        address: String!
    }
    type TestData {
        username: String!
        searches: [searches!]!
    }
    type RootQuery {
        user: TestData
    }

    schema {
            query: RootQuery
        }
`)
// {query{ user { searches}} }


// username: {
//     type: String,
//     required: [true, 'Please add a username']
// },
// searches: [
//     {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'Search'
//     }
// ],