const log = console.log;
const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

const map = (f, iter) => {
  let res = [];
  for(const p of iter) {
    res.push(f(p));
  }
  return res;
}
const filter = (f, iter) => {
  let res = [];
  for(let item of iter) {
    if(f(item)) res.push(item); 
  }
  return res;
};
const reduce = (f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const value of iter) {
    acc = f(acc, value);
  }
  return acc;
};

log("");
log("1.map ============");

log("");