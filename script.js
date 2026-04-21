// -----------------------05
// -------------------------Exporting and Importing in ES6 Modules

// Importing Modules
// import './shoppingCart.js';
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('Bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js ';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice)
// console.log(ShoppingCart.totalPrice/ShoppingCart.tq)

// import add, {addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('Pizza', 2);
// addToCart('Pizza', 5);
// console.log(price, tq)
// console.log(price/ tq)

// import add, { cart } from './shoppingCart.js';
// add('Pizza', 2);
// add('Bread', 5);
// add('Apples', 5);
// console.log(cart);

// -----------------------06
// -------------------------Top-Level await (ES2022)
// Top-Level await
// console.log('Start Fetching...')
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// const data = await res.json();
// console.log(data)
// console.log('Something')

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   return { title : data.at(-1).title, body : data.at(-1).body }
// };

// const lastpost =  await getLastPost();
// console.log(lastpost)

// -----------------------07
// -------------------------The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const totalPrice = 223;
//   const totalQuantity = 23;
//   const shippingCost = 50;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart(shiping cost is ${shippingCost})`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('Bread', 5);
// ShoppingCart2.addToCart('Pizza', 2);
// console.log(ShoppingCart2)
// console.log(ShoppingCart2.shippingCost)

// -----------------------08
// -------------------------Common JS Modules
// Export
// export.addTocart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//   );
// };

// // Import
// const { addTocart } = require('./shoppingCart.js');




















