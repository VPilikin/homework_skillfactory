// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const arr = [2, 3, 4, 5, 6, 7, 0, null, NaN, undefined, "", "2", 2.3];
let odd = 0;
let even = 0;
let zero = 0;
arr.forEach((el) => {
  if (typeof el === "number" && el === 0) ++zero;
  if (typeof el === "number" && el % 2 === 0 && el !== 0) ++even;
  if (typeof el === "number" && el % 2 === 1) ++odd;
});
console.log(`${even} - четных, ${odd} - нечетных, ${zero} - нулей`);