export const cart = [{
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    quantity: 6
}];

export function addToCart(productName, productQuantity) {
    let found = false;
    cart.forEach(item => {
        if (item.name === productName) {
            item.quantity += productQuantity;
            found = true;
        }
    });

    if (!found) {
        cart.push({
            name: productName,
            quantity: productQuantity
        });
    }
}