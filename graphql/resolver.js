const User = require('../models/User');
const Search = require('../models/Search');

module.exports = {
    hello(){
        return {
           text: 'Hello Word',
           views: 123456
        }
    }
}