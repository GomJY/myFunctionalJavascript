//리스트 순회
const log = console.log;
const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

const products_price = product => product.price;
const products_name = product => product.name;

log("1.map ============");
const map = (f, iter) => {
  let res = [];
  for(const p of iter) {
    res.push(f(p));
  }
  return res;
}

log(map(products_price, products));
log(map(products_name, products));
log("");

log("2,3.map의 다형성 ============");
function *gen() {
  yield 2;
  if(false) yield 3;
  yield 4;
}
log(map(a => a*a, gen()));
log("");

log("Map자료형에 내부 값을 번경할때도 사용할수 있다.");
let m = new Map();
m.set('a', 10);
m.set('b', 20);
log("before", m); //before Map(2) {a => 10, b => 20}
m = new Map(map(([k, a]) => [k, a * 2], m));
log("after: ",m); //after:  Map(2) {a => 20, b => 40}

log("");
log("filter ============");
 const filter = (f, iter) => {
    let res = [];
    for(let item of iter) {
      if(f(item)) res.push(item); 
    }
    return res;
 };
 log(filter((i) => i.price < 20000, products));
 log(filter((i) => i.price >= 20000, products));

 
log("");
log("reduce ============");
const nums = [1, 2, 3, 4, 5];

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

log(reduce((acc, i) => acc + i, 0, nums));
log(reduce((acc, i) => acc + i, nums));


log("");
log("reduce2 ============");
 log(
   reduce(
    (total_price, product) => total_price + product.price,
    0,
    products
  ));


log("");
log("map + filter + reduce 중첩 사용 ============");
const add = (a, b) => a + b ;
log(
  reduce(
    add,
    map(p => p.price, 
        filter(p => p.price < 20000, products))));
log(
  reduce(
    add,
    filter(n => n < 20000,
      map(p => p.price, products))));


log("");
