const log = console.log;
const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];
const { reduce, map, filter, add } = require('./module');

log("");
log("go==================");
const go = (...args) => reduce((a, f) => f(a), args);

go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  log
);

log("");
log("pipe==================");
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const f = pipe(
  (a, b) => a + b,
  c => c + 1,
  c => c + 10,
  c => c + 100);
const f2 = pipe(
  (a, b) => a + b,
  c => c + 1,
  c => c + 10,
  c => c + 100);
log(f(100, 0));
log(f(1, 2));

log("");
log("go를 사용하여 읽기 좋은 코드로 만들기==================");
go(
  products,
  pro => filter(p => p.price < 20000)(pro),
  pro => map(p => p.price)(pro),
  pro => reduce(add)(pro),
  log
);


log("");
log("go+curry를 사용하여 더 읽기 좋은 코드로 만들기==================");
const curry = f => 
                (a, ..._) => _.length 
                                    ? f(a, ..._) 
                                    : (..._) => f(a, ..._);
const mult = curry((a, b) => a * b);
log(mult(1)(2));

log("mult3");
const mult3 = curry((a,b) => a * b)(3);
log(mult3(1));
log(mult3(2));
log(mult3(3));

log("");
log("함수 조합으로 함수 만들기==================");
const total_price = pipe(
  map(p => p.price),
  reduce(add));
const base_total_price = predi => pipe(
  filter(predi),
  total_price);
go(
  products,
  base_total_price(p => p.price < 20000),
  log
);
//30000

go(
  products,
  base_total_price(p => p.price > 20000),
  log
);
//55000

log("End==================");