const knex = require('../knexfile');
const bcrypt = require('bcrypt');
const { createUserSchema } = require('../validations/index');


const registerUser = async (req, res) => {
    try {
        const { name, username, cpf, email, phone, password } = req.body;
        await createUserSchema.validate(req.body);

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
        console.log(error);
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerUser,
}