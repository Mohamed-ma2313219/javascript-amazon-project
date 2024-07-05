export let cart = JSON.parse(localStorage.getItem("cart")) || [{
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    quantity: 6
}];

function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

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
    saveToStorage();
}


export function removeFromCart(productName) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.name !== productName) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}