const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({

    id: {
        type: Number || String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        stars: {
            type: Number,
            required: true
        },
        average: {
            type: Number,
            required: true
        },
        reviewCount: {
            type: Number,
            required: true
        }
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('shanghai', HotelSchema)

// {
//     "id": 0,
//     "title": "Name",
//     "rating": {
//         "stars": 0,
//         "average": 0,
//         "reviewCount": 0
//     },
//     "imageUrl": "#",
//     "price": 105
// }