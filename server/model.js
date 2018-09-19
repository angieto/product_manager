const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products_db', {useNewUrlParser: true}, errs => console.log(errs?errs:"running product_db"));

const ProductSchema = mongoose.Schema({
    title: {
        required: true,
        minlength: [4, "Title must be at least 4 characters long"]
    },
    price: {
        required: [true, "Please include product price"]
    },
    imgUrl: {
        required: false
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product}