//리스트 순회
const log = console.log;
log("리스트 순회 ============");
const list = [1, 2, 3];
const str = 'abc';
log("ES5 리스트 순회===");
log("list");
for(var i = 0; i < list.length; i++) {
  log(list[i]);
}
log("str");
for(var i = 0; i < str.length; i ++) {
  log(str[i]);
}

log("ES6 리스트 순회===");
log("list");
for(const a of list) {
  log(a);
}
log("str");
for(const a of str) {
  log(a);
}

log("Array, set ============");
log('Array --');
const arr = [1, 2, 3];
for (const a of arr) log(a);

log('arr[0]', arr[0]);

log('Array Symbol.iterator--');
let arrIter = arr[Symbol.iterator]();
log("arr[Symbol.iterator]", arrIter);
log(arrIter.next());
log('arrIter.next() one active after');
for (const a of arrIter) log(a);

log('Set --');
const set = new Set([1, 2, 3]);
for (const a of set) log(a);

log('set[0]', set[0]);

log('Set Symbol.iterator--');
let setIter = set[Symbol.iterator]();
log("set[Symbol.iterator]", setIter);
log(setIter.next());
log('setIter.next() one active after');
for (const a of setIter) log(a);



log('Map --');
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const a of map) log(a);

log('map[0]', map[0]);

log('Map Symbol.iterator--');
let mapIter = map[Symbol.iterator]();
log("map[Symbol.iterator]", mapIter);
log(mapIter.next());
log('mapIter.next() one active after');
for (const a of mapIter) log(a);

