const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, 'Use must add an address field']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    //     user: {
    //     type: String,
    //     ref: 'User',
    //     required: true
    // }
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
});

module.exports = mongoose.model('Search', SearchSchema);



















// Create bootcamp slug from the name
// SearchSchema.pre('save', function (next) {
//     this.createdAt =  createdAt.toDateString()
//     next();
// });

// Geocode & create location field
// BootcampSchema.pre('save', async function (next) {
//     const loc = await geocoder.geocode(this.address);
//     this.location = {
//         type: 'Point',
//         coordinates: [loc[0].longitude, loc[0].latitude],
//         formattedAddress: loc[0].formattedAddress,
//         street: loc[0].streetName,
//         city: loc[0].city,
//         state: loc[0].stateCode,
//         zipcode: loc[0].zipcode,
//         country: loc[0].countryCode
//     };

//     // Do not save address in DB
//     this.address = undefined;
//     next();
// });

// Cascade delete courses when a bootcamp is deleted
// BootcampSchema.pre('remove', async function (next) {
//     console.log(`Courses being removed from bootcamp ${this._id}`);
//     await this.model('Course').deleteMany({ bootcamp: this._id });
//     next();
// });

// Reverse populate with virtuals
// BootcampSchema.virtual('courses', {
//     ref: 'Course',
//     localField: '_id',
//     foreignField: 'bootcamp',
//     justOne: false
// });





// username: {
//     type: String,
//     required: [true, 'Use must add an address field'],
//     search: {
//         type: String,
//         createdAt: {
//             type: Date,
//             default: Date.now()
//         }
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// }
