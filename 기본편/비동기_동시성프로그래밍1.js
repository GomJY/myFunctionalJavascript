const log = (...any) => console.log(...any);
var {reduce,filter,map,add,go,pipe,curry, L, take, go1} = require('./module');

!async function() {
// log("");
// log("!!!_값으로서의 Promise 활용");
// var delay100 = a => new Promise(res => setTimeout(() => res(a), 100));
// var go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
// var add5 = a => a + 5;

// log(go1(delay100(10), add5));
// go1(go1(delay100(10), add5), a => log("go1 2개연속 사용", a));
// log("====================");

// log("");
// log("!!!_합성 관점에서의 promise와 모나드");
// var g = a => a + 1;
// var f = a => a * a;

// log("f(g(1)) ", f(g(1)));
// log("f(g())", f(g()));
// [1, 2, 3].map(g).map(f).forEach(r => log(r));
// [].map(g).map(f).forEach(r => log(r));

// Array.of(1).map(g).map(f).forEach(r => log(r));

// // 얼마 만큼에 딜레이가 있는 사항에서도 함수를 이용해서 평가를 하기에 편하다
// new Promise(res => setTimeout(() => res(1), 1000)).then(g).then(f).then(r => log("모나드promise : ", r));
// log("================================");


log("");
log("!!!_Kleisli Composition 관점에서의 Promise");
//f . g
// f(g(x)) == f(g(x)) 이렇게 평가할때 f(g(x)) 함수수행중 앞에 값과 뒤에 값이 달라져 함수를 값으로 사용하는데 문세가 생길수 있다.
var users = [
  {id: 1, name: 'aa'},
  {id: 2, name: 'bb'},
  {id: 3, name: 'cc'},
];
const getUserById = id => 
      find(u => u.id == id, users) || Promise.reject('없어요');
var f = ({name}) => name;
var g = getUserById;
// const fg = id => f(g(id));
var fg = id  => Promise.resolve(id).then(g).then(f);

var r = fg(2);

r.then(data => log("fg(2).then : ", data));
users.pop();
users.pop();
log("================================");

log("");
log("go, pipe, reduce에서 비동기 제어");
var go_promise = (a, f, promiseFn) => a instanceof Promise ? Promise.resolve(promiseFn(a)).then(f): f(a);
// log(
//   await go_promise(Promise.resolve(10), a => a + 5, pro =>  pro.then(a => a + 10)),
//   await go_promise(Promise.reject(20), a => a + 5, pro =>  pro.catch(a => a + 10))
// );

await go([Promise.resolve(10), Promise.resolve(20), Promise.resolve(30)], 
  map(a => a * 2),
  a => { log("a2:", a)}, 
  );
log("================================");

log("");
log("promise.then의 중요한 규칙");
Promise.resolve(Promise.resolve(Promise.resolve([1, Promise.resolve(1)]))).then(a => log("promise.then..._ ", a));
let delay1000 = a => new Promise(res => setTimeout(() => res(a), 1000));
const start = new Date();
delay1000(delay1000(delay1000(delay1000(1)))).then(() => log(new Date - start, "ms 경과"));
log("================================");

// log("");
// log("지연 평가 + Promise - L.map, map, take");
// go([1, 2, 3],
//   L.map(a => a + 10),
//   take(2),
//   log
// );

// go([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
//   L.map(a => a + 10),
//   // L.map(a => Promise.resolve(a + 10)),
//   take(2),
//   log
// );
// log("================================");


// log("");
// log("병렬 평가 + Promise - L.map, map, take");
// const C = {};
// C.reduce = curry((f, acc, iter) => iter ? 
//   reduce(f, acc, [...iter]) :
//   reduce(f, [...acc]));
// const delay1000 = a => new Promise(res => setTimeout(() => a, 1000));
// go([1, 2, 3],
//   L.map(a => delay1000(a * a)),
//   // C.reduce(add),
//   reduce(add),
//   log
// );
// log("================================");
log("END ================================");
}();