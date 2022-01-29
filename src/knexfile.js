require('dotenv').config();

const knex = require('knex')(
    {
        client: 'pg',
        connection: {
            database: process.env.DB_DATABASE,
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        }
    }
)

module.exports = knex;
