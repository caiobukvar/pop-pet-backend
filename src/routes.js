const express = require('express');

const login = require('./controllers/login');
const users = require('./controllers/users');
const products = require('./controllers/products');
// const cart = require('./controllers/cart');

const auth = require('./helpers/verifyToken');
// routes.xxx('/rota', auth, funcao);

const router = express();

router.post('/register', users.registerUser);
router.patch('/update/user/:id', users.updateUser);

router.post('/login', login.login);

router.get('/products', products.listProducts);

router.get('/cart', cart.getCart);
router.post('/cart/products/', cart.addToCart);
router.post('/cart/products/:id', cart.editCart);
router.delete('/cart/products/:id', cart.deleteFromCart);
router.delete('/cart', cart.clearCart);
router.post('/checkout', cart.checkout);

router.use(verifyToken);

