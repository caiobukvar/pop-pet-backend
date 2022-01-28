const express = require('express');
const login = require('./controllers/login');
const users = require('./controllers/users');
const verifyToken = require('./helpers/verifyToken');

const routes = express();

//cadastro usuário
routes.post('/register', users.registerUser);

//Login
routes.post('/login', login.login);
routes.use(verifyToken);

