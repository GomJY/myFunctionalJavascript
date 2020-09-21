const log = console.log;
const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];
const { reduce, map, filter, add } = require('./module');

log("go==================");
const go = (...args) => reduce((a, f) => f(a), args);

go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  log
);


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