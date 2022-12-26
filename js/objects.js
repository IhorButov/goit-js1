const cart = {
    items: [],
    getItems() {},
    add(product) {
        this.items.push(product);
    },
    remove(productName) {},
    clearInterval() {},
    countTotalPrice(productName) {},
    increaseQuantity(productName) {},
};

cart.add({naem: 'apple', price: 50});
cart.add({naem: 'lemon', price: 60});
cart.add({naem: 'lemon', price: 60});
cart.add({naem: 'strawberry', price: 110});

console.table(cart.getItems());