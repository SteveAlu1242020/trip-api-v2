const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({

    id: {
        type: Number || String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        average: {
            type: Number,
            required: true
        },
        grade: {
            type: String,
            required: true
        }
    },
    imageUrl: {
        type: String,
        required: true
    },
    dealerLogoUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('san-francisco', CarSchema)