function returnCartValue(cart) {
    let subTotal = 0;

    cart.products.forEach(prod => {
        subTotal += prod.price * prod.amount;
    })

    const cartValue = {
        subTotal
    }

    return cartValue;
}