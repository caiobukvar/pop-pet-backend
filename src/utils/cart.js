function returnCartValue(cart) {
    let total = 0;

    cart.products.forEach(prod => {
        total += prod.price * prod.amount;
    })

    const cartValue = {
        total
    }

    return cartValue;
}

module.exports = {
    returnCartValue,
}