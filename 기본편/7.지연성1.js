const {reduce,filter,map,add,go,pipe,curry} = require('./module');
const log = console.log;


log("");
log("range와 느긋한 L.range =========================");
log("!!!range");
const range = l => {
  let i = -1;
  let res = [];
  while(++i  < l) {
    res.push(i);
  }
  return res;
};

log(range(5));

var list = range(4);
log("list");
log(list);
log(reduce(add, list));

log("!!!L.range");
const L = {};
L.range = function *(l) {
  let i = -1;
  while(++i < l) {
    yield i;
  }
}

var list = L.range(4);
log("L.list");
log(list);
log(reduce(add, list));

// range와 느긋한 L.range 테스트
log("");
log("range와 느긋한 L.range 테스트 ============");
// function test(name, time, f) {
//   console.time(name);
//   while(time--) f();
//   console.timeEnd(name);
// }
// test("range",10, () => reduce(add, range(10000000)));
// test("L.range",10, () => reduce(add, L.range(10000000)));
log("range(1_00_000_000)");
console.time('');
go(
  range(1_00_000_000),
  reduce(add),
  log
);
console.timeEnd('');
log("L.range(1_00_000_000)");
console.time('');
go(
  L.range(1_00_000_000),
  reduce(add),
  log
);
console.timeEnd('');


// take
log("");
log("take ============");
const take = (l,iter) => {
  let res = [];
  for(const a of iter) {
    res.push(a);
    if(res.length == l) return res;
  }
  return res;
};




log("end ============");