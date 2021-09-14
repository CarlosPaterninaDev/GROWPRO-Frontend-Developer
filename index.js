const arrayNumberValidator = require('./utils');

/**
 * @description Funcion para calcular el scoreTotal a partir de una secuencia de valores numericos
 * @param {*} array
 * @returns totalScore: number | null
 */
const totalScore = (array = []) => {
  let points = 0;

  if (arrayNumberValidator(array)) {
    console.log('El arreglo debe contener valores numericos');
    return null;
  }

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

const totalScoreTest1 = totalScore([1, 2, 3, 4, 5]);
const totalScoreTest2 = totalScore([17, 19, 21]);
const totalScoreTest3 = totalScore([5, 5, 5]);
const totalScoreErrorTest = totalScore(['as']);

console.log({
  totalScoreTest1,
  totalScoreTest2,
  totalScoreTest3,
  totalScoreErrorTest,
});

console.table({
  totalScoreTest1,
  totalScoreTest2,
  totalScoreTest3,
  totalScoreErrorTest,
});

/**
 * @description Funcion para calcular el tribonacci a partir de una secuencia de valores numericos y una cantidad maxima de datos
 * @param {*} array  array Numeros
 *  @param {*} n  cantidad de elementos de la secuencia a mostrar
 * @returns array: number[] | null
 */
const tribonacci = (array = [], n) => {
  if (arrayNumberValidator(array)) {
    console.log('El arreglo debe contener valores numericos');
    return null;
  }

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

const tribonacciTest1 = tribonacci([0, 0, 1], 9);
const tribonacciTest2 = tribonacci([1, 1, 1], 5);
const tribonacciTest3 = tribonacci([1, 2, 3], 2);
const tribonacciTest4 = tribonacci([1, 2, 3], 0);
const tribonacciTestError = tribonacci([1, 'a', 3], 0);

console.log({
  tribonacciTest1,
  tribonacciTest2,
  tribonacciTest3,
  tribonacciTest4,
  tribonacciTestError,
});

console.table({
  tribonacciTest1,
  tribonacciTest2,
  tribonacciTest3,
  tribonacciTest4,
  tribonacciTestError,
});
