const {reduce,filter,map,range,add,go,pipe,curry} = require('./module');
const log = console.log;
const products = [
  {name: '반팔티', price: 15000, quantity: 1},
  {name: '긴팔티', price: 20000, quantity: 2},
  {name: '핸드폰케이스', price: 15000, quantity: 3},
  {name: '후드티', price: 30000, quantity: 4},
  {name: '바지', price: 25000, quantity: 5}
];

// const total_quantity = pipe(map(p => p.quantity), reduce(add));
const total_quantity = products => sum(p => p.quantity, products);
// const total_price = pipe(map(p => p.price * p.quantity), reduce(add));
const total_price = products => sum(p => p.quantity * p.price, products);

const sum = (f, iter) => go(
  iter,
  map(f),
  reduce(add));

// log(sum(p => p.quantity, products));
log(total_quantity(products));
log(total_price(products));
