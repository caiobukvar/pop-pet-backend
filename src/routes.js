const express = require('express');
const login = require('./controllers/login');
const verifyToken = require('./helpers/verifyToken');

const rotas = express();

//cadastro usuário
rotas.post('/cadastro', usuarios.cadastrarUsuario);

//Login
rotas.post('/login', login.login);
rotas.use(verifyToken);

