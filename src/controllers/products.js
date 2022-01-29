const { readFile } = require('../database/db');

async function listProducts(req, res) {
    const { products } = await readFile();
    const { id, name, price, stock, category, image } = req.query;


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