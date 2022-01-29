const { readFile, writeFile } = require('../database/db');
const { returnCartValue } = require('../utils/cart');

async function addToCart(req, res) {
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
            message: "This product doesn't exist."
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
        fileData.cart.products.push(newProduct);
    } else {
        fileData.cart.products[productAlreadyInCart].amount += amount;
    }

    const cartValue = returnCartValue(fileData.cart);

    const updateCart = await writeFile(fileData);

    if (!updateCart) {
        return res.status(500).json({
            message: "Fail to add to cart."
        })
    }

    return res.status(201).json(cartValue);
}

async function editCart(req, res) {
    const { amount } = req.body;
    const id = parseInt(req.params.id);


    if (!id || !amount) {
        return res.status(400).json({
            message: "Must send id and amount."
        });
    }

    const fileData = await readFile();
    const { cart, products } = fileData;

    const productExists = products.find((prod) => prod.id === id);

    if (!productExists) {
        return res.status(400).json({
            message: "This product doesn't exist."
        })
    }

    const cartProductIndex = cart.products.findIndex(prod => prod.id === id);
    if (cartProductIndex === -1) {
        return res.status(400).json({
            message: "Product is not in the cart."
        });
    }

    const productWithNewAmount = {
        id,
        amount,
        name: productExists.name,
        price: productExists.price,
        category: productExists.category,
    };

    if ((amount + cart.products[cartProductIndex].amount) > productExists.stock) {
        return res.status(400).json({
            message: "Not enough stock"
        });
    }
    if ((amount + cart.products[cartProductIndex].amount) < 0) {
        return res.status(400).json({
            message: "Can't remove more than what you have in cart!"
        });
    }

    fileData.cart.products[cartProductIndex].amount += amount;

    if (cart.products[cartProductIndex].amount === 0) {
        fileData.cart.products.splice(cartProductIndex, 1);
    }



    const updateCart = await writeFile(fileData);

    if (!updateCart) {
        return res.status(404).json({
            message: "Failed to update product amount!"
        })
    }

    const newCartValue = returnCartValue(fileData.cart);

    return res.status(200).json(newCartValue);
}

async function deleteFromCart(req, res) {
    const id = parseInt(req.params.id);

    const fileData = await readFile();
    const { cart } = fileData;

    const cartProductIndex = cart.products.findIndex(produto => produto.id === id);
    if (cartProductIndex === -1) {
        return res.status(404).json({
            message: "Product isn't in the cart."
        })
    }

    fileData.cart.products.splice(cartProductIndex, 1);

    const updateCart = await writeFile(fileData);
    if (!updateCart) {
        return res.status(400).json({
            message: "Failed to delete this product from the cart."
        });
    }

    const newCartValue = returnCartValue(fileData.cart);

    return res.status(200).json(newCartValue);
}

async function clearCart(req, res) {
    const fileData = await readFile();

    fileData.cart = {
        products: [],
        total: 0
    }

    const updateCart = await writeFile(fileData);

    if (!updateCart) {
        return res.status(400).json({
            message: "Failed to clear cart."
        })
    }

    return res.status(200).json({
        message: "Cart cleared!"
    })
}

async function getCart(req, res) {
    const { cart } = await readFile();

    const cartValue = returnCartValue(cart);

    return res.status(200).json(cartValue);
}

async function checkout(req, res) {

}


module.exports = {
    addToCart,
    editCart,
    deleteFromCart,
    clearCart,
    getCart
}