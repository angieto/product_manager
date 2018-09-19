const api = require('./controller');
const bodyParser = require('body-parser')

module.exports = function(app) {
    app.use(bodyParser.json());
    // routes
    app.get('/api/products', api.showProducts);
    app.get('/api/products/:id', api.getProduct);
    app.post('/api/products', api.createProduct);
    app.put('/api/products/:id', api.updateProduct);
    app.delete('/api/products/:id', api.deleteProduct);
}