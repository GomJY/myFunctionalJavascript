const curry = f => 
                (a, ..._) => _.length 
                                    ? f(a, ..._) 
                                    : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let res = [];
  for(const p of iter) {
    res.push(f(p));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for(let item of iter) {
    if(f(item)) res.push(item); 
  }
  return res;
});
const reduce = curry((f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const value of iter) {
    acc = f(acc, value);
  }
  return acc;
});

const add = (a, b) => a + b;

const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);


const range = l => {
  let i = -1;
  let res = [];
  while(++i < l) {
    res.push(i);
  }
  return res;
};
const L = {};
L.range = function *(l) {
  let i = -1;
  while(++i < l) {
    yield i;
  }
}

module.exports = {
  reduce,
  filter,
  map,
  range,
  add,
  go,
  pipe,
  curry,
  L
}



