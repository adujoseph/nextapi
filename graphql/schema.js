const { buildSchema } = require('graphql');
const User = require('../models/User');
const Search = require('../models/Search');
const { query } = require('express');

module.exports = buildSchema(`
    type TestData {
        text: String!
        views: Int!
    }
    type RootQuery {
        hello: TestData
    }

    schema {
            query: RootQuery
        }
`)

