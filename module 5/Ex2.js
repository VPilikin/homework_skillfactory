// Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let x;

if (typeof x === "boolean" || typeof x === "number" || typeof x === "string") {
  console.log("x =", typeof x);
} else {
  console.log("Тип x не определён");
}
