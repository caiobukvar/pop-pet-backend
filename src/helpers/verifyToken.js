const knex = require('../conexao');
const jwt = require('jsonwebtoken');
const hashPassword = require('../hashPassword');

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Not authorized');
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, hashPassword);

        const userExists = await knex('users').where({ id }).first();

        if (!userExists) {
            return res.status(404).json('Invalid token');
        }

        const { password, ...user } = userExists;

        req.user = user;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verifyToken;