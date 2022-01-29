const express = require('express');

const login = require('./controllers/login');
const users = require('./controllers/users');
const products = require('./controllers/products');
// const cart = require('./controllers/cart');

const auth = require('./helpers/verifyToken');
// routes.xxx('/rota', auth, funcao);

const routes = express();

routes.post('/register', users.registerUser);
// routes.patch('/update/user/:id', users.updateUser);

routes.post('/login', login.login);

routes.get('/products', products.listProducts);

// routes.get('/cart',);
// routes.post('/cart/products/',);
// routes.delete('/cart/products/:id',);
// routes.post('/checkout',);

module.exports = routes;

