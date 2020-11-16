
//일금 => a, 10
const a = 10;
const add10 = a => a + 10;

const r = add10(a);


console.log(r);

//add10(5)은 일급 함수이다.
console.log(add10(5));

const f1 = () => () => 1;
console.log(f1());

const f2 = f1();
console.log(f2);
console.log(f2());

//고차 함수
console.log("고차 함수");
console.log("apply=======");
const apply = f => f(1);
const add2 = a => a + 2;
console.log(apply(add2));
console.log(apply(a => a -1));

console.log("times=======");
const times = (f, n) => {
  let i = -1;
  while(++i  < n) f(i);
}
times(console.log, 3);

console.log("addMaker=======");

const addMaker = a => b => a + b;
const add20 = addMaker(10);
console.log(add20(5));
console.log(add20(10));

