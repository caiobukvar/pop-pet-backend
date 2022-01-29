const knex = require('../knexfile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(404).json('Username and password are obligatory!');
    }

    try {
        const user = await knex('users').where({ username }).first();

        if (!user) {
            return res.status(404).json('User not found');
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
            return res.status(400).json('Data doesn&apos;t check');
        }

        const userTokenData = {
            id: user.id,
            username: user.username
        }

        const token = jwt.sign(userTokenData, process.env.JWT_SECRET);

        const { password: _, ...userData } = user;

        return res.status(200).json({
            usuario: userData,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
};