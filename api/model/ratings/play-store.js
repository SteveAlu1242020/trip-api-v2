const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
    play_store: {
        average: {
            type: Number,
            required: true
        },
        totalReviews: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('play-store', RatingSchema)
