console.log('asd');

const myFun = (array) => {
  let points = 0;

  array.forEach((element) => {
    if (element === 5) {
      points += 5;
    } else if (element % 2 === 0) {
      points += 1;
    } else {
      points += 3;
    }
  });

  return points;
};

const a = myFun([1, 2, 3, 4, 5]);
const b = myFun([17, 19, 21]);
const c = myFun([5, 5, 5]);

console.log(a, b, c);

const tribonacci = (array = [], n) => {
  const sequence = [...array];

  if (n === 0) {
    return [0];
  }

  for (let index = 0; index < n; index++) {
    let a = 0;

    array.forEach((e) => {
      a += e;
    });

    array.shift();
    array.push(a);

    sequence.push(a);
  }

  return sequence.slice(0, n);
};

const tri = tribonacci([0, 0, 1], 9);
const tri2 = tribonacci([1, 1, 1], 5);
const tri3 = tribonacci([1, 2, 3], 2);
const tri4 = tribonacci([1, 2, 3], 0);

console.log(tri);
console.log(tri2);

console.log(tri3);
console.log(tri4);
