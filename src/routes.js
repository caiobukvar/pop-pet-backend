const express = require('express');

const login = require('./controllers/login');
const users = require('./controllers/users');
const products = require('./controllers/products');
const cart = require('./controllers/cart');

const verifyToken = require('./helpers/verifyToken');

const routes = express();

routes.post('/register', users.registerUser);
routes.patch('/update/user/:id', users.updateUser);

routes.post('/login', login.login);

routes.get('/products', products.listProducts);

routes.get('/cart',);
routes.post('/cart/products/', cart.addToCart);
routes.delete('/cart/products/:id',);
routes.post('/checkout',);

routes.use(verifyToken);

