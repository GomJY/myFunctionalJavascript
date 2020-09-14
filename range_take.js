let log = (...data) => console.log(...data);
const { reduce, map, filter, add } = require('./module');


//rage 
const range = l => {
  let i = -1;
  let res = [];
  while(++i < l) {
    // log(i, "range");
    res.push(i);
  }
  return res;
};

var list = range(5);
log(list);
// log(reduce(add, list));

//느긋한 L.range
const L = {
 range: function *(l) {
    // log("이터러블 안에 있는 함수에 평가는 내부에 값을 순회 할때 작동한다.");
    let i = -1;
    while(++i < l) {
      // log(i, "L.range");
      yield i;
    }
  },
};

var list = L.range(5);
log(list);
log(list.next());
log(list.next());
log(list.next());
log(list.next());
// log(reduce(add, list));

// range와 느긋한 L.range 테스트 ==========================================
log("test ============");
function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

test('range', 10, () => reduce(add, range(1000000)));
test('L.range', 10, () => reduce(add, L.range(1000000)));


// take ==========================================
log("take ============");
const take = (l, iter) => {
  let res = [];
  for(const a of iter) {
    res.push(a);
    if(res.length == l) return res;
  }
  return res;
};

log("take(...)", take(10, range(100)));
log("take(...)", take(10, L.range(100)));

log("End");