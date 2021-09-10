const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = Schema({
    name: {               
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    thumb: {
        type: Array,
        required: true
    },
    cuisine: {
        type: Object,
        required: true
    },
    cuisine_type:  {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    city_id: {
        type: Number,
        required: true
    },
    aggregate_rating: {
        type: Number,
        required: true
    },
    rating_text: {
        type: String,
        required: true
    },
    min_price: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    mealtype_id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cuisine_id: {
        type: Number,
        required: true
    }
}) 

module.exports = mongoose.model('Restaurant', restaurantSchema, 'Restaurants');