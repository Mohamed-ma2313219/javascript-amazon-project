export const cart = [{}];

export function addToCart(productName, productQuantity) {
    let found = false;
    cart.forEach(item => {
        if (item.productName === productName) {
            item.productQuantity += productQuantity;
            found = true;
        }
    });

    if (!found) {
        cart.push({
            productName,
            productQuantity
        });
    };
}