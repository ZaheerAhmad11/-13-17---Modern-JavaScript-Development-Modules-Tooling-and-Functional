//Exporting Module
console.log('Exporting Module');

/// Block Code
// console.log('Start Block fetching...')
// await fetch(`https://jsonplaceholder.typicode.com/posts`);
// console.log('Finish Block fetching...')

const shippingCost = 10;
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 225;
const totalQuantity = 25;

export { totalPrice, totalQuantity as tq};

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};