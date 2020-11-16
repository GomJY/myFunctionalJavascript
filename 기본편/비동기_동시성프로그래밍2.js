const log = (...any) => console.log(...any);
var {reduce,filter,map,add,go,pipe,curry, L, take, go1, takeAll, C} = require('./module');
// var {reduce,filter,map,add,go,pipe,curry, L, take, go1} = require('./module_sub');

!async function() {
  log("START================");
  
  // log();
  // log("#지연 평가 + Promise - L.map, map, take====================");
  // log("1_1##go([1, 2, 3]");
  // // go([1, 2, 3],
  // //   // L.map(a => Promise.resolve(a + 10)),
  // //   L.map(a =>a + 10),
  // //   take(2),
  // //   a => log("1_1##go",a));
  // log("1_2##go([Promise.resolve(1)....");
  // go([Promise.resolve(1), 5],
  //   // L.map(a => Promise.resolve(a + 20)),
  //   // takeAll,
  //   // L.map(a => a + 20),
  //   map(a => a + 10),
  //   log);
  // log("====================");
  // log();
  // log("#Kleisli Composition - L.filter, filter, nop, take====================");
  // go([1, 2, 3, 4],
  //   L.map(a => Promise.resolve(a)),
  //   L.filter(a => a % 2),
  //   take(2),
  //   log)
  // log("====================");
  
  // log("");
  // log("reduce에서 nop 지원");
  // go([1, 2, 3, 4],
  //   L.map(a => Promise.resolve(a *a)),
  //   L.filter(a => a % 2),
  //   reduce(add),
  //   log
  //   );
  // log("====================");
  
  // log("");
  // log("지연평가 + Promise의 효율성");
  // let start = new Date();
  // go([1, 2, 3, 4],
  //   L.map(a => {

  //     return new Promise(res => setTimeout(() => {
  //       log("map_a: ",a);
  //       log(new Date() - start);
  //       res(a);
  //     }, 1000));
  //   }),
  //   L.filter(a => {
  //     return new Promise(res => setTimeout(() => {
  //       console.log("filter_a: ", a);
  //       log(new Date() - start);
  //       res(a % 2);
  //     }, 1000));
  //   }),
  //   // reduce(add),
  //   take(3),
  //   log,
  //   a => log(new Date() - start),
  //   );
  // log("====================");
  
  // log("");
  // log("지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take [2]");
  const delay1000 = a => new Promise(res => {
    console.log("delay1000");
    setTimeout(() => res(a), 1000);
  });
  // console.time('');
  // go([1, 2, 3, 4, 5],
  //   L.map(a => delay1000(a * a)),
  //   L.filter(a => {console.log(a); return a % 2;}),
  //   L.map(a => delay1000(a * a)),
  //   C.reduce(add),
  //   log,
  //   _ => console.timeEnd(''));
  //   // ).then(_ => log("C.reduce: ", _));
  // log("====================");
  
  // log("");
  // log("지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take [2]");
  // console.time('');
  // go([1, 2, 3, 4, 5],
  //   L.map(a => delay1000(a * a)),
  //   L.filter(a => {console.log(a); return a % 2;}),
  //   L.map(a => delay1000(a * a)),
  //   C.takeAll,
  //   log,
  //   _ => console.timeEnd(''));
  // log("====================");

  // log("");
  // log("즉시 병렬적으로 평가하기 - C.map, C.filter");
  // console.time('');
  // // C.map(a => delay1000(a * a), [1, 2, 3, 4, 5]).then(log);
  // // C.filter(a => delay1000(a % 2), [1, 2, 3, 4, 5]).then(a => (console.timeEnd(''), log(a)));
  // go([1, 2, 3, 4, 5],
  //   C.map(a => delay1000(a * a)),
  //   filter(a => {console.log(a); return a % 2;}),
  //   // L.map(a => delay1000(a * a)),
  //   reduce(add),
  //   log,
  //   _ => console.timeEnd(''));
  // log("====================");
  
  log("");
  log("즉시, 지연, Promise, 병렬적 조합하기");
  const delay500 = (a, name) => new Promise(res => { 
    console.log(`${name}: ${a}`);
    setTimeout(() => res(a), 1000);
  });

  go([1, 2, 3, 4, 5, 6, 7, 8, 9],
    C.map(a => delay500(a * a, 'map1')),
    C.filter(a => delay500(a % 2, 'filter 2')),
    C.map(a => delay500(a + 1, 'map 3')),
    // take(2),
    C.take(3),
    // C.reduce(add),
  log);
  log("====================");
  
  log("END==================");
}();

setTimeout(() => log(""), 1000);  