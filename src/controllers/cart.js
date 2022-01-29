const { readFile } = require('../database/db');
const { returnCartValue } = require('../utils/cart');

async function addToCart() {
    const { id, amount } = req.body;

    if (!id || !amount) {
        return res.status(400).json({
            message: "Id and amount are required."
        });
    }
    const fileData = await readFile();
    const { cart, products } = fileData;

    const productExists = products.find((prod) => prod.id === id);

    if (!productExists) {
        return res.status(400).json({
            message: "This product doesn&apos;t exist."
        })
    }

    const newProduct = {
        id,
        amount,
        name: productExists.name,
        price: productExists.price,
        category: productExists.category,
    }

    if (amount > productExists.stock) {
        return res.status(400).json({
            message: "Not enough stock."
        })
    }

    const productAlreadyInCart = cart.products.find(prod => prod.id === id);

    if (productAlreadyInCart === -1) {
        fileData.cart.products[productAlreadyInCart].amount += amount;
    }

    fileData.cart.products.push(newProduct);

    const cartValue = returnCartValue(fileData.cart);

}

module.exports = {
    addToCart,
}