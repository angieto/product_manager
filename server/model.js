const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products_db', {useNewUrlParser: true}, errs => console.log(errs?errs:"running product_db"));

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [4, "Title must be at least 4 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Please include product price"],
        min: [0.1, "Price must be at least greater than 0"]
    },
    url: {
        type: String
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product}