const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products_db', {useNewUrlParser: true}, errs => console.log(errs?errs:"running product_db"));

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is missing"],
        minlength: [3, "Product must be at least 3 characters long"]
    },
    qty: {
        type: Number,
        required: [true, "Please include product quantity"],
        min: [0, "Product quantity must be at least 0"]
    },
    price: {
        type: Number,
        required: [true, "Please include product price"],
        min: [0, "Minimum price is 0"]
    },
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product}