const {reduce,filter,map,range,add,go,pipe,curry} = require('./module');
const log = console.log;
const products = [
  {name: '반팔티', price: 15000, quantity: 1},
  {name: '긴팔티', price: 20000, quantity: 2},
  {name: '핸드폰케이스', price: 15000, quantity: 3},
  {name: '후드티', price: 30000, quantity: 4},
  {name: '바지', price: 25000, quantity: 5}
];


log("");
log("총수량, 총가격 =========================");
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


log("");
log("HTML로 출력 =========================");
let productsList_htmlText = "상품 테이블";
log(
    sum(p => `
      상품이름: ${p.name},
      가격: ${p.price},
      수량: ${p.quantity}
    `, products)
);
//가격이 10000원 보다 높은 상품만 표시
log("!!!가격이 10000원 보다 높은 상품만 표시")
log(
  go(
    products,
    filter(p => p.price > 10000),
    map(p => `
      상품이름: ${p.name},
      가격: ${p.price},
      수량: ${p.quantity}`),
    reduce((a, b) => a + b)
  )
)
//수량이 가장 적은 상품만 표시하는 함수 제작
log("!!!수량이 가장 적은 상품만 표시하는 함수 제작");

let verySmall = (products) => {
  let temp = -1;
}
log(filter());

log();