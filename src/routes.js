const express = require('express');
const login = require('./controllers/login');
const verifyToken = require('./helpers/verifyToken');


const rotas = express();

//cadastro usuário
rotas.post('/cadastro', usuarios.cadastrarUsuario);

//Login
rotas.post('/login', login.login);

// filtro de verificação (middleware) - usuário está logado?
rotas.use(verifyToken);

// obter e atualizar perfil do usuário logado
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

// Postagens
rotas.post('/postagens', postagens.novaPostagem);
rotas.get('/postagens', postagens.feed);
rotas.post('/postagens/:postagemId/curtir', postagens.curtir);
rotas.post('/postagens/:postagemId/comentar', postagens.comentar);
