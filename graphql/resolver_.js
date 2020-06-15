const User = require('../models/User');
const Search = require('../models/Search');

module.exports = {
    createUser: async function ({ userInput }, req) {
        const existingUser = await User.findOne({ email: userInput.email });
        if(existingUser){
            const error = new Error('User exist already!')
            throw error;
        }
        const user = new User({
            username: userInput.username,
            email: userInput.email
        })
       const createdUser = await user.save();
       return {...createdUser._doc, _id: createdUser._id.toString() };
    },

    createSearch: async function ({ searchInput }, req) {
        let user = await User.findOne({email : searchInput.email})
        if(!user){
            const error = new Error('User does not exist!')
            throw error;
        }
        const search = new Search({
            address: searchInput.address,
            creator: user
        })
        
        const createdSearch = await search.save();
        user.searches.push(createdSearch)
        await user.save();
        return {...createdSearch._doc, _id: createdSearch._id.toString(), createdAt : createdSearch.createdAt.toISOString(), ...user }
    }
}