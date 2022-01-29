const knex = require('../knexfile');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { username, password, email, confirmPassword } = req.body;

    if (!username) {
        return res.status(404).json("Username field is required");
    }

    if (!password) {
        return res.status(404).json("Password field is required");
    }

    if (!email) {
        return res.status(404).json("E-mail field is required");
    }

    if (password.length < 5) {
        return res.status(404).json("Password must contain at least 8 characters");
    }

    if (password !== confirmPassword) {
        return res.status(404).json("Password must match!");
    }

    try {
        const userExists = await knex('users').where({ username }).first();

        if (userExists) {
            return res.status(400).json("Informed username already exists");
        }

        const securePassword = await bcrypt.hash(password, 10);

        const user = await knex('users').insert({
            username,
            password: securePassword
        });

        if (!user) {
            return res.status(400).json("User couldn&apos;t be registered.");
        }

        return res.status(200).json('User registered successfully!');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerUser,
}