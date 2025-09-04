const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
        min: 0,
    },
    pdf: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Book', bookSchema);