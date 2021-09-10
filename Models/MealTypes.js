const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealTypeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    meal_type: {
        type: Number,
        required: true
    },
    cuisine_id: {
        type: Number,
        required: true
    }
        
}) 

module.exports = mongoose.model('Mealtype', mealTypeSchema,'Mealtypes' );
