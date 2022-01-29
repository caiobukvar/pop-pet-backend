require('dotenv').config();

const knex = {
    client: 'pg',
    connection: {
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT ?? '3000', 10),
        user: process.env.DB_USERNAME,
    }
}

module.exports = knex;
