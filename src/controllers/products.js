const knex = require('../knexfile');

async function listProducts(req, res) {

    const products = await knex('products');
    const { id, name, price, stock, category, image, description } = req.query;

    if (!products) {
        return res.status(200).json([]);
    }

    if (category) {
        products = products.filter(prod =>
            prod.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (price) {
        products = products.filter(prod =>
            prod.price === price
        );
    }

    return res.status(200).json(products);
}

module.exports = {
    listProducts,
}