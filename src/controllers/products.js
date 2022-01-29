const { readFile } = require('../database/db');

async function listProducts(req, res) {
    const file = await readFile();

}

module.exports = {
    listProducts,
}