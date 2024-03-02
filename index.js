// EXAMPLE 1 - Count Occurrences of each Element in an Array in JavaScript

// ✅ Count occurrences of each element in an array
const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); // 👉️ {a: 3, b: 1, c: 2}

console.log(count.a); // 👉️ 3
console.log(count.b); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 2 - Count Occurrences of each Element in an Array using `reduce()`

// const arr = ['b', 'a', 'c', 'b', 'b', 'a'];

// const count = arr.reduce((accumulator, value) => {
//   accumulator[value] = ++accumulator[value] || 1;

//   return accumulator;
// }, {});

// console.log(count); // 👉️ { b: 3, a: 2, c: 1 }

// console.log(count.a); // 👉️ 2
// console.log(count.b); // 👉️ 3
// console.log(count.c); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 3 - Count the Occurrences of each element in an array using `forEach()`

// // ✅ count occurrences of each element in an array
// const arr = ['b', 'a', 'c', 'b', 'b', 'a'];

// const count = {};

// arr.forEach(element => {
//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// });

// // 👇️ { b: 3, a: 2, c: 1 }
// console.log(count);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check how many times an Element appears in an Array using `filter()`

// const arr = ['a', 'b', 'a', 'a'];

// const count = arr.filter(element => {
//   return element === 'a';
// }).length;

// console.log(count); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 5 - Count the Occurrences of each element in an array using a `for` loop

// const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

// const count = {};

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];

//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// }

// console.log(count); // 👉️ {a: 3, b: 1, c: 2}
