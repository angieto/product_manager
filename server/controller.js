const {Product} = require('./model');

module.exports = {
    showProducts: (req, res) => Product.find({})
                                       .then(products => console.log("Backend returned products:", products)||res.json(products))
                                       .catch(err => console.log("Backend returned err:", err)||res.json(err)),
    getProduct: (req, res) => Product.findById(req.params.id)
                                     .then(product => console.log("Backend returned product:", product)||res.json(product))
                                     .catch(err => console.log("Backend returned err:", err)||res.json(err)), 
    createProduct: (req, res) => Product.create(req.body)
                                        .then(newProduct => console.log("Backend made new product:", newProduct)||res.json(newProduct))
                                        .catch(err => console.log("Backend returned err:", err)||res.json(err)), 
    updateProduct: (req, res) => Product.findByIdAndUpdate(req.params.id, req.body , {runValidators: true, new: true})
                                        .then(product => console.log("Backend selected product:", product)||res.json(product))
                                        .catch(err => console.log("Backend returned err:", err)||res.json(err)), 
    deleteProduct: (req, res) => Product.findByIdAndRemove(req.params.id)
                                        .then(deletedProduct => console.log("Deleted product")||res.json(deletedProduct))
                                        .catch(err => console.log("Backend returned err:", err)||res.json(err))
}