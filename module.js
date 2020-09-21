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
const range = l => {
  let i = -1;
  let res = [];
  while(++i < l) {
    res.push(i);
  }
  return res;
};
const add = (a, b) => a + b;


const go = (...args) => reduce((a, f) => f(a), args);

module.exports = {
  reduce,
  filter,
  map,
  range,
  add,
  go,
}



