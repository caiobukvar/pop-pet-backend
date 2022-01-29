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

routes.get('/cart', cart.getCart);
routes.post('/cart/products/', cart.addToCart);
routes.post('/cart/products/:id', cart.editCart);
routes.delete('/cart/products/:id', cart.deleteFromCart);
routes.delete('/cart', cart.clearCart);
routes.post('/checkout', cart.checkout);

routes.use(verifyToken);

