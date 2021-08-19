
// const products = [
//     {name:'i-phone', price:10000},
//     {name:'t-shirt', price:500},
//     {name:'watch', price:5000},
//     {name:'others', price:1000}

// ];

// let totalPrice = 0;
// for(const product of products){
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

const cart = [
    {name:'i-phone', price:10000, quantity: 1},
    {name:'t-shirt', price:500, quantity: 8},
    {name:'watch', price:5000, quantity: 2},
    {name:'others', price:1000, quantity: 1}

];
let cartTotal = 0;
for(const product of cart){
    const productTotal =  product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
