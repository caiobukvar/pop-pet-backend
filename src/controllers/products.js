const knex = require('../knexfile');


async function listProducts(req, res) {
    try {
        const products = await knex('products');
        return res.status(200).json(products);
    } catch (error) {
        return res.status(400);
    }
}

async function listProductsById(req, res) {
    try {
        const id = req.params.id;

        const product = await knex('products').where({ id });

        if (!product) {
            return res.status(404).json('No product with this informed id.');
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}



module.exports = {
    listProducts,
    listProductsById
}